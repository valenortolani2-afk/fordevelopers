import { useState } from 'react'

function Header() {
  const [open, setOpen] = useState(false)

  function closeMenu() {
    setOpen(false)
  }

  return (
    <header className="site-header">
      <div className="container header-bar">
        <a className="brand" href="#inicio" onClick={closeMenu}>
          fordevelopers
        </a>

        <nav className="header-nav" aria-label="Principal">
          <a href="#servicios" onClick={closeMenu}>
            Servicios
          </a>
          <a href="#proceso" onClick={closeMenu}>
            Proceso
          </a>
          <a href="#contacto" onClick={closeMenu}>
            Contacto
          </a>
        </nav>

        <a className="btn btn-primary header-cta" href="#contacto" onClick={closeMenu}>
          Hablemos
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? 'Cerrar' : 'Menú'}
        </button>
      </div>

      <nav
        id="mobile-nav"
        className={`mobile-nav${open ? ' is-open' : ''}`}
        hidden={!open}
        aria-label="Móvil"
      >
        <a href="#servicios" onClick={closeMenu}>
          Servicios
        </a>
        <a href="#proceso" onClick={closeMenu}>
          Proceso
        </a>
        <a href="#contacto" onClick={closeMenu}>
          Contacto
        </a>
      </nav>
    </header>
  )
}

export default Header
