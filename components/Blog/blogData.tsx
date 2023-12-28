import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Pivot Table",
    paragraph:
      "Pivot table is very import tool or command in excel sheet. It helps to summarize our data very easily and we can modify it according to our requirement as per...",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Anshu Kumar",
      image: "/images/blog/anshu.webp",
      designation: "Content Writer",
    },
    tags: ["Pivot"],
    publishDate: "2025",
    slugTitle:''
  },
  {
    id: 2,
    title: "10 Logical Operator",
    paragraph:
      "Logical operators in Excel are essential tools for making decisions, performing comparisons, and filtering data within your spreadsheets.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Anshu Kumar",
      image: "/images/blog/anshu.webp",
      designation: "Content Writer",
    },
    tags: ["Logical"],
    publishDate: "2025",
    slugTitle:''
  },
  {
    id: 3,
    title: "Excel AI Trick",
    paragraph:
      "Artificial Intelligence (AI) is rapidly transforming how we work with data in Microsoft Excel. With AI features and tools integrated into the software.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Anshu Kumar",
      image: "/images/blog/anshu.webp",
      designation: "Content Writer",
    },
    tags: ["Excel AI Tips"],
    publishDate: "2025",
    slugTitle:''
  },
];
export default blogData;
