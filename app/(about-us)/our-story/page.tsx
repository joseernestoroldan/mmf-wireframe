import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage/ContentPage";

export const metadata: Metadata = {
  title: "Our Story | Magic Marble Foundation",
  description:
    "From a small rescue mission to a global movement for animal welfare.",
};

export default function OurStoryPage() {
  return (
    <ContentPage
      badge="About Us"
      title="Our Story"
      subtitle="From a small rescue mission to a global movement for animal welfare."
      image="/carrousel/image03.webp"
      details={[
        {
          heading: "Humble Beginnings",
          text: "Founded with a single rescue and a deep conviction that every animal deserves compassion, safety, and respect.",
        },
        {
          heading: "Global Expansion",
          text: "Growing into an international nonprofit managing shelters, clinics, and relief projects worldwide.",
        },
        {
          heading: "Vision for Tomorrow",
          text: "Pioneering sustainable community-led welfare models that end animal suffering for good.",
        },
      ]}
    >
      <p>
        Magic Marble Foundation was born out of love and relentless dedication. What started with individual acts of kindness has transformed into a worldwide initiative saving thousands of vulnerable lives each year.
      </p>
    </ContentPage>
  );
}
