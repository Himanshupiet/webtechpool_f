import { Blog } from "@/types/blog";
import { BlogResponseType } from "@/types/blog";
import { Author } from "@/types/blog";

export class BlogConverter implements Blog {
    id: number;
    title: string;
    paragraph: string;
    image: string;
    author: Author;
    tags: string[];
    publishDate: string;
    slugTitle: string;

    constructor(data: BlogResponseType) {
        // console.log('converter...........',data)
        this.id = data?.id;
        this.tags = data.tags && data.tags.length>0? data.tags:['Excel'];
        this.paragraph = data.blogMetaTag;
        this.author =  {
            name:"Anshu",
            designation:"Developer",
            image:"/images/blog/anshu.webp",
        }
        this.publishDate = new Date(data.created).toDateString();
        this.title = data.title;
        this.image = data.bannerImageUrl;
        this.slugTitle= data.slugTitle
    }
}