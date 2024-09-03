import { Injectable } from '@angular/core';

export interface Article {
  articleId: number;
  title: string;
  thumbnail?: string;
  description: string;
  author: string;
  authorBio?: string;
  images: string[];
  links?: string[];
  publishDate: Date;
  noOfLikes: number;
  comments: Comment[];
  likedByUser?: boolean;
}


export interface Comment {
  id?: number;
  username: string;
  text: string;
  noOfLikes: number;
  likedByUser?: boolean;
  replies?: Comment[];
}

export interface Author {
  name: string;
  authorBio: string;
}


@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private articles: Article[] = [
    {
      articleId: 1,
      title: '3D Printer',
      // thumbnail: 'path/to/thumbnail2.jpg',
      description: `3D printers create objects using by "printing" many thin layers thin of liquid material that dries to a solid shape. These layers are printed one at a time, but when added together, they create a 3 dimensional solid object. Adding layers together is called an "additive" process for creating an object. You might be familiar with wood carving, where the wood carver removes wood to create the sculpture. The carving removes material to create the object, and it's called a "subtractive" process. Much of our manufacturing has been subtractive, where we use tools and machines for removing material to create the shape of the object we want. 3D printers add many thin layers one at a time to create and build an object. Add enough layers together, and you can create a solid object. If you need to make something thicker, adding layers to it is a way to make something that is thin, thicker. Think of a sheet of paper, since it's pretty thin. Add 500 sheets together in a stack (which, by the way, makes a ream of paper), and you've got a thick object. Instead of keeping each sheet of paper separate, imagine that they are glued together into a solid piece of material, and you've got a block, not 500 sheets.`,
      author: 'David Bosh',
      authorBio: 'A showroom owner who is also technology enthusist',
      publishDate: new Date('2024-02-01'),
      noOfLikes: 13,
      images: ['assets/3dprinter.jpg'],
      links: ['https://en.wikipedia.org/wiki/3D_printing'],
      comments: [
        {
          username: 'Michael',
          text: 'Now I want to buy a 3D printer!',
          id: 3,
          noOfLikes: 2,
          replies: [
            {
              username: 'Vincent',
              id: 6,
              text: 'I sell those, please contact me',
              noOfLikes: 1
            }
          ]
        }
      ]
    },
    {
      articleId: 2,
      title: 'What is an NPU?',
      // thumbnail: 'path/to/thumbnail2.jpg',
      description: `A Neural Processing Unit (NPU) is a specialized processor that accelerates machine learning and AI tasks. Think of it as the brain within your device that handles complex computations, enabling it to perform tasks requiring artificial intelligence (AI) more efficiently. 

Traditional processors, like the Central Processing Unit (CPU) and Graphics Processing Unit (GPU), are versatile and handle various tasks. However, the CPU and GPU  are not optimized for the specific demands of AI workloads. While CPUs and GPUs can run AI and machine learning, they are slower, sometimes significantly, than a specialized NPU processor.  

The latest chips in our devices combine a CPU, GPU, and NPU on a single chip, usually called a System on a Chip.`,
      author: 'David Bosh',
      authorBio: 'A showroom owner who is also technology enthusist',
      publishDate: new Date('2024-03-09'),
      noOfLikes: 6,
      images: ['assets/npu.png'],
      links: ['https://en.wikipedia.org/wiki/AI_accelerator'],
      comments: [
        {
          username: 'John',
          text: 'I found the link helpful',
          id: 3,
          noOfLikes: 2,
          replies: [
            {
              username: 'Steve',
              id: 5,
              text: 'me too',
              noOfLikes: 1
            }
          ]
        }
      ]
    },
  ];

  addArticle(article: Article): void {
    this.articles.push(article);
  }

  getArticles() {
    return this.articles;
  }

  getArticleById(articleId: number) {
    return this.articles.find(article => article.articleId == articleId);
  }

  likeArticle(articleId: number): void {
    const article = this.articles.find((a: any) => a.articleId == articleId);
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

  getAuthors(): Author[] {
    const authorsMap: { [name: string]: string } = {};
    this.articles.forEach(article => {
      if (!authorsMap[article.author]) {
        authorsMap[article.author] = article.author || '';
      }
    });
    return Object.keys(authorsMap).map(name => ({
      name,
      authorBio: this.articles.find(el => el.author == name)?.authorBio || ''
    }));
  }

  searchAuthors(query: string): Author[] {
    return this.getAuthors().filter(author =>
      author.name.toLowerCase().includes(query.toLowerCase())
    );
  }

  getArticlesByAuthor(authorName: string): Article[] {
    return this.articles.filter(article => article.author === authorName);
  }


}
