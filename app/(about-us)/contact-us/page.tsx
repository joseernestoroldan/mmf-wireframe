import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage/ContentPage";

export const metadata: Metadata = {
  title: "Contact Us | Magic Marble Foundation",
  description: "Get in touch for partnerships, press, or general inquiries.",
};

export default function ContactUsPage() {
  return (
    <ContentPage
      title="Contact Us"
      description="Get in touch for partnerships, press, or general inquiries."
      imageURL="/carrousel/image01.webp"
    >
      <p>Content</p>
    </ContentPage>
  );
}
