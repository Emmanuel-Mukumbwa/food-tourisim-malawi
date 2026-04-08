import { Container } from "react-bootstrap";
import Hero from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";
import gallery, { GalleryItem } from "@/data/gallery";
import itineraries from "@/data/itineraries";
import Image from "next/image";
import Link from "next/link";
import ItineraryCard from "@/components/ItineraryCard";

type GalleryRowProps = {
  items: GalleryItem[];
};

function GalleryRow({ items }: GalleryRowProps) {
  return (
    <div className="row g-3 row-cols-1 row-cols-sm-2 row-cols-md-3">
      {items.map((g, i) => (
        <div key={`${g.src}-${i}`} className="col">
          <Link href="/gallery" className="text-decoration-none">
            <div
              className="position-relative overflow-hidden rounded-4 shadow-sm bg-light"
              style={{
                aspectRatio: "4 / 3",
                minHeight: "180px",
              }}
            >
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
        <FeaturesSection />

        <section className="my-5">
          <h3 className="mb-4 text-center text-dark">
            Experience Malawi – Gallery Highlights
          </h3>

          <div className="mb-4">
            <GalleryRow items={activityImages} />
          </div>

          <div className="mb-2">
            <GalleryRow items={foodImages} />
          </div>

          <div className="text-center mt-4">
            <Link href="/gallery" className="btn btn-outline-success px-4">
              View Full Gallery
            </Link>
          </div>
        </section>

        <section className="my-5">
          <h3 className="mb-4 text-center text-dark">Featured Itineraries</h3>
          <div className="row g-4">
            {itineraries.slice(0, 3).map((it: any) => (
              <div key={it.slug} className="col-12 col-md-4">
                <ItineraryCard itinerary={it} />
              </div>
            ))}
          </div>
          <div className="text-center mt-3">
            <Link href="/itineraries" className="btn btn-outline-success">
              View All Itineraries
            </Link>
          </div>
        </section>
      </Container>
    </>
  );
}