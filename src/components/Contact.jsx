const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique pour traiter le formulaire, comme l'envoi à un serveur ou l'affichage d'un message de confirmation.
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h1 className="contact-title">
          <span className="icon-envelope"></span> Contact us
        </h1>
        <p className="contact-sub-title">
          Contact us for more information and get notified when I publish something new.
        </p>

        <div className="contact-row">
          <div className="cta-info">
            <h4 className="cta-title">100% Satisfaction Guaranteed</h4>
            <p className="cta-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam alias optio minima, tempore architecto sint ipsam dolore tempora facere laboriosam corrupti!
            </p>
            <h3 className="next-step-title">What will be the next step?</h3>
            <ul className="cta-list">
              <li>We'll prepare the proposal.</li>
              <li>We'll discuss it together.</li>
              <li>Let's start the discussion.</li>
            </ul>
          </div>
          <div className="contact-form">
            <h4 className="form-title">Start your project</h4>
            <form onSubmit={handleSubmit} className="form-fields">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="First Name"
                  id="inputFirstName"
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Last Name"
                  id="inputLastName"
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Email address"
                  id="inputEmail"
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Message"
                  id="message"
                  className="form-input"
                ></textarea>
              </div>
              <div className="form-submit">
                <button type="submit" className="submit-button">
                  Submit
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
