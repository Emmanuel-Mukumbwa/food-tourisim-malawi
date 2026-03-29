import { Button } from "react-bootstrap";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <div className={styles.overlay} />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Welcome to Malawi Food & Travel</h1>
        <p className={styles.subtitle}>
          Explore culinary delights, scenic landscapes, and cultural treasures across Malawi.
        </p>
        <Button
          variant="success"
          size="lg"
          href="/destinations"
          className={styles.button}
        >
          Discover Destinations
        </Button>
      </div>
    </section>
  );
}