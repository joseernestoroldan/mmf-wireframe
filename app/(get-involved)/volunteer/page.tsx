import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage/ContentPage";

export const metadata: Metadata = {
  title: "Volunteer | Magic Marble Foundation",
  description:
    "Join our team on the ground. Give your time to help in our clinics, sanctuaries, and outreach programs.",
};

export default function VolunteerPage() {
  return (
    <ContentPage
      title="Volunteer"
      description="Join our team on the ground. Give your time to help in our clinics, sanctuaries, and outreach programs."
      imageURL="/carrousel/image01.webp"
    >
      <p>Content</p>
    </ContentPage>
  );
}
