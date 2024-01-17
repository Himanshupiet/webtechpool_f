import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'WebTechPool',
  description: 'This websites provide a wide range of tips and tricks to help users work more efficiently with Excel-AI. These can include keyboard shortcuts, time-saving functions, and techniques for common tasks',
}
const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Welcome to Webtechpool, your go-to destination for all things Excel! We're passionate about Microsoft Excel and dedicated to helping you unlock its full potential. Whether you're a beginner just starting your Excel journey or an experienced user looking to sharpen your skills, we're here to guide you every step of the way."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
