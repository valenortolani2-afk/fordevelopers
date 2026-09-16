import './App.css'

function App() {
  return (
    <>
      <section id="center">
        <div className="hero">
          <img
            src="/imagenes/imagen1.jpg"
            className="base"
            alt="Persona usando una computadora con alertas de inteligencia artificial"
          />
        </div>
        <div className="why-us">
          <h1>fordevelopers</h1>
          <p className="why-us-question">¿Por qué elegirnos?</p>
        </div>
        <p className="counter">
          Somos una plataforma que desarrolla software a medida, abordando los
          desafíos que implica desarrollar una idea innovadora. Trabajamos de
          forma freelance, entregando proyectos eficientes en tiempo y forma,
          con modificaciones adaptadas a cada detalle del cliente.
        </p>
      </section>

      <div className="ticks"></div>

      <section id="servicios">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Contanos tu idea</h2>
          <p>Dejanos tus datos y nos pondremos en contacto.</p>
          <form className="contact-form">
            <label className="contact-field">
              Ingrese su nombre
              <input type="text" name="nombre" autoComplete="given-name" required />
            </label>
            <label className="contact-field">
              Ingrese su apellido
              <input type="text" name="apellido" autoComplete="family-name" required />
            </label>
            <label className="contact-field">
              Ingrese su e-mail
              <input type="email" name="email" autoComplete="email" required />
            </label>
            <label className="contact-field">
              Ingrese su numero telefonico
              <input type="tel" name="telefono" autoComplete="tel" required />
            </label>
            <label className="idea-field">
              Ingrese su idea innovadora
              <textarea name="idea" rows="4" required></textarea>
            </label>
            <button type="submit">Enviar respuesta</button>
          </form>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>

      <footer className="site-footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <a className="footer-logo" href="#center">
              fordevelopers
            </a>
            <p>
              Desarrollo de software a medida y productos digitales para
              empresas que necesitan tecnología sólida, clara y lista para
              escalar.
            </p>
            <p className="footer-badge">Abiertos a nuevos proyectos</p>
          </div>

          <nav className="footer-col" aria-label="Estudio">
            <h2>Estudio</h2>
            <ul>
              <li>
                <a href="#center">Inicio</a>
              </li>
              <li>
                <a href="#servicios">Servicios</a>
              </li>
              <li>
                <a href="#docs">Recursos</a>
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

          <div className="footer-col" id="contacto">
            <h2>Contacto</h2>
            <ul>
              <li>
                <a href="mailto:hola@fordevelopers.com">hola@fordevelopers.com</a>
              </li>
              <li>
                <span>Trabajo remoto · LATAM</span>
              </li>
            </ul>
            <div className="footer-social">
              <a
                href="https://github.com/vitejs/vite"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <svg className="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#github-icon"></use>
                </svg>
              </a>
              <a
                href="https://x.com/vite_js"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
              >
                <svg className="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#x-icon"></use>
                </svg>
              </a>
              <a
                href="https://chat.vite.dev/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord"
              >
                <svg className="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
              </a>
            </div>
            <a className="footer-cta" href="mailto:hola@fordevelopers.com">
              Hablemos de tu proyecto
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} fordevelopers. Todos los derechos reservados.</p>
          <p className="footer-note">Software a medida para equipos que quieren avanzar más rápido.</p>
        </div>
      </footer>
    </>
  )
}

export default App
