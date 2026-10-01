import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage/ContentPage";

export const metadata: Metadata = {
  title: "Care Center Nepal | Magic Marble Foundation",
  description:
    "A full-service veterinary clinic in Kathmandu providing medical care, rehabilitation, and shelter.",
};

export default function CareCenterPage() {
  return (
    <ContentPage
      title="Care Center Nepal"
      description="A full-service veterinary clinic in Kathmandu providing medical care, rehabilitation, and shelter."
      imageURL="/carrousel/image01.webp"
    >
      <p>Content</p>
    </ContentPage>
  );
}
