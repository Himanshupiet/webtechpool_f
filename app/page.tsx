"use client"
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
import react, {useEffect, useState} from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => setLoading(true), 1000);
  }, []);

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
