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
    {
      articleId: 7,
      title: 'The biology of smell is a mystery',
      // thumbnail: 'path/to/thumbnail2.jpg',
      description: `one of the problems with understanding smell: the chemical structure of a molecule tells you almost nothing about its odour. Two chemicals with very similar structures can smell wildly different; and two wildly different chemical structures can produce an almost identical odour. And most smells — coffee, Camembert, ripe tomatoes — are mixtures of many tens or hundreds of aroma molecules, intensifying the challenge of understanding how chemistry gives rise to olfactory experience.

Another problem is working out how smells relate to each other. With vision, the spectrum is a simple colour palette: red, green, blue and all their swirling intermediates. Sounds have a frequency and a volume, but for smell there are no obvious parameters. Where does an odour identifiable as ‘frost’ sit in relation to ‘sauna’? It’s a real challenge to make predictions about smell, says Joel Mainland, a neuroscientist at the Monell Chemical Senses Center, an independent research institute in Philadelphia, Pennsylvania.
      `,
      author: 'Richard Smith',
      authorBio: 'A scholar from Harvard University who likes nature and wildlife',
      publishDate: new Date('2024-01-6'),
      noOfLikes: 11,
      images: ['assets/smell.gif'],
      links: ['https://en.wikipedia.org/wiki/Sense_of_smell'],
      comments: [
        {
          username: 'Kramer',
          text: 'wow! never thought there were so many factors behind smell',
          id: 3,
          noOfLikes: 3,
          replies: [
            {
              username: 'Julie',
              id: 4,
              text: 'Haha same!',
              noOfLikes: 2
            }
          ]
        }
      ]
    },
    {
      articleId: 8,
      title: 'Why I love drilling in the mountains early in the morning',
      // thumbnail: 'path/to/thumbnail2.jpg',
      description: `I'm a technician with the Institute for Interdisciplinary Mountain Research of the Austrian Academy of Sciences in Innsbruck. I often work in temperatures as low as −18 °C, fixing small parts of equipment, so sometimes I can’t wear gloves. It takes a certain type of person to do this: you have to be able to focus when you’re very cold. Everyone on the team is very resilient, knowledgeable and quick to solve problems.

Variations in the layers of the glacier's ice cores reveal periods of expansion and retreat over 6,000 years. By aligning the history of the glacier with temperature records that have been collected since 1850, we can see how the climate of Europe’s alpine region has changed with global warming and how it’s likely to change in the future. The ice is a climate archive.

I'm in the mountains for around 70 days a year, mostly from May to the end of September. I love this work, because I’m outside using my hands and my brain, and I’m playing a part in achieving a better understanding of our world.”
      `,
      author: 'Richard Smith',
      authorBio: 'A scholar from Harvard University who likes nature and wildlife',
      publishDate: new Date('2024-01-7'),
      noOfLikes: 17,
      images: ['assets/mountain.webp'],
      links: ['https://en.wikipedia.org/wiki/Ice_drilling'],
      comments: [
        {
          username: 'Geoge',
          text: 'I wish I had such a cool job!',
          id: 3,
          noOfLikes: 1,
          replies: [
            {
              username: 'Richard',
              id: 4,
              text: 'You are welcome to join me George!',
              noOfLikes: 1
            }
          ]
        }
      ]
    },
    {
      articleId: 9,
      title: 'Pulp, paper, and packaging in the next decade',
      // thumbnail: 'path/to/thumbnail2.jpg',
      description: `From what you read in the press and hear on the street, you might be excused for believing the paper and forest-products industry is disappearing fast in the wake of digitization. The year 2015 saw worldwide demand for graphic paper decline for the first time ever, and the fall in demand for these products in North America and Europe over the past five years has been more pronounced than even the most pessimistic forecasts.

But the paper and forest-products industry as a whole is growing, albeit at a slower pace than before, as other products are filling the gap left by the shrinking graphic-paper1 market (Exhibit 1). Packaging is growing all over the world, along with tissue papers, and pulp for hygiene products. Although a relatively small market as yet, pulp for textile applications is growing. And a broad search for new applications and uses for wood and its components is taking place in numerous labs and development centers. The paper and forest-products industry is not disappearing—far from it. But it is changing, morphing, and developing. We would argue that the industry is going through the most substantial transformation it has seen in many decades.
      `,
      author: 'Steve Carell',
      authorBio: 'Regional Manager at a paper company who enjoys every moment of his life',
      publishDate: new Date('2023-05-12'),
      noOfLikes: 11,
      images: ['assets/paper.jpg'],
      links: ['https://en.wikipedia.org/wiki/Paper_(company)'],
      comments: [
        {
          username: 'Dwight',
          text: 'Could you please share insights about the changes we would face in paper sales?',
          id: 3,
          noOfLikes: 2,
          replies: [
            {
              username: 'Angela',
              id: 4,
              text: 'Yes, I\'d like to know that too!',
              noOfLikes: 1
            }
          ]
        }
      ]
    },
    {
      articleId: 10,
      title: 'Paper Organizing & Management',
      // thumbnail: 'path/to/thumbnail2.jpg',
      description: `
      id you know that, according to the National Association of Organizing & Productivity Professionals (NAPO), the average American receives 49,060 pieces of mail in their lifetime and much of it is junk mail?

At the same time, the Small Business Administration reports that 80% of the papers we file are never looked at again.

Paper clutter can take many forms – from bills and receipts piling up – to business and inventory documentation issues.
      Many documents come through the mail that look very “official”, very “legal”, but they really are just solicitations. With our paper expertise, we can very quickly segregate junk mail from legitimate mail. We clear out the piles of paper and unopened envelopes.

      `,
      author: 'Steve Carell',
      authorBio: 'Regional Manager at a paper company who enjoys every moment of his life',
      publishDate: new Date('2023-04-11'),
      noOfLikes: 5,
      images: ['assets/papermanagement.jpg'],
      links: ['https://en.wikipedia.org/wiki/Mail'],
      comments: [
        {
          username: 'Dwight',
          text: 'It seems to be necessary to manage the mails',
          id: 3,
          noOfLikes: 2,
          replies: [
            {
              username: 'Tony',
              id: 4,
              text: 'I always keep it as priority before it piles up',
              noOfLikes: 0
            }
          ]
        }
      ]
    },
    {
      articleId: 11,
      title: 'Paper-Based Processes Worth Automating for Your Business',
      // thumbnail: 'path/to/thumbnail2.jpg',
      description: `Depending on the scanning technology that you employ, along with whether or not the documents are stored as images, the major issue here is that none of the content in the documents is actually searchable. This type of document storage is usually combined with some form of metadata attached to each file. Examples include the name of the document, the date, the author and even a summary of what is inside. The metadata is usually kept in a database, and this is what is searchable - not the document itself.

While using document scanning can certainly be a viable solution under specific conditions, it's less than ideal for these reasons. It can, however, be a good way to digitize old documents, such as property deeds that may be handwritten and may be decades or even hundreds of years old.

Another method of scanning documents has to do with a situation where you're dealing with files that were originally typeset or done with a work processor as opposed to being handwritten. They can be scanned using optical character recognition technology, also commonly referred to as OCR. This will generate documents that are searchable once they have been fully converted into their final digital form.
      `,
      author: 'Steve Carell',
      authorBio: 'Regional Manager at a paper company who enjoys every moment of his life',
      publishDate: new Date('2023-03-20'),
      noOfLikes: 6,
      images: ['assets/automate.jpg'],
      links: ['https://en.wikipedia.org/wiki/Digital_mailroom'],
      comments: [
        {
          username: 'James',
          text: 'I need to buy a scanner',
          id: 3,
          noOfLikes: 1,
          replies: [
            {
              username: 'Oscar',
              id: 4,
              text: 'Same here',
              noOfLikes: 1
            }
          ]
        }
      ]
    },
    {
      articleId: 12,
      title: 'Packaging and paper',
      // thumbnail: 'path/to/thumbnail2.jpg',
      description: `The world of paper and forest products is both rooted in tradition, centered as it is on the harvesting of basic materials and undergoing enormous change as consumption patterns evolve. We help clients refine their business strategies and operating models to resolve pressing business problems, such as how and where to find growth when their core business is stagnant or contracting, how to reduce costs throughout the business in the face of intense cost-price pressure, and how to evolve strategies and transition capacity in declining markets such as graphic papers. We also help companies respond to opportunities to innovate both in operations areas such as energy consumption and in product lines such as packaging.
      `,
      author: 'Steve Carell',
      authorBio: 'Regional Manager at a paper company who enjoys every moment of his life',
      publishDate: new Date('2023-02-12'),
      noOfLikes: 3,
      images: ['assets/packaging.webp'],
      links: ['https://en.wikipedia.org/wiki/Paper'],
      comments: [
        {
          username: 'Phyllis',
          text: 'Good read',
          id: 3,
          noOfLikes: 1,
          replies: [
            {
              username: 'Meridith',
              id: 4,
              text: 'yes',
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
