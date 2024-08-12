// comment-thread.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Article, ArticleService, Comment } from '../article.service';

@Component({
  selector: 'app-comment-thread',
  templateUrl: './comment-thread.component.html',
  styleUrls: ['./comment-thread.component.css']
})
export class CommentThreadComponent {

  @Input() comments: Comment[] = [];
  @Input() article: Article | undefined;
  @Input() showReplyButton: boolean = true;
  @Output() replyClicked = new EventEmitter<any>();

  constructor(private articleService: ArticleService) {}

  likeComment(comment: Comment) {
    if (comment.likedByUser) {
      comment.noOfLikes--;
      comment.likedByUser = false;
    } else {
      comment.noOfLikes++;
      comment.likedByUser = true;
    }
    
  }

  replyToComment(commentId: number | undefined) {
    this.replyClicked.emit(commentId);
  }
}
