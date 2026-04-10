"use client";

import { useState } from "react";
import ContactForm from "./ContactForm";

export default function BookingButton({ itineraryTitle }: { itineraryTitle: string }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)} className="btn btn-primary w-100">
        Request a Quote
      </button>
      <ContactForm
        inline={false}
        presetSubject={`Inquiry: ${itineraryTitle}`}
        buttonText="Send Request"
        modalTitle={`Request details for ${itineraryTitle}`}
        onSuccess={() => setShowModal(false)}
      />
    </>
  );
}