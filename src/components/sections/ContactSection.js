import { useState } from 'react';
import SectionHeader from '../terminal/SectionHeader';
import socialLogoMap from '../../constants/socialLogoMap';

function ContactSection({ quickLinks }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:TODO@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="terminal-section">
      <SectionHeader command="cat contact.md" />
      <div className="section-body">
        <p>
          Reach me by email: <a href="mailto:xachin300@gmail.com">xachin300@gmail.com</a>
        </p>
        <div className="link-grid">
          {quickLinks.slice(0, 3).map((link) => (
            socialLogoMap[link.label] ? (
              <a
                key={`contact-${link.label}`}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                className="social-logo-link"
                aria-label={link.label}
              >
                <img src={socialLogoMap[link.label]} alt="" className="social-logo" />
                <span className="sr-only">{link.label}</span>
              </a>
            ) : (
              <a
                key={`contact-${link.label}`}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                {link.label}
              </a>
            )
          ))}
        </div>

        <form className="contact-form" onSubmit={handleContactSubmit}>
          <label htmlFor="name">name</label>
          <input id="name" name="name" value={form.name} onChange={handleInputChange} required />

          <label htmlFor="email">email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="message">message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={form.message}
            onChange={handleInputChange}
            required
          />

          <button type="submit">send via mail client</button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
