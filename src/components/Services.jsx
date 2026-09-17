const services = [
  {
    title: 'Desarrollo web',
    text: 'Sitios y productos web claros, rápidos y listos para usar en el día a día del negocio.',
  },
  {
    title: 'Apps a medida',
    text: 'Aplicaciones pensadas para tu flujo de trabajo, no para un catálogo genérico.',
  },
  {
    title: 'Integraciones y APIs',
    text: 'Conectamos herramientas, datos y sistemas para que dejen de trabajar por separado.',
  },
  {
    title: 'Consultoría técnica',
    text: 'Te ayudamos a definir alcance, camino y prioridades cuando el proyecto todavía está en el aire.',
  },
]

function Services() {
  return (
    <section className="section" id="servicios">
      <div className="container">
        <p className="section-kicker">Servicios</p>
        <h2 className="section-title">Lo que podemos construir juntos</h2>
        <p className="section-lead">
          Tomamos proyectos de software con presupuesto y un objetivo claro:
          una web, una app, un sistema interno o una primera versión para
          salir al mercado.
        </p>
        <div className="card-grid">
          {services.map((service) => (
            <article className="panel" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
