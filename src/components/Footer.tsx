export default function Footer() {
  return (
    <footer className="footer mt-auto py-4 bg-dark text-white">
      <div className="container">
        <div className="row gy-3">
          <div className="col-md-6 text-center text-md-start">
            <h5 className="mb-2" style={{ color: "#d2691e" }}>
              Malawi Food & Travel
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
            </div>
          </div>
        </div>
        <hr className="my-3 bg-white-50" />
        <div className="text-center small text-white-50">
          &copy; {new Date().getFullYear()} Malawi Food & Travel. All rights reserved.
        </div>
      </div>
    </footer>
  );
}