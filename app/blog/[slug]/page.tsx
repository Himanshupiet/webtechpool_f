import { Metadata, ResolvingMetadata } from 'next'
import {SETTING} from "@/app/app-config/urlConfig";
import BlogDetails from "@/components/BlogDetails/Blogdetails";
import axios from "axios";

export async function generateMetadata(
      Props:any,
      //parent: ResolvingMetadata
    ): Promise<Metadata> {

    const slugTitle = Props.params.slug
    const product = await axios.get(SETTING.APP_CONSTANT.API_URL+`public/getBlogPost/${slugTitle}`)
  return {
    title: product?.data?.data?.title,
    description: product?.data?.data?.blogMetaTag

  }
};

export default function BlogPage() {
    return(
      <BlogDetails/>
    )
}