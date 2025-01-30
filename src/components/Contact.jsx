const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique pour traiter le formulaire, comme l'envoi à un serveur ou l'affichage d'un message de confirmation.
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="contact-title">
          <span className="icon-envelope"></span> Contactez-nous
        </h2>
        <p className="contact-sub-title">
          N'hésitez pas à nous contacter pour plus d'informations ou pour être informé de nos nouveautés.
        </p>

        <div className="contact-row">
          <div className="cta-info">
            <h4 className="cta-title">Satisfaction 100% garantie</h4>
            <p className="cta-description">
              Nous nous engageons à fournir un service de qualité. Contactez-nous pour discuter de votre projet et voir comment nous pouvons vous aider.
            </p>
            <h3 className="next-step-title">Quelles sont les prochaines étapes ?</h3>
            <ul className="cta-list">
              <li>Nous préparons une proposition adaptée à vos besoins.</li>
              <li>Nous en discutons ensemble pour l'ajuster.</li>
              <li>Nous lançons le projet une fois validé.</li>
            </ul>
          </div>
          <div className="contact-form">
            <h4 className="form-title">Démarrez votre projet</h4>
            <form onSubmit={handleSubmit} className=" form-fields">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Prénom"
                  id="inputFirstName"
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Nom"
                  id="inputLastName"
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Adresse e-mail"
                  id="inputEmail"
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Votre message"
                  id="message"
                  className="form-input"
                  required
                ></textarea>
              </div>
              <div className="form-submit">
                <button type="submit" className="btn submit-button">
                  Envoyer
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
