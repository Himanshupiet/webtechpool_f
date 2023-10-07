import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

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
