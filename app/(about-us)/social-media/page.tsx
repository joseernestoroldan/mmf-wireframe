import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage/ContentPage";

export const metadata: Metadata = {
  title: "Social Media | Magic Marble Foundation",
  description:
    "Follow our daily rescues and success stories online.",
};

export default function SocialMediaPage() {
  return (
    <ContentPage
      badge="About Us"
      title="Social Media"
      subtitle="Follow our daily rescues and success stories online."
      image="/carrousel/image05.webp"
      details={[
        {
          heading: "Daily Updates",
          text: "Live updates directly from rescue missions, clinic treatments, and sanctuary happenings.",
        },
        {
          heading: "Community Stories",
          text: "Inspiring transformation journeys of rescued animals finding loving forever families.",
        },
        {
          heading: "Advocacy & Education",
          text: "Educational infographics, live Q&As with our veterinary staff, and awareness campaigns.",
        },
      ]}
    >
      <p>
        Stay connected with our global mission. Follow our channels to witness the direct impact of your support and share our stories to amplify animal welfare awareness worldwide.
      </p>
    </ContentPage>
  );
}
