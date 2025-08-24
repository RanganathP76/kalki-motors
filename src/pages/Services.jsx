import "./Services.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Services() {
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      icon: "🛠️",
      title: "General Service",
      desc: "Complete two-wheeler servicing to keep your ride smooth and safe.",
      points: [
        "Full checkup & inspection",
        "Engine oil top-up",
        "Brake & clutch adjustment",
        "Water wash & polish",
      ],
    },
    {
      id: 2,
      icon: "⚡",
      title: "Electrical Repair",
      desc: "Battery, lights, wiring – we fix all your electrical issues quickly.",
      points: [
        "Battery health check",
        "Wiring repair",
        "Lighting & indicators",
        "Starter motor inspection",
      ],
    },
    {
      id: 3,
      icon: "🛞",
      title: "Tyre & Brake",
      desc: "Ensure maximum road safety with tyre changes and brake care.",
      points: [
        "Tyre replacement & repair",
        "Brake pad & disc inspection",
        "Wheel alignment",
        "Balancing service",
      ],
    },
    {
      id: 4,
      icon: "🛢️",
      title: "Oil Change",
      desc: "Premium engine oil replacement for smoother performance.",
      points: [
        "Engine oil drain & refill",
        "Oil filter cleaning",
        "Improves mileage",
        "Enhances engine life",
      ],
    },
    {
      id: 5,
      icon: "🔧",
      title: "Engine Work",
      desc: "Expert repairs and tune-ups to keep your engine at peak performance.",
      points: [
        "Engine tuning",
        "Carburetor & fuel system check",
        "Valve & piston care",
        "Noise & smoke reduction",
      ],
    },
    {
      id: 6,
      icon: "💡",
      title: "Other Services",
      desc: "Any service you want – we can do it. Just let us know your need.",
      points: [
        "Custom modifications",
        "Accident repairs",
        "Body polishing",
        "Special requests",
      ],
    },
  ];

  const whyChoose = [
    { id: 1, icon: "⭐", title: "Expert Technicians", desc: "Certified and skilled mechanics for every service." },
    { id: 2, icon: "⚙️", title: "Genuine Parts", desc: "We use only authentic spare parts for long-lasting performance." },
    { id: 3, icon: "🚀", title: "Quick Turnaround", desc: "Fast and reliable servicing without compromising quality." },
    { id: 4, icon: "💰", title: "Affordable Pricing", desc: "Transparent and budget-friendly rates with no hidden costs." },
  ];

  return (
    <div className="services">
      {/* Hero Section */}
      <section className="services-hero">
        <h1>Our Services</h1>
        <p>Premium care for your two-wheeler, anytime, anywhere.</p>
      </section>

      {/* Services Grid */}
      <section className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <ul className="service-points">
              {service.points.map((point, index) => (
                <li key={index}>✓ {point}</li>
              ))}
            </ul>

            <Link to="/service-booking" state={{ service: service.title }}>
              <button className="btn">Door Step Service</button>
            </Link>
          </div>
        ))}
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose">
        <h2>Why Choose Our Service?</h2>
        <div className="why-grid">
          {whyChoose.map((item) => (
            <div key={item.id} className="why-card">
              <div className="why-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Shree Kalki Motors. All rights reserved.</p>
        <p>Trusted two-wheeler sales & services for thousands of happy riders.</p>
      </footer>

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

export default Services;

