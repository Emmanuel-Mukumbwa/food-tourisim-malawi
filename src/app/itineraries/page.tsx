"use client";

import { useMemo, useState } from "react";
import { Container, Row, Col, Button, Alert } from "react-bootstrap";
import ItineraryCard from "@/components/ItineraryCard";
import itineraries from "@/data/itineraries";
import Link from "next/link";
import styles from "./ItinerariesPage.module.css";

const filters = ["all", "lake", "food", "hiking"] as const;
type Filter = (typeof filters)[number];

const filterLabels: Record<Filter, string> = {
  all: "All",
  lake: "Lake",
  food: "Food",
  hiking: "Hiking",
};

export default function ItinerariesPage() {
  const [filter, setFilter] = useState<Filter>("all");

  const filteredItineraries = useMemo(() => {
    if (filter === "all") return itineraries;
    return itineraries.filter((it) => it.category === filter);
  }, [filter]);

  return (
    <Container className="py-5">
      <section className={styles.pageShell}>
        <div className={styles.pageHeader}>
          <span className={styles.eyebrow}>Plan your trip</span>
          <h1 className={styles.title}>Itineraries</h1>
          <p className={styles.lead}>
            Browse curated travel ideas that combine food, scenery, and local experiences across Malawi.
          </p>
        </div>

        <div className={styles.filterRow}>
          {filters.map((item) => (
            <Button
              key={item}
              variant="light"
              size="sm"
              onClick={() => setFilter(item)}
              className={`${styles.filterButton} ${
                filter === item ? styles.filterButtonActive : ""
              }`}
              aria-pressed={filter === item}
            >
              {filterLabels[item]}
            </Button>
          ))}
        </div>

        {filteredItineraries.length === 0 ? (
          <Alert variant="light" className={styles.emptyState}>
            No itineraries found for this filter.
          </Alert>
        ) : (
          <Row className="g-4">
            {filteredItineraries.map((it) => (
              <Col key={it.slug} xs={12} md={6} lg={4}>
                <div className={styles.cardWrap}>
                  <ItineraryCard itinerary={it} />
                </div>
              </Col>
            ))}
          </Row>
        )}

        <div className="text-center mt-5">
          <Link href="/destinations" className={styles.outlineButton}>
            Explore Destinations
          </Link>
        </div>
      </section>
    </Container>
  );
}