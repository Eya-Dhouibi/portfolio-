const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to process the form, such as sending it to a server or displaying a confirmation message.
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="contact-title">
          <span className="icon-envelope"></span> Contact Us
        </h2>
        <p className="contact-sub-title">
          Feel free to reach out for more information or to stay updated with our latest news.
        </p>

        <div className="contact-row">
          <div className="cta-info">
            <h4 className="cta-title">100% Satisfaction Guaranteed</h4>
            <p className="cta-description">
              We are committed to delivering high-quality service. Contact us to discuss your project and see how we can help.
            </p>
            <h3 className="next-step-title">What are the next steps?</h3>
            <ul className="cta-list">
              <li>We prepare a proposal tailored to your needs.</li>
              <li>We discuss and adjust it together.</li>
              <li>We launch the project once approved.</li>
            </ul>
          </div>
          <div className="contact-form">
            <h4 className="form-title">Start Your Project</h4>
            <form onSubmit={handleSubmit} className="form-fields">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="First Name"
                  id="inputFirstName"
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Last Name"
                  id="inputLastName"
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Email Address"
                  id="inputEmail"
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  id="message"
                  className="form-input"
                  required
                ></textarea>
              </div>
              <div className="form-submit">
                <button type="submit" className="btn submit-button">
                  Send
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
