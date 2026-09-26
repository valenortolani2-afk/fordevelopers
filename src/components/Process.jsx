const steps = [
  {
    n: '01',
    title: 'Contanos el proyecto',
    text: 'Qué necesitás, para quién es y para cuándo. Con eso alcanza para empezar.',
  },
  {
    n: '02',
    title: 'Alcance y propuesta',
    text: 'Te devolvemos un plan concreto: alcance, tiempos y forma de trabajo.',
  },
  {
    n: '03',
    title: 'Desarrollo con entregas parciales',
    text: 'Vas viendo avances reales. No un paquete cerrado al final.',
  },
  {
    n: '04',
    title: 'Ajustes y entrega',
    text: 'Iteramos sobre lo que importa y dejamos el producto listo para usar.',
  },
]

function Process() {
  return (
    <section className="section process" id="proceso">
      <div className="container">
        <p className="section-kicker">Proceso</p>
        <h2 className="section-title">Cómo trabajamos</h2>
        <p className="section-lead">
          Un camino simple para que sepas qué pasa después de dejar tu
          proyecto.
        </p>
        <ol className="process-grid">
          {steps.map((step) => (
            <li className="panel process-step" key={step.n}>
              <span className="process-n">{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Process
