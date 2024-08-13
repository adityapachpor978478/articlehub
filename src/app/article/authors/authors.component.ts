import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService, Author } from '../article.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.css'
})
export class AuthorsComponent implements OnInit {

  authors: Author[] = [];
  searchQuery: string = '';

  constructor(private route: ActivatedRoute, private articleService: ArticleService, private router: Router) { }
  ngOnInit(): void {
    this.authors = this.articleService.getAuthors();
  }


  goBack() {
    this.router.navigate(['/dashboard']);
  }

  searchAuthors(): void {
    this.authors = this.articleService.searchAuthors(this.searchQuery);
  }

  viewAuthorDetails(authorName: string): void {
    this.router.navigate(['/dashboard/author-details', authorName]);
  }

}
