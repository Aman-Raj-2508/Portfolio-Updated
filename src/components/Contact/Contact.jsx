import React, { useState } from 'react';
import { FiSend, FiMail, FiMapPin, FiPhone, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import './Contact.css';

const CONTACT_INFO = [
  { icon: <FiMail />,   label: 'Email',    value: 'aman.raj.sde@gmail.com', href: 'mailto:aman.raj.sde@gmail.com' },
  { icon: <FiPhone />,  label: 'Phone',    value: '+91 9430427995',         href: 'tel:+919430427995'             },
  { icon: <FiMapPin />, label: 'Location', value: 'India',                  href: '#'                             },
];

const SOCIALS = [
  { icon: <FiGithub />,   href: 'https://github.com/Aman-Raj-2508',                 label: 'GitHub'   },
  { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/aman-raj-1a4a35252/', label: 'LinkedIn' },
  { icon: <FiTwitter />,  href: 'https://x.com/amansingh_2508',                     label: 'Twitter'  },
];

const INITIAL = { name: '', email: '', subject: '', message: '' };

const Contact = () => {
  const [form,    setForm]    = useState(INITIAL);
  const [status,  setStatus]  = useState('idle'); // idle | loading | success | error
  const [errMsg,  setErrMsg]  = useState('');

  useScrollAnimation();

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate
    if (!form.name || !form.email || !form.subject || !form.message) {
      setStatus('error');
      setErrMsg('Please fill in all fields.');
      return;
    }
    // Open default mail client with prefilled content
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    const subject = encodeURIComponent(form.subject);
    window.open(`mailto:aman.raj.sde@gmail.com?subject=${subject}&body=${body}`);
    setStatus('success');
    setForm(INITIAL);
  };

  return (
    <section id="contact" className="contact section-padding">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            Whether you have a data analytics project, a full stack opportunity,
            or just want to say hi – my inbox is always open.
          </p>
        </div>

        <div className="contact-grid">
          {/* ── Left: info ── */}
          <div className="contact-info reveal-left">
            <div className="info-block glass-card">
              <h3 className="info-block-title">Let's build something together</h3>
              <p className="info-block-text">
                I’m open to Data Analyst and Full Stack Developer opportunities. If you need someone who can
                turn raw data into dashboards, automation, and actionable insights, or build reliable web
                applications from frontend to backend, I’d love to connect.
              </p>

              <div className="contact-items">
                {CONTACT_INFO.map(({ icon, label, value, href }) => (
                  <a key={label} href={href} className="contact-item">
                    <span className="ci-icon">{icon}</span>
                    <div>
                      <span className="ci-label">{label}</span>
                      <span className="ci-value">{value}</span>
                    </div>
                  </a>
                ))}
              </div>

              <div className="contact-socials">
                {SOCIALS.map(({ icon, href, label }) => (
                  <a key={label} href={href} className="social-btn" target="_blank" rel="noopener noreferrer" aria-label={label}>
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: form ── */}
          <div className="contact-form-wrap reveal-right">
            <form className="contact-form glass-card" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Project Collaboration / Job Opportunity"
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell me about your project or idea…"
                  value={form.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              {status === 'success' && (
                <div className="form-notice success">
                  ✅ Message sent! I'll get back to you within 24 hours.
                </div>
              )}
              {status === 'error' && (
                <div className="form-notice error">⚠️ {errMsg}</div>
              )}

              <button
                type="submit"
                className="btn-primary submit-btn"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? (
                  <><span className="spinner"></span> Sending…</>
                ) : (
                  <><FiSend /> Send Message</>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
