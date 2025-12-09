import React, { useState } from "react";
import "./Contact.css";
import { motion } from "framer-motion";
import { FiMail, FiLinkedin, FiGithub, FiFileText } from "react-icons/fi";

export default function Contact() {
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = new FormData(form);
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      setIsSent(true);
      form.reset();
      setTimeout(() => setIsSent(false), 3000);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner">
        <h2 className="contact-heading">Get in Touch</h2>
        <p className="contact-subtitle">
          Let’s connect and explore opportunities together.
        </p>

        <div className="contact-wrapper">
          {/* LEFT — Social & Info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ul>
              <li>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=harshita@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiMail className="contact-icon" /> harshita@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/harshitavarma"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiLinkedin className="contact-icon" /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Har03shita"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiGithub className="contact-icon" /> GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1TYpUbLRwTuV7cJKnfSQiqAngFBDcn7HV/view?usp=sharing
"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiFileText className="contact-icon" /> Resume
                </a>
              </li>
            </ul>
          </motion.div>

          {/* RIGHT — Contact Form */}
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Web3Forms Required */}
            <input
              type="hidden"
              name="access_key"
              value="cc3440f8-80ad-47ca-909e-c51dc23be82f"
            />

            <div className="form-group">
              <input type="text" name="name" placeholder="Your Name" required />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Message"
                rows="6"
                required
              />
            </div>

            <button type="submit" className="contact-btn">
              Send Message
            </button>

            {isSent && (
              <p className="form-success">Message Sent Successfully!</p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
