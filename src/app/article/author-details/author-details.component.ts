import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article, ArticleService, Author } from '../article.service';


@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent implements OnInit {
  author!: Author;
  articles: Article[] = [];

  constructor(private route: ActivatedRoute, private articleService: ArticleService, private router: Router) {}

  ngOnInit(): void {
    const authorName = this.route.snapshot.paramMap.get('name')!;
    this.author = this.articleService.getAuthors().find(author => author.name === authorName)!;
    this.articles = this.articleService.getArticlesByAuthor(authorName);
  }

  goBack() {
    this.router.navigate(['/dashboard/authors']);
  }
}
