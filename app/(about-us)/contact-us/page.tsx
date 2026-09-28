import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage/ContentPage";

export const metadata: Metadata = {
  title: "Contact Us | Magic Marble Foundation",
  description:
    "Get in touch for partnerships, press, or general inquiries.",
};

export default function ContactUsPage() {
  return (
    <ContentPage
      badge="About Us"
      title="Contact Us"
      subtitle="Get in touch for partnerships, press, or general inquiries."
      image="/carrousel/image02.webp"
      details={[
        {
          heading: "General Inquiries",
          text: "Email: info@magicmarblefoundation.org | We respond to all questions within 24–48 hours.",
        },
        {
          heading: "Partnerships & Press",
          text: "Collaborate on animal welfare initiatives, corporate sponsorships, and media features.",
        },
        {
          heading: "Emergency Rescue Lines",
          text: "Direct hotlines available for urgent field alerts and veterinary crisis coordination.",
        },
      ]}
    >
      <p>
        Whether you want to partner with us, ask about our rescue operations, or learn how to bring animal welfare initiatives to your area, we would love to hear from you.
      </p>
    </ContentPage>
  );
}
