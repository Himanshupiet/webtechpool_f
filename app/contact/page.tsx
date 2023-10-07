import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="At Webtechpool, we value your feedback, questions, and suggestions. We're here to help you with anything related to Excel, whether it's a specific query about our content, a partnership opportunity, or just a friendly hello. Don't hesitate to reach out to us using the following contact details:"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
