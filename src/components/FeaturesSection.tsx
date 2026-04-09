"use client";

import { Row, Col, Card, Button } from "react-bootstrap";
import {
  FaUtensils,
  FaTractor,
  FaGlassCheers,
  FaMountain,
  FaLandmark,
  FaUmbrellaBeach,
} from "react-icons/fa";
import styles from "./FeaturesSection.module.css";

const culinaryFeatures = [
  {
    icon: FaUtensils,
    title: "Cooking Classes",
    text: "Learn to prepare nsima, chambo, and other traditional dishes with local chefs.",
    href: "/destinations?category=cooking",
  },
  {
    icon: FaTractor,
    title: "Farm Tours",
    text: "Visit farms and learn about traditional cooking methods and ingredients.",
    href: "/destinations?category=farm",
  },
  {
    icon: FaGlassCheers,
    title: "Food Festivals",
    text: "Celebrate Malawi’s vibrant food culture at seasonal festivals.",
    href: "/destinations?category=festival",
  },
];

const attractionFeatures = [
  {
    icon: FaMountain,
    title: "Scenic Landscapes",
    text: "Explore Misuku Hills, Lake Malawi, and other natural wonders.",
    href: "/destinations?category=scenic",
  },
  {
    icon: FaLandmark,
    title: "Cultural & Historical Sites",
    text: "Visit museums, historic sites, and cultural landmarks.",
    href: "/destinations?category=cultural",
  },
  {
    icon: FaUmbrellaBeach,
    title: "Lakeside Resorts",
    text: "Relax at Chilumba, La Rondavelle, and other beautiful beaches.",
    href: "/destinations?category=resort",
  },
];

function FeatureCard({
  icon: Icon,
  title,
  text,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  text: string;
  href: string;
}) {
  return (
    <Card className={`${styles.featureCard} h-100 border-0`}>
      <Card.Body className={styles.cardBody}>
        <div className={styles.iconWrap}>
          <Icon className={styles.icon} />
        </div>

        <Card.Title className={styles.cardTitle}>{title}</Card.Title>
        <Card.Text className={styles.cardText}>{text}</Card.Text>

        <Button
          href={href}
          variant="light"
          size="sm"
          className={styles.exploreButton}
        >
          Explore
        </Button>
      </Card.Body>
    </Card>
  );
}

export default function FeaturesSection() {
  return (
    <section className={styles.sectionShell}>
      <div className={styles.sectionHeader}>
        <span className={styles.eyebrow}>Curated experiences</span>
        <h2 className={styles.sectionTitle}>Culinary Experiences</h2>
        <p className={styles.sectionLead}>
          Taste Malawi through food, farming, and seasonal celebrations shaped by
          local culture.
        </p>
      </div>

      <Row className="g-4 mb-5">
        {culinaryFeatures.map((feature) => (
          <Col key={feature.title} xs={12} md={4}>
            <FeatureCard {...feature} />
          </Col>
        ))}
      </Row>

      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Must-See Attractions</h2>
        <p className={styles.sectionLead}>
          From lake views to heritage sites, these highlights show Malawi at its most memorable.
        </p>
      </div>

      <Row className="g-4">
        {attractionFeatures.map((feature) => (
          <Col key={feature.title} xs={12} md={4}>
            <FeatureCard {...feature} />
          </Col>
        ))}
      </Row>

      <div className="text-center mt-5">
        <Button href="/destinations" className={styles.ctaButton}>
          View All Destinations
        </Button>
      </div>
    </section>
  );
}