//Componente para el manejo de fechas de ingreso y salida del alojamiento.
class Calendario extends React.Component {
    constructor() {
      super()
      this.CambioFecha = this.CambioFecha.bind(this)
    }
  
    CambioFecha(evento1) {
      this.props.onDateChange(evento1)
    }
  
    render() {
      let date = `${this.props.date.getFullYear()}-${String(this.props.date.getMonth() + 1).padStart(2,0)}-${String(this.props.date.getDate()).padStart(2,0)}`
      return (
        <div className="field">
          <div className="control has-icons-left">
            <input className="input" type="date" onChange={ this.CambioFecha } value={ date } name={ this.props.name } />
            <span className="icon is-small is-left">
              <i className={ `fas fa-${this.props.icon}` }></i>
            </span>
          </div>
        </div>
      )
    }
  }

  //Componente para el manejo de opciones en cada uno de los filtros
  class Opciones extends React.Component {
    constructor() {
      super()
      this.ManejoOpciones = this.ManejoOpciones.bind(this)
    }
  
    ManejoOpciones(evento2) {
      this.props.onOptionChange(evento2)
    }
  
    render() {
      return (
        <div className="field">
          <div className="control has-icons-left">
            <div className="select" style={ {width: '100%'} }>
              <select onChange={ this.ManejoOpciones }
                      value={ this.props.selected } 
                      style={ {width: '100%'} } 
                      name={ this.props.name }>
                { this.props.options.map((option) => 
                <option value={ option.value || '' } key={ option.value }>{ option.name }</option> ) 
                }
              </select>
            </div>
            <div className="icon is-small is-left">
              <i className={ `fas fa-${this.props.icon}` }></i>
            </div>
          </div>
        </div>
      )
    }
  }

  //Componente encargado del manejo de filtros.
  class Filters extends React.Component {
    constructor() {
      super()
  
      this.CambioFecha = this.CambioFecha.bind(this)
      this.ManejoOpciones = this.ManejoOpciones.bind(this)
    }
  
    CambioFecha(evento3) {
      let CargaFecha = this.props.filters
      CargaFecha[evento3.target.name] = new Date(evento3.target.value)
      if (CargaFecha['dateFrom'].valueOf() >= CargaFecha['dateTo'].valueOf()) {
        CargaFecha['dateTo'] = new Date(CargaFecha['dateFrom'].valueOf() + 86400000)
      } else if (CargaFecha['dateTo'].valueOf() > CargaFecha['dateFrom'].valueOf() + 2592000000) {
        CargaFecha['dateTo'] = new Date(CargaFecha['dateFrom'].valueOf() + 2592000000)
      }
      this.props.onFilterChange(CargaFecha)
    }
  
    ManejoOpciones(evento4) {
      let CargaOpciones = this.props.filters
      CargaOpciones[evento4.target.name] = evento4.target.value
  
      this.props.onFilterChange(CargaOpciones)
    }
  
    render() {
      return (
        <nav className="navbar is-info" style={ {justifyContent: 'center'} }>
          <div className="navbar-item">
            <Calendario
              date={ this.props.filters.dateFrom}
              onDateChange={ this.CambioFecha }
              name="dateFrom"
              icon="sign-in-alt" />
          </div>
          <div className="navbar-item">
            <Calendario
              date={ this.props.filters.dateTo }
              onDateChange={ this.CambioFecha }
              name="dateTo"
              icon="sign-out-alt" />
          </div>
          <div className="navbar-item">
            <Opciones
              onOptionChange={ this.ManejoOpciones }
              options={ [ {value: undefined, name: 'Todos los países'}, {value: 'Argentina', name: 'Argentina'}, {value: 'Brasil', name: 'Brasil'}, {value: 'Chile', name: 'Chile'}, {value: 'Uruguay', name: 'Uruguay'} ] }
              selected={ this.props.filters.country }
              name="country"
              icon="globe" />
          </div>
          <div className="navbar-item">
            <Opciones
              onOptionChange={ this.ManejoOpciones }
              options={ [ {value: undefined, name: 'Cualquier precio'}, {value: 1, name: '$'}, {value: 2, name: '$$'}, {value: 3, name: '$$$'}, {value: 4, name: '$$$$'} ] }
              selected={ this.props.filters.price }
              name="price"
              icon="dollar-sign" />
          </div>
          <div className="navbar-item">
            <Opciones
              onOptionChange={ this.ManejoOpciones }
              options={ [ {value: undefined, name: 'Cualquier tamaño'}, {value: 10, name: 'Hotel pequeño'}, {value: 20, name: 'Hotel mediano'}, {value: 30, name: 'Hotel grande'} ] }
              selected={ this.props.filters.rooms }
              name="rooms"
              icon="bed" />
          </div>
        </nav>
      )
    }
  }