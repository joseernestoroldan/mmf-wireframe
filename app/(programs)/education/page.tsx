import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage/ContentPage";

export const metadata: Metadata = {
  title: "Education | Magic Marble Foundation",
  description:
    "Community outreach programs teaching compassion, responsible pet ownership, and animal welfare awareness.",
};

export default function EducationPage() {
  return (
    <ContentPage
      badge="Programs"
      title="Education"
      subtitle="Community outreach programs teaching compassion, responsible pet ownership, and animal welfare awareness."
      image="/carrousel/image03.webp"
      details={[
        {
          heading: "School Workshops",
          text: "Interactive curricula designed for elementary and secondary schools fostering empathy and humane literacy.",
        },
        {
          heading: "Community Seminars",
          text: "Hands-on sessions on animal first aid, bite prevention, rabies awareness, and compassionate coexistence.",
        },
        {
          heading: "Advocacy & Outreach",
          text: "Working with community leaders and local governments to champion animal welfare laws and policies.",
        },
      ]}
    >
      <p>
        Lasting change begins with education. By teaching the next generation to value and protect animals, we create communities where cruelty is prevented before it happens.
      </p>
    </ContentPage>
  );
}
