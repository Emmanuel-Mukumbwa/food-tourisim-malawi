"use client";

import { Container, Row, Col, Card } from "react-bootstrap";
import Link from "next/link";
import styles from "./AboutPage.module.css";

export default function AboutPage() {
  return (
    <Container className="py-5">
      <section className={styles.pageShell}>
        <div className={styles.pageHeader}>
          <span className={styles.eyebrow}>About us</span>
          <h1 className={styles.title}>About Malawi Food & Travel</h1>
          <p className={styles.lead}>
            We celebrate Malawi’s culinary heritage and highlight places worth
            discovering, from food markets to lakeside escapes and cultural sites.
          </p>
        </div>

        <Row className="g-4">
          <Col md={6}>
            <Card className={styles.infoCard}>
              <Card.Body>
                <h3 className={styles.cardTitle}>Culinary Experiences</h3>
                <p className={styles.cardText}>
                  Taste your way through Malawi with cooking classes, market
                  tours, and food festivals that spotlight local ingredients and
                  traditions.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className={styles.infoCard}>
              <Card.Body>
                <h3 className={styles.cardTitle}>Travel Destinations</h3>
                <p className={styles.cardText}>
                  Explore scenic landscapes, cultural sites, and lakeside
                  retreats designed for both adventure and relaxation.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className={styles.infoCard}>
              <Card.Body>
                <h3 className={styles.cardTitle}>Our Story</h3>
                <p className={styles.cardText}>
                  Built from a love of authentic Malawian food and a deep
                  appreciation for travel, we aim to connect visitors with
                  experiences that feel real and memorable.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className={styles.infoCard}>
              <Card.Body>
                <h3 className={styles.cardTitle}>Contact Us</h3>
                <p className={styles.cardText}>
                  Have a question or planning a trip? Reach out at{" "}
                  <a
                    href="mailto:info@foodtourismmalawi.com"
                    className={styles.inlineLink}
                  >
                    info@foodtourismmalawi.com
                  </a>
                  .
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <div className="text-center mt-5">
          <Link href="/destinations" className={styles.outlineButton}>
            Explore Destinations
          </Link>
        </div>
      </section>
    </Container>
  );
}