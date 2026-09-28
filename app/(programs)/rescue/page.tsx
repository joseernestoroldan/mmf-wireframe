import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage/ContentPage";

export const metadata: Metadata = {
  title: "Rescue | Magic Marble Foundation",
  description:
    "Emergency interventions to save animals from abuse, neglect, and dangerous situations worldwide.",
};

export default function RescuePage() {
  return (
    <ContentPage
      badge="Programs"
      title="Rescue"
      subtitle="Emergency interventions to save animals from abuse, neglect, and dangerous situations worldwide."
      image="/carrousel/image03.webp"
      details={[
        {
          heading: "Emergency Response",
          text: "Deploying rapid-response teams to extract animals from acute danger, severe neglect, and illegal trafficking.",
        },
        {
          heading: "Urgent Veterinary Care",
          text: "Providing immediate diagnostics, surgery, pain relief, and intensive care upon rescue.",
        },
        {
          heading: "Rehabilitation Path",
          text: "Guiding every rescued animal through a tailored medical and psychological recovery journey.",
        },
      ]}
    >
      <p>
        Our rescue operations are the lifeline for animals caught in critical situations. Whether dealing with severe cruelty cases, abandoned strays in need of trauma care, or animals trapped in high-risk environments, our teams take immediate action to bring them to safety.
      </p>
    </ContentPage>
  );
}
