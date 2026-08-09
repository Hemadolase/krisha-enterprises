import Home from "./Pages/Home";
import { FaWhatsapp } from "react-icons/fa";
import "./App.css";

function App() {
  return (
    <>
      <Home />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919545746570"
        className="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </>
  );
}

export default App;