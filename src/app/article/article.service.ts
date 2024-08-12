import { Injectable } from '@angular/core';

export interface Article {
  articleId: number;
  title: string;
  thumbnail: string;
  description: string;
  author: string;
  images: string[];
  links: string[];
  publishDate: Date;
  noOfLikes: number;
  comments: Comment[];
  likedByUser?: boolean;  // Add this line
}


export interface Comment {
  id?: number;
  username: string;
  text: string;
  noOfLikes: number;
  likedByUser?: boolean;  // Track if the user liked the comment
  replies?: Comment[];    // Add this line for nested replies
}


@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private articles: Article[] = [
    // Add 12 articles here with 4 articles per author
    {
      articleId: 1,
      title: 'First Article',
      thumbnail: 'path/to/thumbnail1.jpg',
      description: 'This is the description of the first article.',
      author: 'Author 8',
      publishDate: new Date('2024-01-01'),
      noOfLikes: 10,
      images: ['path/to/image1.jpg'],
      links: ['https://example.com'],
      comments: [
        {
          username: 'User1',
          text: 'Great article!',
          id: 1,
          noOfLikes: 2,
          replies: [
            {
              username: 'User2',
              id: 2,
              text: 'I agree!',
              noOfLikes: 1
            }
          ]
        }
      ]
    },
    {
      articleId: 2,
      title: 'Second Article',
      thumbnail: 'path/to/thumbnail2.jpg',
      description: 'This is the description of the second article.',
      author: 'Author 1',
      publishDate: new Date('2024-01-02'),
      noOfLikes: 10,
      images: ['path/to/image2.jpg'],
      links: ['https://example.com'],
      comments: [
        {
          username: 'User2',
          text: 'Nice article!',
          id: 3,
          noOfLikes: 3,
          replies: [
            {
              id: 4,
              username: 'User3',
              text: 'Totally!',
              noOfLikes: 2
            }
          ]
        }
      ]
    },
   ];

  getArticles() {
    return this.articles;
  }

  getArticleById(articleId: number) {
    return this.articles.find(article => article.articleId == articleId);
  }

  likeArticle(articleId: number): void {
    const article = this.articles.find((a:any) => a.articleId == articleId);
    if (article && !article.likedByUser) {
      article.noOfLikes++;
      article.likedByUser = true;
    }
  }
  
  unlikeArticle(articleId: number): void {
    const article = this.articles.find((a: any) => a.articleId === articleId);
    if (article && article.likedByUser) {
      article.noOfLikes--;
      article.likedByUser = false;
    }
  }
  
  addReply(articleId: number, parentCommentId: number, reply: Comment): void {
    const article = this.articles.find(a => a.articleId === articleId);
    const parentComment = this.findCommentById(article?.comments, parentCommentId);
    if (parentComment) {
      parentComment.replies = parentComment.replies || [];
      parentComment.replies.push(reply);
    }
  }
  
  private findCommentById(comments: Comment[] | undefined, id: number): Comment | undefined {
    if (!comments) return undefined;
    for (const comment of comments) {
      if (comment.id === id) {
        return comment;
      }
      if (comment.replies) {
        const found = this.findCommentById(comment.replies, id);
        if (found) {
          return found;
        }
      }
    }
    return undefined;
  }
  
  
  
}
