"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Toaster } from "react-hot-toast";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className="dark:bg-black">
        <StoreProvider>
        <Providers>
          <Header />
          <Toaster position="top-right" />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
        </StoreProvider>
      </body>
    </html>
  );
}

import { Providers } from "./providers";import StoreProvider from "./storeProvider";

