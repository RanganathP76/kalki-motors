import React from "react";
import { FaTools, FaBatteryFull, FaTachometerAlt, FaOilCan, FaCogs } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Offers.css";

const offers = [
  {
    id: 1,
    icon: <FaTools />,
    title: "Festival Special",
    discount: "50% OFF",
    regularPrice: "Regular price",
    quote: "Special festival discount on all services",
    terms: "Valid till end of festival. One offer per customer.",
  },
  {
    id: 2,
    icon: <FaBatteryFull />,
    title: "Spare Parts Discount",
    discount: "30% OFF",
    regularPrice: "₹Regular price",
    quote: "Get the best deals on all spare parts",
    terms: "Applicable on selected spare parts only.",
  },
  {
    id: 3,
    icon: <FaTachometerAlt />,
    title: "50% off on Service",
    discount: "50% OFF",
    regularPrice: "₹Regular price",
    quote: "Complete maintenance at half price",
    terms: "Valid once per vehicle. Offer ends soon.",
  },
  {
    id: 4,
    icon: <FaOilCan />,
    title: "Oil Change Offer",
    discount: "40% OFF",
    regularPrice: "₹Regular price",
    quote: "Premium oil at a discounted price",
    terms: "Offer valid for first 100 customers.",
  },
  {
    id: 5,
    icon: <FaCogs />,
    title: "Brake Checkup",
    discount: "25% OFF",
    regularPrice: "₹Regular price",
    quote: "Ensure your brakes are safe",
    terms: "Offer applicable for scooters only.",
  },
];

const reviews = [
  { name: "Rohit K.", text: "Great service and timely delivery!" },
  { name: "Anita S.", text: "Saved a lot on festival offers. Highly recommend!" },
  { name: "Vikram P.", text: "Professional staff and excellent discounts." },
];

function OfferPage() {
  const navigate = useNavigate();

  return (
    <div className="offer-page">
      <h1 className="offer-title"> Current Offers</h1>
      <p className="offer-subtitle">Grab the best deals on scooter services this season.</p>

      <div className="offer-grid">
        {offers.map((offer) => (
          <div className="offer-card" key={offer.id}>
            <div className="offer-icon">{offer.icon}</div>
            <div className="offer-content">
              <h2>{offer.title}</h2>
              <p className="offer-quote">{offer.quote}</p>
              <p className="offer-price">
                <span className="regular-price">{offer.regularPrice}</span>{" "}
                <span className="discount-price">{offer.discount}</span>
              </p>
              <p className="offer-terms">{offer.terms}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="reviews-section">
        <h2>Customer Reviews</h2>
        {reviews.map((rev, idx) => (
          <div className="review-card" key={idx}>
            <p className="review-text">"{rev.text}"</p>
            <p className="reviewer-name">- {rev.name}</p>
          </div>
        ))}
      </div>

      <div className="footer-cta">
        <h4>Ready to save big?</h4>
        <p>Contact us now to avail these exclusive offers!</p>
      </div>

      {/* Floating Reach Us Button */}
      <button
        className="floating-contact-btn"
        onClick={() => navigate("/contact")}
      >
        📞 Reach Us Now
      </button>
    </div>
  );
}

export default OfferPage;
