import itineraries from "@/data/itineraries";
import Image from "next/image";
import {
  Container,
  Row,
  Col,
  Badge,
  Button,
} from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import AccordionItem from "react-bootstrap/AccordionItem";
import AccordionHeader from "react-bootstrap/AccordionHeader";
import AccordionBody from "react-bootstrap/AccordionBody";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "@/app/itineraries/[slug]/ItineraryDetail.module.css";

export async function generateStaticParams() {
  return itineraries.map((it) => ({ slug: it.slug }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

const imageSrc = (path: string) => encodeURI(path);

export default async function ItineraryDetail({ params }: PageProps) {
  const { slug } = await params;
  const it = itineraries.find((i) => i.slug === slug);

  if (!it) notFound();

  const galleryImages = Array.from(
    new Set([it.mainImage, ...it.itineraryDays.flatMap((day) => day.images || [])])
  );

  return (
    <Container className="py-5">
      <section className={styles.pageShell}>
        <Link href="/itineraries" className={styles.backLink}>
          ← Back to itineraries
        </Link>

        <div className={styles.heroImage}>
          <Image
            src={imageSrc(it.mainImage)}
            alt={it.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1100px"
            style={{ objectFit: "cover" }}
          />
          <div className={styles.heroOverlay} />
          <div className={styles.heroText}>
            <span className={styles.heroBadge}>Featured itinerary</span>
            <h1 className={styles.heroTitle}>{it.title}</h1>
            <p className={styles.heroMeta}>
              <strong>{it.durationDays} day{it.durationDays > 1 ? "s" : ""}</strong> •{" "}
              <Badge bg="light" text="dark" className={styles.priceBadge}>
                {it.priceRange}
              </Badge>
            </p>

            <div className={styles.heroChips}>
              {it.highlights.map((item) => (
                <span key={item} className={styles.heroChip}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {galleryImages.length > 1 && (
          <div className={styles.gallerySection}>
            <div className={styles.galleryHeader}>
              <h2 className={styles.sectionTitle}>Trip gallery</h2>
              <p className={styles.galleryLead}>
                A quick preview of the places and moments covered in this itinerary.
              </p>
            </div>

            <div className={styles.galleryGrid}>
              {galleryImages.map((img, index) => (
                <div key={`${img}-${index}`} className={styles.galleryItem}>
                  <Image
                    src={imageSrc(img)}
                    alt={`${it.title} photo ${index + 1}`}
                    fill
                    sizes="(max-width: 576px) 50vw, (max-width: 992px) 33vw, 16vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        <Row className="g-4 mt-1">
          <Col md={8}>
            <div className={styles.contentCard}>
              <h2 className={styles.sectionTitle}>Overview</h2>
              <p className={styles.bodyText}>{it.description}</p>

              <h5 className={styles.subTitle}>Highlights</h5>
              <ul className={styles.list}>
                {it.highlights.map((h: string, idx: number) => (
                  <li key={idx}>{h}</li>
                ))}
              </ul>

              <h5 className={styles.subTitle}>Day by day</h5>

              <Accordion className={styles.accordionShell}>
                {it.itineraryDays.map((d, idx) => (
                  <AccordionItem eventKey={String(idx)} key={idx}>
                    <AccordionHeader>
                      Day {d.day}: {d.title}
                    </AccordionHeader>

                    <AccordionBody>
                      <p className="mb-2">
                        <strong>Activities:</strong>
                      </p>

                      <ul className={styles.list}>
                        {d.activities.map((a: string, i: number) => (
                          <li key={i}>{a}</li>
                        ))}
                      </ul>

                      <p className="mb-3">
                        <strong>Meals:</strong> {d.meals.join(", ")}
                      </p>

                      {d.images?.length > 0 && (
                        <div className={styles.thumbRow}>
                          {d.images.map((img: string, i: number) => (
                            <div key={i} className={styles.imgThumb}>
                              <Image
                                src={imageSrc(img)}
                                alt={`Day ${d.day} image ${i + 1}`}
                                fill
                                sizes="96px"
                                style={{ objectFit: "cover" }}
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </AccordionBody>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </Col>

          <Col md={4}>
            <aside className={styles.sidebarCard}>
              <h5 className={styles.sidebarTitle}>Pricing</h5>
              <p className={styles.sidebarPrice}>{it.priceRange}</p>

              <Button
                href={`/contact?subject=${encodeURIComponent(it.title)}`}
                className={styles.primaryButton}
              >
                Request a Quote
              </Button>

              <div className={styles.sidebarBlock}>
                <h6 className={styles.sidebarSubTitle}>Included</h6>
                <ul className={styles.list}>
                  {it.included.map((x: string, idx: number) => (
                    <li key={idx}>{x}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.sidebarBlock}>
                <h6 className={styles.sidebarSubTitle}>Excluded</h6>
                <ul className={styles.list}>
                  {it.excluded.map((x: string, idx: number) => (
                    <li key={idx}>{x}</li>
                  ))}
                </ul>
              </div>
            </aside>
          </Col>
        </Row>
      </section>
    </Container>
  );
}