import '../styling/MyMainContactSection.css';

const MyMainContactSection = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">I'm currently open to new opportunities and interesting projects</p>
        
        <div className="contact-grid">
          {/* Email Contact */}
          <div className="contact-card email">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <h3 className="contact-method">Email</h3>
            <a href="mailto:David.Pavlic0@gmail.com" className="contact-detail">
              David.Pavlic0@gmail.com
            </a>
            <a href="mailto:David.Pavlic0@gmail.com" className="contact-button">
              Send Message
            </a>
          </div>

          {/* Phone Contact */}
          <div className="contact-card phone">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
              </svg>
            </div>
            <h3 className="contact-method">Phone</h3>
            <a href="tel:+41789512347" className="contact-detail">
              +41 78 951 23 47
            </a>
            <a href="tel:+41789512347" className="contact-button">
              Call Me
            </a>
          </div>

          {/* LinkedIn */}
          <div className="contact-card linkedin">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </div>
            <h3 className="contact-method">LinkedIn</h3>
            <p className="contact-detail">Connect professionally</p>
            <a 
              href="https://www.linkedin.com/in/YOUR_PROFILE" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-button"
            >
              Visit Profile
            </a>
          </div>

          {/* GitHub */}
          <div className="contact-card github">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </div>
            <h3 className="contact-method">GitHub</h3>
            <p className="contact-detail">View my projects</p>
            <a 
              href="https://github.com/davidpavlic" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-button"
            >
              Visit Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyMainContactSection;