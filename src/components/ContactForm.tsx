"use client";

import { useState } from "react";
import { Form, Button, Modal, Spinner } from "react-bootstrap";

interface ContactFormProps {
  inline?: boolean;
  presetSubject?: string;
  buttonText?: string;
  modalTitle?: string;
  onSuccess?: () => void;
}

export default function ContactForm({
  inline = false,
  presetSubject = "",
  buttonText = "Send Message",
  modalTitle = "Request Details",
  onSuccess,
}: ContactFormProps) {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: presetSubject,
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send");

      setSuccess(true);
      setFormData({ name: "", email: "", phone: "", subject: presetSubject, message: "" });
      if (onSuccess) onSuccess();
      setTimeout(() => setShowModal(false), 1500);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const formContent = (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Name *</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email *</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Phone (optional)</Form.Label>
        <Form.Control
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Subject</Form.Label>
        <Form.Control
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Message *</Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </Form.Group>

      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">Message sent! We'll get back to you soon.</div>}

      <Button type="submit" variant="success" disabled={loading}>
        {loading ? <Spinner animation="border" size="sm" /> : buttonText}
      </Button>
    </Form>
  );

  if (inline) {
    return <div className="mt-4">{formContent}</div>;
  }

  return (
    <>
      <Button variant="primary" onClick={() => setShowModal(true)} className={styles.primaryButton}>
        {buttonText}
      </Button>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{formContent}</Modal.Body>
      </Modal>
    </>
  );
}