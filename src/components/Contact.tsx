const Contact: React.FC = () => {
  return (
    <section className="Contact">
      <div className="Contact__content">
        <h1 className="Contact__content__title">Let's chat</h1>
        <p className="Contact__content__desc">
          Any question about staking or the services we provide?
          We would be glad to help you. Contact us at
        </p>
        <a href="mailto:contact@stakelab.fr" className="Contact__content__mail link__primary">contact@stakelab.fr</a>
      </div>
    </section>
  );
}

export default Contact;