import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage/ContentPage";

export const metadata: Metadata = {
  title: "Visit Us | Magic Marble Foundation",
  description:
    "Come see our sanctuaries and meet the animals whose lives have been transformed by your support.",
};

export default function VisitUsPage() {
  return (
    <ContentPage
      title="Visit Us"
      description="Come see our sanctuaries and meet the animals whose lives have been transformed by your support."
      imageURL="/carrousel/image01.webp"
    >
      <p>Content</p>
    </ContentPage>
  );
}
