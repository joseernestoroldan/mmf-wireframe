import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage/ContentPage";

export const metadata: Metadata = {
  title: "Who We Are | Magic Marble Foundation",
  description:
    "Meet the passionate team behind our worldwide operations.",
};

export default function WhoWeArePage() {
  return (
    <ContentPage
      badge="About Us"
      title="Who We Are"
      subtitle="Meet the passionate team behind our worldwide operations."
      image="/carrousel/image01.webp"
      details={[
        {
          heading: "Veterinary Specialists",
          text: "Certified veterinarians and technicians dedicated to 24/7 emergency care and specialized rehabilitation.",
        },
        {
          heading: "Field Operators",
          text: "Courageous on-the-ground rescuers and caretakers serving in high-need regions and sanctuaries.",
        },
        {
          heading: "Global Supporters",
          text: "An active community of donors, volunteers, and advocates united by the cause of animal welfare.",
        },
      ]}
    >
      <p>
        Behind every life saved is a dedicated team of doctors, caretakers, advocates, and volunteers. We believe that compassion in action has the power to transform communities and reshape animal welfare globally.
      </p>
    </ContentPage>
  );
}
