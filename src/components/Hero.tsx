import { Button } from "react-bootstrap";
import Image from "next/image";
import gallery, { GalleryItem } from "@/data/gallery";
import styles from "./Hero.module.css";

const galleryList = gallery as GalleryItem[];

function getImage(fileName: string): GalleryItem {
  const found = galleryList.find(
    (item) => item.src.endsWith(fileName) || item.src.includes(fileName)
  );
  if (!found) throw new Error(`Gallery image not found: ${fileName}`);
  return found;
}

const hikingPrimary = getImage("hiking.jpg");
const hikingSecondary = getImage("hiking (6).jpg");
const beefStew = getImage("beef-stew.jpg");
const boiledCorn = getImage("boiledcorn-and-sweetpotatoes.jpg");
const nsimaChambo = getImage("nsima-chambo-greenvegies.jpg");

const collageItems = [
  { item: hikingPrimary, className: styles.tilePrimary },
  { item: beefStew, className: styles.tilePortrait },
  { item: boiledCorn, className: styles.tileSmall },
  { item: nsimaChambo, className: styles.tileWide },
  { item: hikingSecondary, className: styles.tileAccent },
];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.orbOne} />
      <div className={styles.orbTwo} />
      <div className={styles.orbThree} />

      <div className={styles.inner}>
        {/* Left column: text + buttons */}
        <div className={styles.copy}>
          <span className={styles.eyebrow}>Malawi awaits</span>
          <h1 className={styles.title}>
            Malawi, told through
            <span className={styles.titleAccent}>food, trails, and place.</span>
          </h1>
          <p className={styles.subtitle}>
            From lakeside meals to mountain paths – real experiences, captured in moments you can plan.
          </p>
          <div className={styles.actions}>
            <Button variant="light" size="lg" href="/destinations" className={styles.primaryButton}>
              Discover Destinations
            </Button>
            <Button variant="light" size="lg" href="/gallery" className={styles.secondaryButton}>
              View Gallery
            </Button>
          </div>
        </div>

        {/* Right column: image collage */}
        <div className={styles.visual}>
          <div className={styles.mosaic}>
            {collageItems.map(({ item, className }, index) => (
              <div key={`${item.src}-${index}`} className={`${styles.tile} ${className}`}>
                <div className={styles.imageWrap}>
                  <Image
                    src={item.src}
                    alt={item.caption || "Malawi gallery image"}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 38vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Meta info row – placed after the collage in DOM, but positioned in left column on desktop */}
        <div className={styles.metaRow}>
          <div className={styles.metaItem}>
            <span className={styles.metaValue}>Authentic moments</span>
            <span className={styles.metaLabel}>
              Local dishes, village scenes, and trail views – all from our own collection.
            </span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaValue}>Plan your journey</span>
            <span className={styles.metaLabel}>
              Use these snapshots as inspiration for your Malawi food & travel itinerary.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}