import { useEffect, useRef, useState } from 'react'

const links = [
  { href: '#servicios', id: 'servicios', label: 'Servicios' },
  { href: '#proceso', id: 'proceso', label: 'Proceso' },
  { href: '#contacto', id: 'contacto', label: 'Contacto' },
]

function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const firstLinkRef = useRef(null)
  const toggleRef = useRef(null)

  function closeMenu() {
    setOpen(false)
  }

  useEffect(() => {
    const ids = links.map((link) => link.id)

    function sync() {
      setScrolled(window.scrollY > 8)

      const offset = 96
      let current = ''

      for (const id of ids) {
        const section = document.getElementById(id)
        if (!section) continue
        if (section.getBoundingClientRect().top - offset <= 0) {
          current = id
        }
      }

      setActive(current)
    }

    sync()
    window.addEventListener('scroll', sync, { passive: true })
    window.addEventListener('hashchange', sync)

    const desktop = window.matchMedia('(min-width: 1025px)')
    function closeOnDesktop(event) {
      if (event.matches) setOpen(false)
    }
    desktop.addEventListener('change', closeOnDesktop)

    return () => {
      window.removeEventListener('scroll', sync)
      window.removeEventListener('hashchange', sync)
      desktop.removeEventListener('change', closeOnDesktop)
    }
  }, [])

  useEffect(() => {
    if (!open) return undefined

    function onKeyDown(event) {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    firstLinkRef.current?.focus()
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <header
      className={`site-header${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}
    >
      {open ? (
        <button
          type="button"
          className="nav-backdrop"
          aria-label="Cerrar menú"
          onClick={closeMenu}
        />
      ) : null}

      <div className="container header-bar">
        <a className="brand" href="#inicio" onClick={closeMenu}>
          fordevelopers
        </a>

        <nav className="header-nav" aria-label="Principal">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={active === link.id ? 'is-active' : undefined}
              aria-current={active === link.id ? 'location' : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a className="btn btn-primary header-cta" href="#contacto" onClick={closeMenu}>
          Hablemos
        </a>

        <button
          ref={toggleRef}
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="menu-toggle-bars" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      <nav
        id="mobile-nav"
        className={`mobile-nav${open ? ' is-open' : ''}`}
        hidden={!open}
        aria-label="Móvil"
      >
        <div className="container mobile-nav-inner">
          {links.map((link, index) => (
            <a
              key={link.id}
              href={link.href}
              ref={index === 0 ? firstLinkRef : undefined}
              className={active === link.id ? 'is-active' : undefined}
              aria-current={active === link.id ? 'location' : undefined}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
          <a className="btn btn-primary" href="#contacto" onClick={closeMenu}>
            Hablemos
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Header
