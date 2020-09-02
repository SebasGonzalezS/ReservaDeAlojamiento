
// componente Header de la página web, cambio de texto por medio de props según el estado del filtro.
const Encabezado = (header) => {
    return (
      <section className="hero is-success">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Hoteles
            </h1>
            <h2 className="subtitle">
              Desde el <strong>{ header.filters.dateFrom.toLocaleDateString('es-ES',{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) }</strong> hasta el <strong>{ header.filters.dateTo.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) }</strong>
            </h2>
          </div>
        </div>
      </section>
    )
  }