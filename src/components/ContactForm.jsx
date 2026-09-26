import { useState } from 'react'

const initialForm = {
  nombre: '',
  email: '',
  telefono: '',
  tipo: '',
  mensaje: '',
}

function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')

  function updateField(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT

    if (!endpoint) {
      setStatus('unconfigured')
      return
    }

    setStatus('sending')

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: form.nombre,
          email: form.email,
          telefono: form.telefono,
          tipo: form.tipo,
          mensaje: form.mensaje,
        }),
      })

      if (!response.ok) {
        throw new Error('No se pudo enviar el formulario')
      }

      setStatus('success')
      setForm(initialForm)
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="section" id="contacto">
      <div className="container contact-layout">
        <div>
          <p className="section-kicker">Contacto</p>
          <h2 className="section-title">Hablemos de tu proyecto</h2>
          <p className="section-lead">
            Con nombre, email y una descripción alcanza para empezar. Si hay
            teléfono, mejor; si no, igual te escribimos.
          </p>
        </div>

        {status === 'success' ? (
          <div className="panel form-status" role="status">
            <h3>Recibimos tu proyecto</h3>
            <p>Te escribimos a la brevedad para seguir con el alcance.</p>
          </div>
        ) : (
          <form className="panel contact-form" onSubmit={handleSubmit}>
            <label>
              Nombre
              <input
                type="text"
                name="nombre"
                autoComplete="name"
                value={form.nombre}
                onChange={updateField}
                required
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                autoComplete="email"
                value={form.email}
                onChange={updateField}
                required
              />
            </label>
            <label>
              Teléfono <span className="optional">(opcional)</span>
              <input
                type="tel"
                name="telefono"
                autoComplete="tel"
                value={form.telefono}
                onChange={updateField}
              />
            </label>
            <label>
              Tipo de proyecto
              <select
                name="tipo"
                value={form.tipo}
                onChange={updateField}
                required
              >
                <option value="" disabled>
                  Elegí una opción
                </option>
                <option value="web">Desarrollo web</option>
                <option value="app">App a medida</option>
                <option value="api">Integración o API</option>
                <option value="consultoria">Consultoría técnica</option>
                <option value="otro">Todavía no lo tengo claro</option>
              </select>
            </label>
            <label className="full">
              Contanos el proyecto
              <textarea
                name="mensaje"
                rows="5"
                value={form.mensaje}
                onChange={updateField}
                required
              />
            </label>

            {status === 'unconfigured' ? (
              <p className="form-note" role="status">
                El envío todavía no está conectado. Escribinos a{' '}
                <a href="mailto:hola@fordevelopers.com">
                  hola@fordevelopers.com
                </a>{' '}
                con tu proyecto y te respondemos.
              </p>
            ) : null}

            {status === 'error' ? (
              <p className="form-note form-note-error" role="alert">
                No pudimos enviar el mensaje. Probá de nuevo o escribinos a{' '}
                <a href="mailto:hola@fordevelopers.com">
                  hola@fordevelopers.com
                </a>
                .
              </p>
            ) : null}

            <button
              className="btn btn-primary"
              type="submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Enviando…' : 'Enviar proyecto'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default ContactForm
