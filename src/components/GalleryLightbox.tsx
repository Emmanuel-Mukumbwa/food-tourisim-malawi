"use client";

import { useEffect } from "react";
import Image from "next/image";

interface Props {
  src?: string;
  caption?: string;
  onClose: () => void;
}

export default function GalleryLightbox({ src, caption, onClose }: Props) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = originalOverflow;
    };
  }, [onClose]);

  if (!src) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-3"
      style={{
        zIndex: 1080,
        backgroundColor: "rgba(0, 0, 0, 0.78)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
      onClick={onClose}
    >
      <div
        className="position-relative w-100"
        style={{
          maxWidth: "1100px",
          maxHeight: "90vh",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="position-relative overflow-hidden rounded-4 shadow-lg bg-dark"
          style={{
            width: "100%",
            height: "min(80vh, 780px)",
          }}
        >
          <Image
            src={src}
            alt={caption || "Gallery image"}
            fill
            sizes="100vw"
            style={{ objectFit: "contain" }}
            priority
          />
        </div>

        {caption && (
          <div className="text-center text-white bg-dark bg-opacity-75 px-3 py-2 rounded-bottom-4">
            {caption}
          </div>
        )}

        <button
          type="button"
          className="btn btn-light position-absolute top-0 end-0 m-3 rounded-circle shadow"
          onClick={onClose}
          aria-label="Close image"
          style={{
            width: "42px",
            height: "42px",
            display: "grid",
            placeItems: "center",
            lineHeight: 1,
          }}
        >
          ×
        </button>
      </div>
    </div>
  );
}