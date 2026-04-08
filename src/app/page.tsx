import { Container } from "react-bootstrap";
import Hero from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";
import gallery, { GalleryItem } from "@/data/gallery";
import itineraries from "@/data/itineraries";
import Image from "next/image";
import Link from "next/link";
import ItineraryCard from "@/components/ItineraryCard";
import styles from "./Home.module.css";

type GalleryRowProps = {
  items: GalleryItem[];
};

function GalleryRow({ items }: GalleryRowProps) {
  return (
    <div className="row g-3 row-cols-1 row-cols-sm-2 row-cols-md-3">
      {items.map((g, i) => (
        <div key={`${g.src}-${i}`} className="col">
          <Link href="/gallery" className="text-decoration-none">
            <div className={styles.galleryTile}>
              <Image
                src={g.src}
                alt={g.caption || ""}
                fill
                sizes="(max-width: 576px) 100vw, (max-width: 768px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  const galleryList = gallery as GalleryItem[];

  const activityImages = galleryList
    .filter((item) => item.category === "activities")
    .slice(0, 3);

  const foodImages = galleryList
    .filter((item) => item.category === "food")
    .slice(0, 3);

  return (
    <>
      <Hero />

      <Container className="py-4">
        <div className={styles.sectionShell}>
          <FeaturesSection />
        </div>

        <section className={`${styles.sectionShell} my-5`}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Visual highlights</span>
            <h3 className={styles.sectionTitle}>Experience Malawi – Gallery Highlights</h3>
            <p className={styles.sectionLead}>
              A quick look at the moments that shape the destination, from outdoor activity to local food.
            </p>
          </div>

          <div className="mb-4">
            <GalleryRow items={activityImages} />
          </div>

          <div className="mb-2">
            <GalleryRow items={foodImages} />
          </div>

          <div className="text-center mt-4">
            <Link href="/gallery" className={styles.outlineButton}>
              View Full Gallery
            </Link>
          </div>
        </section>

        <section className={`${styles.sectionShell} my-5`}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Plan your trip</span>
            <h3 className={styles.sectionTitle}>Featured Itineraries</h3>
            <p className={styles.sectionLead}>
              Hand-picked routes that combine food, scenery, and meaningful experiences.
            </p>
          </div>

          <div className="row g-4">
            {itineraries.slice(0, 3).map((it: any) => (
              <div key={it.slug} className="col-12 col-md-4">
                <ItineraryCard itinerary={it} />
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <Link href="/itineraries" className={styles.outlineButton}>
              View All Itineraries
            </Link>
          </div>
        </section>
      </Container>
    </>
  );
}