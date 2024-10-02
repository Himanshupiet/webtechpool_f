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
    description: product?.data?.data?.blogMetaTag,
    generator: 'webtechpool.com',
    applicationName: 'webtechpool.com',
    referrer: 'origin-when-cross-origin',
    keywords: product?.data?.data?.tags,
    authors: [{ name: 'Anshu' }, { name: 'Anshu', url: 'https://webtechpool.com' }],
    creator: 'Anshu',
    publisher: 'webtechool.com',
    bookmarks: [`https://www.webtechpool.com/blog/${product?.data?.data?.slugTitle}`],
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(`http://webtechpool.com/`),
    alternates: {
      canonical: '/',
      languages: {
        'en-US': '/en-US',
        'de-DE': '/de-DE',
      },
    },
    openGraph: {
      title: product?.data?.data?.title,
      description: product?.data?.data?.blogMetaTag,
      url: `https://www.webtechpool.com/blog/${product?.data?.data?.slugTitle}`,
      siteName: 'Webtechpool',
      images: [
        {
          url: product?.data?.data?.bannerImageUrl, // Must be an absolute URL
          width: 800,
          height: 600,
        },
        // {
        //   url: 'https://www.webtechpool.com/images/logo192.ico', // Must be an absolute URL
        //   width: 1800,
        //   height: 1600,
        //   alt: 'webtechpool',
        // },
      ],
      locale: 'en_US',
      type: 'website',
    },
    //i

  }
};

export default function BlogPage() {
    return(
      <BlogDetails/>
    )
}