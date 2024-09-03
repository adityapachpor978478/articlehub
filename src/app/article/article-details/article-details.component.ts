import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../article.service';
import { Comment } from '../article.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {
  article: any;
  suggestions: any;

  showReplyBox = false;
  addCommentBox = false;
  replyText = '';
  commentText = '';
  replyingToCommentId?: number;

  constructor(private route: ActivatedRoute, private articleService: ArticleService, private router: Router) { }

  ngOnInit(): void {
    this.route.snapshot.paramMap.get('articleId');
    this.route.params.subscribe((data: any) => {
      const articleId = data.articleId;
      this.article = this.articleService.getArticleById(articleId);
      this.suggestions = this.articleService.getArticles().filter(a => (a.author === this.article.author && a.articleId != articleId));
    })

  }

  navigateToArticle(articleId: string) {
    this.router.navigate(['/dashboard/article', articleId]);
  }

  goBack() {
    this.router.navigate(['/dashboard']);
  }

  urlify(text: any) {
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, function (url: string) {
      return `<a href="${url}" target="_blank">${url}</a>`;
    })
  }

  toggleLike() {
    if (this.article.likedByUser) {
      this.articleService.unlikeArticle(this.article.articleId);
    } else {
      this.articleService.likeArticle(this.article.articleId);
    }
    // this.article.likedByUser = !this.article.likedByUser;
  }

  likeComment(comment: Comment) {
    if (comment.likedByUser) {
      // this.articleService.unlikeComment(this.article.articleId, comment.id || 99999);
      comment.noOfLikes--;
      comment.likedByUser = false;
    } else {
      // this.articleService.likeComment(this.article.articleId, comment.id || 99999);
      comment.noOfLikes++;
      comment.likedByUser = true;
    }
    comment.likedByUser = !comment.likedByUser;
  }

  replyToComment(commentId: number) {
    this.showReplyBox = false;
    this.replyText = '';
    this.replyingToCommentId = undefined;
    setTimeout(() => {
      this.replyingToCommentId = commentId;
      this.showReplyBox = true;
    }, 1)
  }

  submitReply() {
    if (this.replyText.trim() && this.replyingToCommentId !== undefined) {
      const newReply: Comment = {
        id: Date.now(), // Generate a unique ID for the reply
        username: 'admin',
        text: this.replyText,
        noOfLikes: 0
      };
      this.articleService.addReply(this.article.articleId, this.replyingToCommentId, newReply);
      this.replyText = '';
      this.showReplyBox = false;
      this.replyingToCommentId = undefined;
    }
  }
  submitComment() {
    if (this.commentText.trim()) {
      const newComment: Comment = {
        id: Date.now(), // Generate a unique ID for the reply
        username: 'admin',
        text: this.commentText,
        noOfLikes: 0
      };
      if (!this.article.comments) {
        this.article.comments = [];
      }
      this.article.comments.push(newComment)
      this.commentText = '';
      this.addCommentBox = false;
    }
  }

  addNewComment() {
    this.addCommentBox = true;
  }


}
