import { FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer mt-auto py-4 bg-dark text-white">
      <div className="container">
        <div className="row gy-3">
          <div className="col-md-6 text-center text-md-start">
            <h5 className="mb-2" style={{ color: "#d2691e" }}>
              Malo Athu
            </h5>
            <p className="small text-white-50 mb-0">
              Discover authentic culinary experiences and breathtaking destinations across Malawi.
            </p>
          </div>
          <div className="col-md-6">
            <div className="d-flex flex-wrap justify-content-center justify-content-md-end gap-3">
              <a href="/" className="text-white text-decoration-none small">Home</a>
              <a href="/destinations" className="text-white text-decoration-none small">Destinations</a>
              <a href="/itineraries" className="text-white text-decoration-none small">Itineraries</a>
              <a href="/gallery" className="text-white text-decoration-none small">Gallery</a>
              <a href="/about" className="text-white text-decoration-none small">About</a>
              <a href="/contact" className="text-white text-decoration-none small">Contact</a>
            </div>
          </div>
        </div>

        {/* Contact row – phone numbers */}
        <div className="row mt-3 pt-2">
          <div className="col-12 text-center">
            <div className="d-flex flex-wrap justify-content-center gap-4">
              <div className="d-flex align-items-center gap-2">
                <FaPhoneAlt style={{ color: "#d2691e", fontSize: "0.9rem" }} />
                <a href="tel:+265991238419" className="text-white text-decoration-none small">
                  0991 238 419
                </a>
              </div>
              <div className="d-flex align-items-center gap-2">
                <FaPhoneAlt style={{ color: "#d2691e", fontSize: "0.9rem" }} />
                <a href="tel:+265992374652" className="text-white text-decoration-none small">
                  0992 374 652
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-3 bg-white-50" />
        <div className="text-center small text-white-50">
          &copy; {new Date().getFullYear()} Malo Athu. All rights reserved.
        </div>
      </div>
    </footer>
  );
}