import { useState } from "react";

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/xvgdowwa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Error submitting the form. Please try again later.");
    }
  };

  return (
    <section className="contact-section">
      <h2>Contact Us</h2>
      <p>We’d love to hear from you! Send us a message below </p>

      {submitted ? (
        <p className="success-message">
           Message sent successfully! We’ll get back to you soon.
        </p>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </label>

          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message..."
              rows="4"
              required
            ></textarea>
          </label>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      )}

      {/* Embedded Google Map */}
      <div className="map-container">
        <iframe
          title="Gadget Source Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.857816845035!2d36.82695831475337!3d-1.2849939990590077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10ce01b12ffb%3A0x46a8c2f2bb0b7c3!2sRonald%20Ngala%20Street%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1730745612345!5m2!1sen!2ske"
          width="100%"
          height="450"
          style={{ border: 0, borderRadius: "12px", marginTop: "1rem" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}

export default ContactSection;
