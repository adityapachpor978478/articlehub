import { Component } from '@angular/core';
import { Article, ArticleService } from '../article.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent {
  title: string = '';
  description: string = '';
  links: string[] = [];
  imageUrl: string = '';
  author: string = 'admin';
  authorBio: string = 'System Admin';
  publishDate: Date = new Date();

  constructor(private articleService: ArticleService, private router:Router) {}

  goBack() {
    this.router.navigate(['/dashboard']);
  }

  onImageUpload(event: any): void {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imageUrl = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  addLink(link: string): void {
    if (link) {
      this.links.push(link);
    }
  }

  removeLink(index: number): void {
    this.links.splice(index, 1);
  }

  addArticle(): void {
    const newArticle: Article = {
      articleId: Date.now(),
      title: this.title,
      thumbnail: this.imageUrl,
      description: this.description,
      author: this.author,
      authorBio: this.authorBio,
      images: [this.imageUrl],
      links: this.links,
      publishDate: this.publishDate,
      noOfLikes: 0,
      comments: [],
      likedByUser: false
    };

    this.articleService.addArticle(newArticle);
    // Reset form
    this.title = '';
    this.description = '';
    this.links = [];
    this.imageUrl = '';
    this.router.navigate(['/dashboard/article', newArticle.articleId]);
  }
}
