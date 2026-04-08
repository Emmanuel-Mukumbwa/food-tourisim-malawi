"use client";
import Link from "next/link";
import Image from "next/image";
import { Card, Badge } from "react-bootstrap";
import styles from './Shared.module.css';

interface Props {
  itinerary: any;
}

export default function ItineraryCard({ itinerary }: Props) {
  return (
    <Card className="h-100 shadow-sm border-0">
      <div className={styles.imgCrop}>
        <Image src={itinerary.mainImage} alt={itinerary.title} fill style={{ objectFit: 'cover' }} />
      </div>
      <Card.Body>
        <Card.Title className="h5 fw-bold text-success">{itinerary.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted small">{itinerary.durationDays} days</Card.Subtitle>
        <Card.Text className="text-muted">{itinerary.description}</Card.Text>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <Badge bg="light" text="dark">{itinerary.priceRange}</Badge>
          <Link href={`/itineraries/${itinerary.slug}`} className="btn btn-sm btn-success">View Details</Link>
        </div>
      </Card.Body>
    </Card>
  );
}
