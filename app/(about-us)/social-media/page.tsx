import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage/ContentPage";

export const metadata: Metadata = {
  title: "Social Media | Magic Marble Foundation",
  description: "Follow our daily rescues and success stories online.",
};

export default function SocialMediaPage() {
  return (
    <ContentPage
      title="Social Media"
      description="Follow our daily rescues and success stories online."
      imageURL="/carrousel/image01.webp"
    >
      <p>Content</p>
    </ContentPage>
  );
}
