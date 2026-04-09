"use client";

import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import destinations from "@/data/destinations";
import styles from "./DestinationsPage.module.css";

const categories = ["all", "cooking", "market", "festival", "scenic", "cultural", "resort"] as const;
type Category = (typeof categories)[number];

const categoryLabels: Record<string, string> = {
  cooking: "Cooking Class",
  market: "Market Tour",
  festival: "Food Festival",
  scenic: "Scenic",
  cultural: "Cultural",
  resort: "Resort",
};

export default function DestinationsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const categoryFilter = (searchParams.get("category") as Category | null) || "all";

  const filtered =
    categoryFilter === "all"
      ? destinations
      : destinations.filter((d) => d.category === categoryFilter);

  const setCategory = (category: Category) => {
    const params = new URLSearchParams(searchParams.toString());

    if (category === "all") {
      params.delete("category");
    } else {
      params.set("category", category);
    }

    const query = params.toString();
    router.push(query ? `/destinations?${query}` : "/destinations");
  };

  return (
    <Container className="py-5">
      <section className={styles.pageShell}>
        <div className={styles.pageHeader}>
          <span className={styles.eyebrow}>Explore Malawi</span>
          <h1 className={styles.title}>Destinations</h1>
          <p className={styles.lead}>
            Discover culinary experiences and must-see attractions across Malawi.
          </p>
        </div>

        <div className={styles.filterRow}>
          {categories.map((c) => (
            <Button
              key={c}
              variant="light"
              size="sm"
              onClick={() => setCategory(c)}
              className={`${styles.filterButton} ${
                categoryFilter === c ? styles.filterButtonActive : ""
              }`}
              aria-pressed={categoryFilter === c}
            >
              {c === "all" ? "All" : categoryLabels[c]}
            </Button>
          ))}
        </div>

        <Row className="g-4">
          {filtered.map((dest) => (
            <Col key={dest.id} xs={12} md={6} lg={4}>
              <Card className={styles.destCard}>
                <div className={styles.cardImage}>
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>

                <Card.Body className={styles.cardBody}>
                  <Card.Title className={styles.cardTitle}>{dest.name}</Card.Title>
                  <Card.Subtitle className={styles.cardSubtitle}>
                    {dest.location}
                  </Card.Subtitle>
                  <Card.Text className={styles.cardText}>
                    {dest.description}
                  </Card.Text>
                  <Badge bg="light" text="dark" className={styles.categoryBadge}>
                    {categoryLabels[dest.category] || dest.category}
                  </Badge>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </Container>
  );
}