import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage/ContentPage";

export const metadata: Metadata = {
  title: "Sanctuary | Magic Marble Foundation",
  description:
    "Permanent safe havens for rescued animals in Michigan and Costa Rica, offering lifelong care and freedom.",
};

export default function SanctuaryPage() {
  return (
    <ContentPage
      title="Sanctuary"
      description="Permanent safe havens for rescued animals in Michigan and Costa Rica, offering lifelong care and freedom."
      imageURL="/carrousel/image01.webp"
    >
      <p>Content</p>
    </ContentPage>
  );
}
