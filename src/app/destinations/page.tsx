'use client';
import { useSearchParams } from "next/navigation";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import Image from "next/image";

const destinations = [
  {
    id: 1,
    name: "La Rondavelle Chilumba",
    location: "Chilumba, Karonga District",
    description: "A serene lakeside resort offering traditional rondavels and stunning views of Lake Malawi.",
    image: "/images/destinations/la-rondavelle.jpg",
    category: "resort",
  },
  {
    id: 2,
    name: "Songwe Border",
    location: "Karonga District",
    description: "Historic border crossing between Malawi and Tanzania, with scenic views of the Songwe River.",
    image: "/images/destinations/songwe-border.jpg",
    category: "scenic",
  },
  {
    id: 3,
    name: "Misuku Hills",
    location: "Chitipa District",
    description: "Lush green hills with tea estates, hiking trails, and breathtaking panoramas.",
    image: "/images/destinations/misuku-hills.jpg",
    category: "scenic",
  },
  {
    id: 4,
    name: "Karonga Museum",
    location: "Karonga Town",
    description: "Fossil exhibits and cultural history of the region, including the famous Malawisaurus.",
    image: "/images/destinations/karonga-museum.jpg",
    category: "cultural",
  },
  {
    id: 5,
    name: "Malawisaurus Fossil Site",
    location: "Karonga District",
    description: "Site where the Malawisaurus dinosaur was discovered – a must‑visit for paleontology enthusiasts.",
    image: "/images/destinations/malawisaurus.jpg",
    category: "cultural",
  },
  {
    id: 6,
    name: "Chilumba Resorts",
    location: "Chilumba, Karonga District",
    description: "Lakeside resorts with white sand beaches, water sports, and tranquil surroundings.",
    image: "/images/destinations/chilumba-resorts.jpg",
    category: "resort",
  },
  // Add food-specific destinations
  {
    id: 7,
    name: "Lilongwe Market Food Tour",
    location: "Lilongwe",
    description: "Explore the bustling central market, taste fresh produce, and sample local street food.",
    image: "/images/destinations/lilongwe-market.jpg",
    category: "market",
  },
  {
    id: 8,
    name: "Mzuzu Cooking Class",
    location: "Mzuzu",
    description: "Learn to prepare nsima and traditional relishes with a local chef.",
    image: "/images/destinations/cooking-class.jpg",
    category: "cooking",
  },
  {
    id: 9,
    name: "Zomba Food Festival",
    location: "Zomba",
    description: "Annual celebration of Malawi's culinary heritage, with tastings and live music.",
    image: "/images/destinations/food-festival.jpg",
    category: "festival",
  },
];

export default function DestinationsPage() {
  const searchParams = useSearchParams();
  const categoryFilter = searchParams.get("category");

  const filtered = categoryFilter
    ? destinations.filter(d => d.category === categoryFilter)
    : destinations;

  const categoryLabels: Record<string, string> = {
    cooking: "Cooking Class",
    market: "Market Tour",
    festival: "Food Festival",
    scenic: "Scenic",
    cultural: "Cultural",
    resort: "Resort",
  };

  return (
    <Container className="py-5">
      <h1 className="mb-4 text-center" style={{ color: "#212529" }}>
        Explore Malawi
      </h1>
      <p className="text-center mb-5" style={{ color: "#212529" }}>
        Discover culinary experiences and must‑see attractions across Malawi.
      </p>

      {categoryFilter && (
        <div className="text-center mb-4">
          <Badge bg="success" className="p-2">Showing: {categoryLabels[categoryFilter] || categoryFilter}</Badge>
          <a href="/destinations" className="btn btn-link">Clear filter</a>
        </div>
      )}

      <Row className="g-4">
        {filtered.map((dest) => (
          <Col key={dest.id} md={6} lg={4}>
            <Card className="h-100 shadow-sm border-0">
              <div className="position-relative" style={{ height: "220px", overflow: "hidden" }}>
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  style={{ objectFit: "cover" }}
                  className="card-img-top"
                />
              </div>
              <Card.Body>
                <Card.Title className="h5 fw-bold text-success">{dest.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted small">{dest.location}</Card.Subtitle>
                <Card.Text className="text-muted">{dest.description}</Card.Text>
                <Badge bg="light" text="dark" className="mt-2">{categoryLabels[dest.category] || dest.category}</Badge>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}