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
      badge="Get Involved"
      title="Volunteer"
      subtitle="Join our team on the ground. Give your time to help in our clinics, sanctuaries, and outreach programs."
      image="/carrousel/image01.webp"
      details={[
        {
          heading: "Clinic & Shelter Support",
          text: "Help with daily animal care, socialization, facility maintenance, and enrichment activities.",
        },
        {
          heading: "Community Outreach",
          text: "Assist with educational campaigns, vaccine drives, and local humane education events.",
        },
        {
          heading: "Remote Volunteer Roles",
          text: "Contribute through digital advocacy, content writing, design, translation, and fundraising coordination.",
        },
      ]}
    >
      <p>
        Volunteers are the heartbeat of our work. Whether you are comforting a recovering rescue animal, helping maintain a sanctuary habitat, or raising awareness online, your time and love make an unforgettable difference.
      </p>
    </ContentPage>
  );
}
