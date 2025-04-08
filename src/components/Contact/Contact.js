import React, { useContext, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react"; // Icons
import "./Contact.css"; // Importing CSS styles
import { ThemeContext } from "../../context/ThemeContext"; // Theme context for light/dark theme

export default function Contact() {
  // State for form input fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Access theme from context
  const { theme } = useContext(ThemeContext);

  return (
    <section
      id="contact"
      className={`contact ${theme === "dark" ? "dark-theme" : ""}`} // Apply dark theme conditionally
    >
      <div className="container">
        {/* Section Title */}
        <h2 className="section-title">Get in Touch</h2>

        <div className="contact-row">
          {/* === Contact Info Section === */}
          <div className="contact-column">
            {/* Location Info */}
            <div className="info-box">
              <MapPin className="icon" />
              <div>
                <h3>Location</h3>
                <p>Hyderabad, Telangana</p>
              </div>
            </div>

            {/* Phone Info */}
            <div className="info-box">
              <Phone className="icon" />
              <div>
                <h3>Call Me</h3>
                <p>+91 8309761929</p>
              </div>
            </div>

            {/* Email Info */}
            <div className="info-box">
              <Mail className="icon" />
              <div>
                <h3>Email</h3>
                <p>narukullasanjay@gmail.com</p>
              </div>
            </div>
          </div>

          {/* === Contact Form Section === */}
          <div className="contact-column">
            <form
              className="contact-form"
              action="https://api.web3forms.com/submit" // Form submission URL
              method="POST"
            >
              <div className="form-group">
                {/* Hidden access key for Web3Forms */}
                <input
                  type="hidden"
                  name="access_key"
                  value="7b3804ef-484f-4a11-9bfb-d417b8df7599"
                />
                {/* Name Input */}
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>

              {/* Email Input */}
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>

              {/* Message Textarea */}
              <div className="form-group">
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="form-submit">
                <button type="submit" className="form-button">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer Credit */}
        <div className="credits">Designed by Sanjay Narukulla</div>
      </div>
    </section>
  );
}
