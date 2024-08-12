import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  articles: any = [];
  filteredArticles: any = [];
  currentPage = 1;
  articlesPerPage = 10;
  searchText = '';
  sortOption = 'latest';
  totalPages = 1;

  constructor(private articleService: ArticleService, private router: Router, private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.articles = this.articleService.getArticles();
    this.totalPages = Math.ceil(this.articles.length / this.articlesPerPage);
    this.updateFilteredArticles();
  }

  // updateFilteredArticles() {
  //   this.filteredArticles = this.articles
  //     .filter((article: any) => article.title.toLowerCase().includes(this.searchText.toLowerCase()))
  //     .sort((a: any, b: any) => this.sortArticles(a, b))
  //     .slice((this.currentPage - 1) * this.articlesPerPage, this.currentPage * this.articlesPerPage);
  // }

  updateFilteredArticles() {
    const searchTextLower = this.searchText.toLowerCase();
    
    // Filter articles based on search text
    let filtered = this.articles.filter((article:any) =>
      article.title.toLowerCase().includes(searchTextLower) ||
      article.author.toLowerCase().includes(searchTextLower) ||
      article.description.toLowerCase().includes(searchTextLower)
    );
  
    // Sort articles based on the selected sort option
    filtered = filtered.sort((a: any, b: any) => {
      if (this.sortOption === 'mostPopular') {
        return b.noOfLikes - a.noOfLikes; // Sort by most popular
      } else {
        return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime(); // Sort by latest
      }
    });
  
    // Update total pages based on filtered results
    this.totalPages = Math.ceil(filtered.length / this.articlesPerPage);
  
    // Update filtered articles for the current page
    this.filteredArticles = filtered.slice((this.currentPage - 1) * this.articlesPerPage, this.currentPage * this.articlesPerPage);
  }
  
  applyFilters() {
    this.currentPage = 1; // Reset to the first page when filters are applied
    this.updateFilteredArticles();
  }
  

  // onSearch() {
  //   this.currentPage = 1;
  //   this.updateFilteredArticles();
  // }

  // onSortChange() {
  //   this.currentPage = 1;
  //   this.updateFilteredArticles();
  // }

  sortArticles(a: any, b: any) {
    if (this.sortOption === 'latest') {
      return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
    } else {
      return b.noOfLikes - a.noOfLikes;
    }
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.updateFilteredArticles();
  }

  navigateToArticle(articleId: string) {
    this.router.navigate(['/dashboard/article', articleId]);
  }

  navigateToAuthors() {
    this.router.navigate(['/dashboard/authors']);
  }

  isPreviousDisabled(): boolean {
    return this.currentPage === 1;
  }

  isNextDisabled(): boolean {
    return this.currentPage === this.totalPages;
  }

  // getIterables() {
  //   return [].constructor(Math.ceil(this.articles.length / this.articlesPerPage));
  // }

  // isDisabled() {
  //   return this.currentPage === Math.ceil(this.articles.length / this.articlesPerPage);
  // }
}
