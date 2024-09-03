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
    {
      articleId: 3,
      title: 'Metadata in Photos',
      // thumbnail: 'path/to/thumbnail2.jpg',
      description: `Metadata is a term that describes data about data. Photos taken with smartphones and digital cameras contain much information about the photo besides the image itself. This additional information about the photo is called Metadata. 

Metadata allows us to use photo apps on our smartphones and computers to organize, search for, and categorize photos. Some of the Metadata is added automatically by cameras.   

Metadata can be added to the photo file when the camera takes the picture or later in a photo app. There's a lot of information about a photo with the photo in Metadata, some applicable for everyday photographers and some for more advanced amateurs or professionals. `,
      author: 'David Bosh',
      authorBio: 'A showroom owner who is also technology enthusist',
      publishDate: new Date('2024-03-07'),
      noOfLikes: 2,
      images: ['assets/metadata.jpeg'],
      links: ['https://en.wikipedia.org/wiki/Exif'],
      comments: [
        {
          username: 'Richard',
          text: 'Seems nice',
          id: 3,
          noOfLikes: 1,
          replies: [
            {
              username: 'David',
              id: 3,
              text: 'Thanks Richard!',
              noOfLikes: 0
            }
          ]
        }
      ]
    },
    {
      articleId: 4,
      title: 'Should AI be permitted in college classrooms?',
      // thumbnail: 'path/to/thumbnail2.jpg',
      description: `I believe the purpose of a college class is to teach students to think: to read scholarship, ask questions, formulate a thesis, collect and analyze data, draft an essay, take feedback from the instructor and other students, and write a final draft.

One problem with ChatGPT is that it allows students to produce a decent paper without thinking or writing for themselves.Students could get fine grades if they used ChatGPT to “write” their papers. But they will have missed a chance to enter a dialogue with two profound thinkers about a topic that could reshape American higher education and society.

The point of learning to write is not simply intellectual self-discovery.`,
      author: 'David Bosh',
      authorBio: 'A showroom owner who is also technology enthusist',
      publishDate: new Date('2024-03-06'),
      noOfLikes: 5,
      images: ['assets/ai.avif'],
      links: ['https://idronline.org/article/education/can-generative-ai-help-the-education-sector-in-india/?gad_source=1&gclid=CjwKCAjw59q2BhBOEiwAKc0ijdrHFA3CmeUkay--v-RPJWeF3ldsWvr_6ASRwTH2gG29QqkI-PegsBoCm0UQAvD_BwE'],
      comments: [
        {
          username: 'Sarah',
          text: 'Interesting',
          id: 3,
          noOfLikes: 2,
          replies: [
            {
              username: 'David',
              id: 9,
              text: 'Thanks Sarah!',
              noOfLikes: 0
            }
          ]
        }
      ]
    },
    {
      articleId: 5,
      title: 'How to safeguard wildlife by helping zoos',
      // thumbnail: 'path/to/thumbnail2.jpg',
      description: `The word “zoo” is complicated and can have different meanings to different people. For some, a zoo is an organization committed to animal well-being and wildlife conservation that offers its visitors a fun and educational experience. To others, it is a place where people pay to see exotic animals in poor conditions.
      While many zoos have dedicated staff for conservation projects, collaboration with universities can help zoos increase their contribution to conservation science.

Historically, in Canada and other countries, most published research from zoos is related to veterinary sciences, not conservation. Academic institutions can provide scientific and technical expertise in conservation science, as well as access to envelopes of funding that are not available to zoos alone.

University researchers have rigorous science communication requirements that include not only publication in peer-reviewed journals, but conference presentations, lectures and more. When zoos collaborate with universities, they have greater access to funding for conservation research and produce accessible research for conservation practitioners, researchers and the public alike.`,
      author: 'Richard Smith',
      authorBio: 'A scholar from Harvard University who likes nature and wildlife',
      publishDate: new Date('2024-03-05'),
      noOfLikes: 19,
      images: ['assets/zoo.avif'],
      links: ['https://nzpnewdelhi.gov.in/en/page/education_and_conservation'],
      comments: [
        {
          username: 'Vincent',
          text: 'I also feel like we should do something to preserve the wildlife.',
          id: 3,
          noOfLikes: 2,
          replies: [
            {
              username: 'Richard',
              id: 4,
              text: 'Yes Vincent, let us start a group to collect ideas.',
              noOfLikes: 1
            }
          ]
        }
      ]
    },
    {
      articleId: 6,
      title: 'How universities could help whole communities tackle climate change',
      // thumbnail: 'path/to/thumbnail2.jpg',
      description: `As centres of learning, universities have the potential to help whole communities learn about and address climate change. Education can lead us to change our attitudes and behaviour. It can also help us deal with the anxiety or fear of doom that can stun us into inaction.

        But there are aspects of how universities work that can create a divide between them and the communities that live and work around them. Universities could anchor climate collaboration. While many already take part in outreach work, they need to do more to build community links and use the resources they already have more widely.
        Higher education institutions could design courses focused on sustainable living. They could train community educators to work with local residents and provide campus events on sustainable living involving people from the community.

        The university learning environment is designed to support the development of “epistemic agency”: assuming control of our own learning and the development of our own understanding. Epistemic agency is a fundamental feature of our humanity and a useful tool to be deployed to enhance collective responsibility in tackling wicked problems. Universities could support the epistemic agency of whole communities, not just students.

        Universities cannot independently solve the climate crisis. But as custodians and producers of knowledge, universities have the characteristics and resources to support collaborative learning and collective action.The Conversation
        `,
      author: 'Richard Smith',
      authorBio: 'A scholar from Harvard University who likes nature and wildlife',
      publishDate: new Date('2024-02-10'),
      noOfLikes: 4,
      images: ['assets/climate.avif'],
      links: ['https://sciendo.com/article/10.2478/dcse-2021-0022'],
      comments: [
        {
          username: 'Vincent',
          text: 'This could take years to implement though',
          id: 3,
          noOfLikes: 1,
          replies: [
            {
              username: 'Richard',
              id: 4,
              text: 'You are right, it will be slow change',
              noOfLikes: 2
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
