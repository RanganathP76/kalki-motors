import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Offers from "./pages/Offers";
import ContactUs from "./pages/ContactUs";
import ServiceBooking from "./pages/ServiceBooking";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/service-booking" element={<ServiceBooking />} />
      </Routes>
    </Router>
  );
}

export default App;
