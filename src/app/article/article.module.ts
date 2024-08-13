import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './article.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { CommentThreadComponent } from './comment-thread/comment-thread.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorDetailsComponent } from './author-details/author-details.component';


@NgModule({
  declarations: [
    ArticleComponent,
    DashboardComponent,
    ArticleDetailsComponent,
    AddArticleComponent,
    CommentThreadComponent,
    AuthorsComponent,
    AuthorDetailsComponent
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    FormsModule
    
  ]
})
export class ArticleModule { }
