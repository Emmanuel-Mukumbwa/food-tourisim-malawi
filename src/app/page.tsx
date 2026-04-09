import { Container } from "react-bootstrap";
import Hero from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";
import itineraries from "@/data/itineraries";
import ItineraryCard from "@/components/ItineraryCard";
import Link from "next/link";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <Hero />

      <Container className="py-4">
        <div className={styles.sectionShell}>
          <FeaturesSection />
        </div>

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