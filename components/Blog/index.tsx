import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";

const Blog = () => {
  return (
    <section id="blog" className="bg-primary/5 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          width="1000px"
          title="Our Latest Blogs"
          paragraph="Unlock the full potential of Excel with our latest blog posts on powerful Excel tricks. Discover time-saving shortcuts, expert tips for data analysis, and innovative ways to supercharge your spreadsheet skills. Whether you're a beginner or an Excel pro, our blogs have something for everyone. Dive in and elevate your Excel game today"
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogData.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
