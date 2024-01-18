//"use client"
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Loader from "@/components/Loader/Loader";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Inter } from "@next/font/google";
//import react, {useEffect, useState} from "react";

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'WebTechPool',
  description: 'This websites provide a wide range of tips and tricks to help users work more efficiently with Excel-AI. These can include keyboard shortcuts, time-saving functions, and techniques for common tasks',
  keywords:"best java development company, offshore software developer India, web application development, web app development company India, web app developer,top block chain development companies India,",
  metadataBase: new URL('https://www.webtechpool.com'),
  openGraph: {
    title: 'WebTechPool',
    description: 'This websites provide a wide range of tips and tricks to help users work more efficiently with Excel-AI. These can include keyboard shortcuts, time-saving functions, and techniques for common tasks',
    url: 'https://www.webtechpool.com',
    siteName: 'Webtechpool',
    images: [
      {
        url: 'https://www.webtechpool.com/images/logo192.ico', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://www.webtechpool.com/images/logo192.ico', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'webtechpool',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  //image_url:"/images/logo/rsz_webtechpool_logo_anshu_kumarcrop.png"
  
}
{/* <Head>
<link rel="canonical" href={`${process.env.NEXT_PUBLIC_BASE_URL}${pathname}`} />
<meta name="description" content="Decipher Zone is a nonpareil software outsourcing company which provides Website, Mobile, Java application and Crypto development solutions where trailblazing coding techniques along with agile methodology is used to produce customizable software solutions at optimum cost." />
<meta name="keywords" content="best java development company, offshore software developer India, web application development, web app development company India, web app developer,top block chain development companies India," />
<meta name="image_url" content={`${process.env.NEXT_PUBLIC_BASE_URL_IMAGE}/dz_logo.png`} />
        
<meta property="og:title" content="Java Web application Development Company" />
<meta property="og:url" content={`${process.env.NEXT_PUBLIC_BASE_URL}${pathname}`} />
<meta property="og:description" content="Decipher Zone is a nonpareil software outsourcing company which provides Website, Mobile, Java application and Crypto development solutions where trailblazing coding techniques along with agile methodology is used to produce customizable software solutions at optimum cost." />
<meta property="og:image" content={`${process.env.NEXT_PUBLIC_BASE_URL_IMAGE}/dz_logo.png`} />
<meta property="og:site_name" content="Java Web application Development Company"/>
<meta property="og:type" content={`${process.env.NEXT_PUBLIC_BASE_URL}${pathname}`}/>
<meta property="og:locale" content="en_US" />

<meta name="twitter:title" content="Java Web application Development Company"/>
<meta name="twitter:description" content="Decipher Zone is a nonpareil software outsourcing company which provides Website, Mobile, Java application and Crypto development solutions where trailblazing coding techniques along with agile methodology is used to produce customizable software solutions at optimum cost."/>
<meta name="twitter:image:src" content={`${process.env.NEXT_PUBLIC_BASE_URL_IMAGE}/dz_logo.png`} />
<meta name="twitter:url" content={`${process.env.NEXT_PUBLIC_BASE_URL}${pathname}`} />

<meta itemProp="name" content="Java Web application Development Company" />
<meta itemProp="description" content="Decipher Zone is a nonpareil software outsourcing company which provides Website, Mobile, Java application and Crypto development solutions where trailblazing coding techniques along with agile methodology is used to produce customizable software solutions at optimum cost." />
<meta itemProp="logo" content={`${process.env.NEXT_PUBLIC_BASE_URL_IMAGE}/dz_logo.png`}/>
<meta itemProp="type" content="Organization" />
<meta itemProp="url" content={`${process.env.NEXT_PUBLIC_BASE_URL}${pathname}`} />
<title>Java Web application Development Company</title>
</Head> */}

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
// const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     setTimeout(() => setLoading(false), 300);
//   }, []);

  return (
    <>
      {/* <Loader loading={loading} /> */}
      <ScrollUp />
      <Hero />
      <Features />
      {/* <Video /> */}
      {/* <Brands /> */}
      {/* <AboutSectionOne />
      <AboutSectionTwo /> */}
      {/* <Pricing /> */}
      <Blog />
      <Testimonials />
      <Contact />
    </>
  );
}
