function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a className="footer-logo" href="#inicio">
            fordevelopers
          </a>
          <p>
            Desarrollo de software a medida para ideas, negocios y equipos que
            necesitan tecnología clara y lista para usar.
          </p>
          <p className="footer-badge">Abiertos a nuevos proyectos</p>
        </div>

        <nav className="footer-col" aria-label="Estudio">
          <h2>Estudio</h2>
          <ul>
            <li>
              <a href="#inicio">Inicio</a>
            </li>
            <li>
              <a href="#servicios">Servicios</a>
            </li>
            <li>
              <a href="#proceso">Proceso</a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
          </ul>
        </nav>

        <nav className="footer-col" aria-label="Servicios">
          <h2>Servicios</h2>
          <ul>
            <li>
              <a href="#servicios">Desarrollo web</a>
            </li>
            <li>
              <a href="#servicios">Apps a medida</a>
            </li>
            <li>
              <a href="#servicios">Integraciones y APIs</a>
            </li>
            <li>
              <a href="#servicios">Consultoría técnica</a>
            </li>
          </ul>
        </nav>

        <div className="footer-col">
          <h2>Contacto</h2>
          <ul>
            <li>
              <a href="mailto:hola@fordevelopers.com">hola@fordevelopers.com</a>
            </li>
            <li>
              <span>Trabajo remoto · LATAM</span>
            </li>
          </ul>
          <a className="btn btn-primary footer-cta" href="#contacto">
            Hablemos de tu proyecto
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>
          © {new Date().getFullYear()} fordevelopers. Todos los derechos
          reservados.
        </p>
        <p>Software a medida para quienes quieren avanzar más rápido.</p>
      </div>
    </footer>
  )
}

export default Footer
