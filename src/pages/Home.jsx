import "./Home.css";
import React from "react";
import { Link } from "react-router-dom";


function Home() {
  // ---- replace these with your real details ----
  const PHONE_NUMBER = "9606188193"; // digits only for tel: and wa.me
  const WHATSAPP_NUMBER = "9606188193";
  const MAP_QUERY = encodeURIComponent("Kalki Motors, Your City");
  // ------------------------------------------------

  return (
    <div className="home">

      {/* Welcome Bar */}
      <div className="welcome-bar">
        Welcome to Two Wheeler Sales and Services
      </div>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Kaliki motors - Your Ride, Our Pride</h1>
          <p>
            Explore the best deals on two-wheelers, services, and maintenance —
            all in one place.
          </p>

          
        </div>

        <div className="hero-img">
          {/* you said images are added from JSX */}
          <img src="/images/hero-bike.jpg" alt="Bike" />
        </div>
      </section>

      {/* Door Step Service */}
      <section
        className="doorstep"
        style={{
          backgroundImage: "url('/images/doorstep-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="doorstep-overlay">
          <h1>Door Step Service</h1>
          <h4>
            Get your two-wheeler serviced at your doorstep – fast, reliable, and
            hassle-free.
          </h4>
          <Link to="/services" className="book-btn as-link">
            Book Service
          </Link>
        </div>
      </section>

      {/* Offers */}
      <section className="offers">
        <h1>Unbeatable Offers This Month!</h1>
        <p className="offers-sub">Don't miss these exclusive deals designed just for you</p>

        <div className="offers-grid">
          <div className="offer-card">
            <div className="icon green">₹</div>
            <h3>Lowest Down Payment</h3>
            <h2>₹9,999</h2>
            <p>Start your journey with minimal upfront cost</p>
            
          </div>

          <div className="offer-card">
            <div className="icon blue">%</div>
            <h3>Low Interest Rate</h3>
            <h2>7.99%</h2>
            <p>Affordable EMIs that fit your budget</p>
            
          </div>

          <div className="offer-card">
            <div className="icon orange">50%</div>
            <h3>Extra Fitting Discount</h3>
            <h2>50% OFF</h2>
            <p>Premium accessories at half price</p>
            
          </div>

          <div className="offer-card">
            <div className="icon dark">⛽</div>
            <h3>Helmet + Free Petrol</h3>
            <h2>5L Petrol + Helmet</h2>
            <p>Ride safe and enjoy free fuel on your new purchase</p>
            
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="badges">
        <h2 className="badges-heading">Why Choose Kalki Motors?</h2>

        <div className="badges-grid">
          <div className="badge">
            <div className="badge-icon dark">★</div>
            <h3>Quality Service</h3>
            <p>Certified technicians</p>
          </div>
          <div className="badge">
            <div className="badge-icon grey">👥</div>
            <h3>Multi Brand</h3>
            <p>All major brands</p>
          </div>
          <div className="badge">
            <div className="badge-icon dark">⚙️</div>
            <h3>Genuine Parts</h3>
            <p>Original spare parts</p>
          </div>
          <div className="badge">
            <div className="badge-icon grey">⏱</div>
            <h3>Quick Service</h3>
            <p>Fast turnaround</p>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="reviews">
        <h2>What Our Customers Say</h2>
        <p className="subtitle">Real stories from satisfied customers</p>

        <div className="reviews-grid">
          <div className="review-card">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p>
              "Excellent service and amazing deals! Got my scooter with just
              ₹9,999 down payment."
            </p>
            <h4>- Rajesh Kumar</h4>
          </div>

          <div className="review-card">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p>
              "Best interest rates in the city! 7.99% made my dream bike
              affordable."
            </p>
            <h4>- Priya Sharma</h4>
          </div>

          <div className="review-card">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p>
              "Professional staff and quick delivery. Highly recommend Shree
              Kalki Motors!"
            </p>
            <h4>- Amit Patel</h4>
          </div>
        </div>
      </section>

      {/* Trusted Logos */}
      <section className="trusted">
        <p>Trusted by leading brands and thousands of happy riders</p>
        <div className="trusted-logos">
          <img src="/images/logo1.png" alt="Brand 1" />
          <img src="/images/logo2.png" alt="Brand 2" />
          <img src="/images/logo3.png" alt="Brand 3" />
          <img src="/images/logo4.png" alt="Brand 4" />
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Ready to Ride?</h2>
        <p>Book your bike or service today and join our family of happy riders.</p>
        <Link to="/contact" className="btn as-link">Contact Us</Link>
      </section>

      {/* Floating action dock */}
      <div className="fab-dock">
        <a
          className="fab"
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
            "Hi! I'd like to know more about Kalki Motors."
          )}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          title="Chat on WhatsApp"
        >
          💬
          <span>WhatsApp</span>
        </a>

        <a
          className="fab"
          href={`tel:${PHONE_NUMBER}`}
          aria-label="Call us"
          title="Call us"
        >
          📞
          <span>Call</span>
        </a>

        <a
          className="fab"
          href={`https://www.google.com/maps/dir/?api=1&destination=${MAP_QUERY}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Get directions"
          title="Get directions"
        >
          📍
          <span>Maps</span>
        </a>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Two Wheeler Sales and Services. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
