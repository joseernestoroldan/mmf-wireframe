import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage/ContentPage";

export const metadata: Metadata = {
  title: "Donate | Magic Marble Foundation",
  description:
    "Your contribution directly funds rescues, medical care, and food for animals in need.",
};

export default function DonatePage() {
  return (
    <ContentPage
      title="Donate"
      description="Your contribution directly funds rescues, medical care, and food for animals in need."
      imageURL="/carrousel/image01.webp"
    >
      <p>Content</p>
    </ContentPage>
  );
}
