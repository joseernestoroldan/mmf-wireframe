import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage/ContentPage";

export const metadata: Metadata = {
  title: "Financials | Magic Marble Foundation",
  description:
    "Transparency in how every donation is used to save lives.",
};

export default function FinancialsPage() {
  return (
    <ContentPage
      title="Financials"
      description="Transparency in how every donation is used to save lives."
      imageURL="/carrousel/image01.webp"
    >
      <p>Content</p>
    </ContentPage>
  );
}
