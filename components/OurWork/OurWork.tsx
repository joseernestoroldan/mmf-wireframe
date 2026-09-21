import styles from "./OurWork.module.css";
import Image from "next/image";
import Link from "next/link";

const workItems = [
  {
    id: "rescue",
    title: "Rescue",
    description: "Saving animals in distress and providing immediate medical care and safety.",
    link: "/our-work/rescue",
    image: "/carrousel/image01.webp", // Placeholder path
  },
  {
    id: "cnvr",
    title: "CNVR",
    description: "Catch, Neuter, Vaccinate, Return programs to manage populations safely.",
    link: "/our-work/cnvr",
    image: "/carrousel/image02.webp",
  },
  {
    id: "care-center",
    title: "Care Center",
    description: "A safe haven providing long-term rehabilitation, treatment, and love.",
    link: "/our-work/care-center",
    image: "/carrousel/image03.webp",
  },
  {
    id: "sanctuary",
    title: "Sanctuary (Michigan)",
    description: "A peaceful retreat for animals requiring lifelong care in a natural setting.",
    link: "/our-work/sanctuary",
    image: "/carrousel/image04.webp",
  },
  {
    id: "relief",
    title: "Relief",
    description: "Providing essential resources and support during natural disasters and emergencies.",
    link: "/our-work/relief",
    image: "/carrousel/image05.webp",
  },
  {
    id: "education",
    title: "Education",
    description: "Empowering communities through animal welfare education and outreach.",
    link: "/our-work/education",
    image: "/carrousel/image01.webp",
  },
  {
    id: "adoption",
    title: "Adoption",
    description: "Connecting loving families with animals in need of a forever home.",
    link: "/our-work/adoption",
    image: "/carrousel/image02.webp",
  },
];

const OurWork = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.heading}>Our Work</h2>
        
        <div className={styles.grid}>
          {workItems.map((item) => (
            <Link href={item.link} key={item.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={styles.image}
                />
                
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWork;

