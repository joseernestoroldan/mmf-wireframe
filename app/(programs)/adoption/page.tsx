import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage/ContentPage";

export const metadata: Metadata = {
  title: "Adoption | Magic Marble Foundation",
  description:
    "Connecting rescued animals with loving forever homes through our comprehensive adoption process.",
};

export default function AdoptionPage() {
  return (
    <ContentPage
      badge="Programs"
      title="Adoption"
      subtitle="Connecting rescued animals with loving forever homes through our comprehensive adoption process."
      image="/carrousel/image01.webp"
      details={[
        {
          heading: "Careful Matching",
          text: "Aligning the personality, needs, and energy of each animal with the lifestyle of prospective families.",
        },
        {
          heading: "Health & Behavioral Prep",
          text: "All adoptable animals are fully vaccinated, microchipped, spayed/neutered, and behaviorally assessed.",
        },
        {
          heading: "Post-Adoption Support",
          text: "Providing continuous guidance, training advice, and resources to ensure lifelong success for adopted pets.",
        },
      ]}
    >
      <p>
        Every adoption represents a triumph over hardship. Our mission is to ensure that every rescued animal finds not just a home, but a nurturing environment where they are cherished forever.
      </p>
    </ContentPage>
  );
}
