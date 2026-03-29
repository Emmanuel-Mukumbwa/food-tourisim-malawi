"use client";
import { Row, Col, Card, Button } from "react-bootstrap";
import { FaUtensils, FaTractor, FaGlassCheers, FaMountain, FaLandmark, FaUmbrellaBeach } from "react-icons/fa";
import Link from "next/link";

export default function FeaturesSection() {
  return (
    <>
      {/* Culinary Experiences */}
      <h2 className="text-center mb-4" style={{ color: "#212529" }}>
        Culinary Experiences</h2>
      <Row className="g-4 mb-5">
        <Col md={4}>
          <Card className="h-100 shadow-sm border-0 text-center">
            <Card.Body>
              <div className="mb-3" style={{ fontSize: "3rem", color: "#D2691E" }}>
                <FaUtensils />
              </div>
              <Card.Title className="h5">Cooking Classes</Card.Title>
              <Card.Text className="text-muted">
                Learn to prepare nsima, chambo, and other traditional dishes with local chefs.
              </Card.Text>
              <Button variant="outline-success" size="sm" href="/destinations?category=cooking">
                Explore
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 shadow-sm border-0 text-center">
            <Card.Body>
              <div className="mb-3" style={{ fontSize: "3rem", color: "#D2691E" }}>
                <FaTractor />
              </div>
              <Card.Title className="h5">Farm Tours</Card.Title>
              <Card.Text className="text-muted">
                Visit farms and learn about traditional cooking methods and ingredients.
              </Card.Text>
              <Button variant="outline-success" size="sm" href="/destinations?category=farm">
                Explore
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 shadow-sm border-0 text-center">
            <Card.Body>
              <div className="mb-3" style={{ fontSize: "3rem", color: "#D2691E" }}>
                <FaGlassCheers />
              </div>
              <Card.Title className="h5">Food Festivals</Card.Title>
              <Card.Text className="text-muted">
                Celebrate Malawi’s vibrant food culture at seasonal festivals.
              </Card.Text>
              <Button variant="outline-success" size="sm" href="/destinations?category=festival">
                Explore
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Travel Attractions */}
      <h2 className="text-center mb-4" style={{ color: "#212529" }}>
        Must‑See Attractions</h2>
      <Row className="g-4">
        <Col md={4}>
          <Card className="h-100 shadow-sm border-0 text-center">
            <Card.Body>
              <div className="mb-3" style={{ fontSize: "3rem", color: "#D2691E" }}>
                <FaMountain />
              </div>
              <Card.Title className="h5">Scenic Landscapes</Card.Title>
              <Card.Text className="text-muted">
                Explore Misuku Hills, Lake Malawi, and other natural wonders.
              </Card.Text>
              <Button variant="outline-success" size="sm" href="/destinations?category=scenic">
                Explore
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 shadow-sm border-0 text-center">
            <Card.Body>
              <div className="mb-3" style={{ fontSize: "3rem", color: "#D2691E" }}>
                <FaLandmark />
              </div>
              <Card.Title className="h5">Cultural & Historical Sites</Card.Title>
              <Card.Text className="text-muted">
                Visit museums, historic sites, and cultural landmarks.
              </Card.Text>
              <Button variant="outline-success" size="sm" href="/destinations?category=cultural">
                Explore
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 shadow-sm border-0 text-center">
            <Card.Body>
              <div className="mb-3" style={{ fontSize: "3rem", color: "#D2691E" }}>
                <FaUmbrellaBeach />
              </div>
              <Card.Title className="h5">Lakeside Resorts</Card.Title>
              <Card.Text className="text-muted">
                Relax at Chilumba, La Rondavelle, and other beautiful beaches.
              </Card.Text>
              <Button variant="outline-success" size="sm" href="/destinations?category=resort">
                Explore
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <div className="text-center mt-5">
        <Link href="/destinations" className="btn btn-success btn-lg">
          View All Destinations
        </Link>
      </div>
    </>
  );
}