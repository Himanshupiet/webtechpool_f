export type Author = {
  name: string;
  image: string;
  designation: string;
};

export type Blog = {
  id: number;
  slugTitle: string,
  title: string;
  paragraph: string;
  image: string;
  author: Author;
  tags: string[];
  publishDate: string;
};

export type BlogResponseType = {
  id:number;
  alias:false
  tags:string[]
  aliasUrl:string
  altTag:string
  category:string
  blogContent:string
  blogMetaTag:string
  faq:string
  metaKeyword:string
  schemaMarkUp:string
  title:string
  canonicalUrl:string
  created:string
  slugTitle:string
  bannerImageUrl: string
}