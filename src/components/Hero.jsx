function Hero() {
  return (
    <section className="hero section" id="inicio">
      <div className="container">
        <div className="hero-copy">
          <p className="section-kicker">Estudio freelance de software</p>
          <h1>
            Software a medida para ideas, negocios y equipos que necesitan
            avanzar
          </h1>
          <p className="hero-lead">
            Diseñamos y desarrollamos webs, apps, sistemas e integraciones.
            Trabajamos por proyecto, con plazos claros y cambios pensados para
            lo que tu negocio o tu idea realmente necesitan.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#contacto">
              Contanos tu proyecto
            </a>
            <a className="btn btn-secondary" href="#servicios">
              Ver servicios
            </a>
          </div>
        </div>
        <ul className="trust-strip">
          <li>A medida, no una plantilla genérica</li>
          <li>Entregas en tiempo y forma</li>
          <li>Trato directo, sin capas de agencia</li>
        </ul>
      </div>
    </section>
  )
}

export default Hero
