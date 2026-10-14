export interface TeamMember {
  id: string;
  name: string;
  role: string;
  email: string;
  bio: string;
  photo: string;
  country?: string;
}

export interface TeamCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  members: TeamMember[];
}

export const teamCategories: TeamCategory[] = [
  {
    id: "board-members",
    title: "Board Members",
    subtitle: "Governance & Fiduciary Stewardship",
    description:
      "Providing strategic direction, ethical oversight, and fiduciary stewardship to ensure sustainable operations and animal protection worldwide.",
    members: [
      {
        id: "elena-rostova",
        name: "Dr. Elena Rostova",
        role: "Board President & Co-Founder",
        email: "elena.rostova@magicmarblefoundation.org",
        photo: "/team/elena-rostova.webp",
        bio: "Elena co-founded Magic Marble Foundation after two decades advocating for wildlife rehabilitation and shelter reform across Eastern Europe and North America. She previously served as an advisor for international veterinary standards and led emergency clinical relief during ecological crises. At the foundation, Elena shapes long-term governance, ensures fiduciary accountability, and champions humane ethics in all global initiatives. Her vision combines rigorous operational discipline with deep community empathy, ensuring that every regional program operates with sustainable resources and unwavering dedication to animals who have endured trauma or abandonment.",
      },
      {
        id: "marcus-vance",
        name: "Marcus Vance",
        role: "Vice President & Financial Trustee",
        email: "marcus.vance@magicmarblefoundation.org",
        photo: "/team/marcus-vance.webp",
        bio: "Marcus brings thirty years of leadership in nonprofit finance, capital allocation, and philanthropic asset governance to the board. Having previously directed capital funds for prominent global humanitarian and conservation organizations, he provides strategic guidance to safeguard the foundation's fiscal longevity. Marcus ensures that donor contributions directly empower frontline rescue missions, modern medical equipment acquisitions, and sustainable sanctuary infrastructure. He is deeply committed to radical transparency in institutional accounting, mentoring our leadership team in maintaining lean overhead expenses while expanding rescue capabilities across borders with complete fiscal accountability.",
      },
      {
        id: "aisha-al-mansoor",
        name: "Dr. Aisha Al-Mansoor",
        role: "Board Member & Ethics Chair",
        email: "aisha.almansoor@magicmarblefoundation.org",
        photo: "/team/aisha-al-mansoor.webp",
        bio: "Aisha is an internationally renowned animal bioethicist and scholar whose work has helped modernize international animal transport and welfare protocols. She holds degrees in veterinary science and comparative bioethics, having advised governments across the Middle East and Europe on cruelty prevention frameworks. On the board, Aisha chairs our Ethics and Standards Committee, reviewing every sanctuary environment and community engagement protocol. Her rigorous perspective guarantees that our rescue standards, veterinary choices, and volunteer guidelines continually exceed statutory animal protection baselines while honoring the dignity of living creatures.",
      },
      {
        id: "julian-tremblay",
        name: "Julian Tremblay",
        role: "Board Secretary & Legal Counsel",
        email: "julian.tremblay@magicmarblefoundation.org",
        photo: "/team/julian-tremblay.webp",
        bio: "Julian has spent over eighteen years practicing international public interest law, specializing in transnational wildlife treaties, environmental protection, and nonprofit governance. Prior to joining the board, he helped draft cross-border animal transport accords and provided legal defense for whistleblowers in illegal wildlife trafficking investigations. Julian oversees compliance, organizational risk, and diplomatic relationships across all jurisdictions where the foundation maintains field operations. His legal acumen ensures that our regional partners operate within strict statutory compliance, empowering frontline teams to rescue animals safely without bureaucratic hindrances.",
      },
    ],
  },
  {
    id: "international-directors",
    title: "International Directors",
    subtitle: "Global Programs & Operational Leadership",
    description:
      "Guiding our worldwide clinical programs, rapid-response logistics, humane education, and sanctuary habitats across four continents.",
    members: [
      {
        id: "carlos-mendoza",
        name: "Dr. Carlos Mendoza",
        role: "International Veterinary Director",
        email: "carlos.mendoza@magicmarblefoundation.org",
        photo: "/team/carlos-mendoza.webp",
        bio: "Carlos directs all veterinary medical operations, triage guidelines, and clinical training programs across our international network. With fifteen years of clinical field experience in trauma surgery and infectious disease containment, he oversees mobile clinics, surgical suites, and preventative health campaigns worldwide. Carlos works hands-on with local veterinarians to modernize medical facilities, introduce minimally invasive surgical sterilization techniques, and establish high-standard sterile protocols. He firmly believes that world-class healthcare should not be reserved for privileged pets, ensuring rescued street animals receive the same dignified medical attention.",
      },
      {
        id: "sophia-lin",
        name: "Sophia Lin",
        role: "Director of Global Operations",
        email: "sophia.lin@magicmarblefoundation.org",
        photo: "/team/sophia-lin.webp",
        bio: "Sophia coordinates our rapid-response logistics, supply chain corridors, and international deployment teams across multiple continents. With an extensive background directing disaster response for emergency relief coalitions, she excels at mobilizing vehicles, field hospitals, and medicine during natural crises and armed conflicts. Sophia supervises our regional directors, synchronizing cross-border transports and ensuring field volunteers receive adequate safety gear and operational support. Her calm precision under pressure enables the foundation to respond within hours when natural catastrophes threaten vulnerable animal populations lacking institutional defense.",
      },
      {
        id: "tariq-rahman",
        name: "Tariq Rahman",
        role: "Director of Sanctuary Management",
        email: "tariq.rahman@magicmarblefoundation.org",
        photo: "/team/tariq-rahman.webp",
        bio: "Tariq oversees habitat architecture, psychological rehabilitation, and daily species care standards at our permanent sanctuaries in Michigan and Costa Rica. With a professional background in zoology and animal behavioral psychology, he specializes in designing enriching open-canopy enclosures for animals traumatized by prolonged neglect or abuse. Tariq works closely with caretakers to formulate personalized nutritional plans, sensory enrichment routines, and positive reinforcement practices. Under his gentle guidance, animals deemed unadoptable find permanent solace, rediscovering their natural instincts in peaceful communal spaces.",
      },
      {
        id: "claire-dupont",
        name: "Claire DuPont",
        role: "Director of Community Outreach & Education",
        email: "claire.dupont@magicmarblefoundation.org",
        photo: "/team/claire-dupont.webp",
        bio: "Claire leads our global humane education curriculums, community outreach campaigns, and grassroots youth workshops. Believing that sustainable animal welfare requires generational behavioral transformation, she partners with regional schools, municipal councils, and neighborhood associations to foster empathy toward street animals. Claire has implemented humane education initiatives reaching tens of thousands of school children across five countries. Her multilingual programs break down fear, celebrate kindness, and promote responsible pet guardianship, creating supportive community ecosystems where rescued animals can safely thrive alongside human neighbors.",
      },
    ],
  },
  {
    id: "country-leads",
    title: "Country Leads",
    subtitle: "Frontline Community & Regional Field Teams",
    description:
      "Directing regional ground rescues, emergency triage units, shelter operations, and community engagement in our focal countries.",
    members: [
      {
        id: "pemba-sherpa",
        name: "Pemba Sherpa",
        role: "Country Lead - Nepal",
        country: "Nepal",
        email: "pemba.sherpa@magicmarblefoundation.org",
        photo: "/team/pemba-sherpa.webp",
        bio: "Pemba coordinates our flagship Care Center and street rescue initiatives throughout Kathmandu and neighboring rural districts. Born and raised in the Kathmandu Valley, he has dedicated the last twelve years to eradicating rabies and managing community dog populations through humane spay-and-neuter outreach. Pemba manages our clinic staff, ambulance drivers, and community liaisons, maintaining trusted alliances with municipal officials and neighborhood youth groups. His tireless leadership ensures that critically injured street dogs and abandoned working equines receive swift veterinary care and compassionate rehabilitation.",
      },
      {
        id: "andrea-morales",
        name: "Andrea Morales",
        role: "Country Lead - Costa Rica",
        country: "Costa Rica",
        email: "andrea.morales@magicmarblefoundation.org",
        photo: "/team/andrea-morales.webp",
        bio: "Andrea leads our sanctuary grounds and wildlife rescue response initiatives along Costa Rica's central Pacific coast. A licensed conservation biologist, she previously managed rainforest wildlife reserves and marine animal rehabilitation centers across Central America. Andrea oversees our local rescue staff, coordinates veterinary care for injured wildlife, and supervises educational visits for regional schools. Her intimate understanding of tropical biodiversity and community dynamics allows our Costa Rican sanctuary to function as both a tranquil haven for rescued animals and a vital education center for nearby communities.",
      },
      {
        id: "david-omondi",
        name: "David K. Omondi",
        role: "Country Lead - Kenya",
        country: "Kenya",
        email: "david.omondi@magicmarblefoundation.org",
        photo: "/team/david-omondi.webp",
        bio: "David directs our East African outreach programs, focusing on rural working donkey welfare, rabies prevention, and anti-snare veterinary patrols. With a background in veterinary public health, he manages mobile treatment vans that travel to pastoralist communities, treating working animals and delivering clean harness education to prevent harness sores. David coordinates closely with local elders and livestock owners, instilling compassionate handling practices that preserve both animal well-being and family livelihoods. His persistent field presence has earned our team deep respect throughout the region.",
      },
      {
        id: "matthew-warren",
        name: "Matthew Warren",
        role: "Country Lead - United States",
        country: "United States",
        email: "matthew.warren@magicmarblefoundation.org",
        photo: "/team/matthew-warren.webp",
        bio: "Matthew oversees our Michigan sanctuary operations, domestic rescue transports, and foster placement networks across North America. He spent over a decade running high-volume rescue shelters in the Midwest, specializing in behavioral rehabilitation for dogs and farm animals rescued from neglect cases. Matthew supervises daily sanctuary grounds maintenance, coordinates emergency animal transfers during severe weather incidents, and leads our nationwide volunteer network. His dedication ensures every animal entering our Michigan facility receives comprehensive medical evaluation, individualized enrichment, and a peaceful environment to heal.",
      },
      {
        id: "siriporn-kittisuk",
        name: "Siriporn Kittisuk",
        role: "Country Lead - Thailand",
        country: "Thailand",
        email: "siriporn.kittisuk@magicmarblefoundation.org",
        photo: "/team/siriporn-kittisuk.webp",
        bio: "Siriporn directs our rescue missions, sterilization drives, and emergency veterinary clinics across northern and central Thailand. Having worked for over a decade rescuing animals from illegal meat trades and temple dog abandonment, she possesses unmatched crisis response expertise. Siriporn coordinates our mobile veterinary teams, organizes mass spay-and-neuter clinics in rural provinces, and collaborates with temple monks to ensure street animals receive daily nourishment. Her passionate advocacy and deep community roots have made our Thai outreach programs extraordinarily effective and warmly embraced by locals.",
      },
    ],
  },
];
