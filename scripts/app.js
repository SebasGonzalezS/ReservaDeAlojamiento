class App extends React.Component {
  constructor() {
    super()

    this.state = {
      filters: {
        dateFrom: today,
        dateTo: new Date(today.valueOf() + 86400000),
        country: undefined,
        price: undefined,
        rooms: undefined
      },
      hotels: hotelsData
    }

    this.CambioFiltro = this.CambioFiltro.bind(this)
  }

  CambioFiltro(carga) {
    this.setState({
      filters: carga
    })
  }

  render() {
    const hotels = this.state.hotels.filter(hotel => 
      this.state.filters.dateFrom <= hotel.availabilityFrom && 
      this.state.filters.dateTo <= hotel.availabilityTo && 
      (this.state.filters.country ? hotel.country === 
      this.state.filters.country : true) && 
      (this.state.filters.price ? hotel.price <= this.state.filters.price : true) && 
      (this.state.filters.rooms ? hotel.rooms <= this.state.filters.rooms : true) 
    )

    return (
      <div>
        <Encabezado filters={ this.state.filters } />
        <Filters filters={ this.state.filters } onFilterChange={ this.CambioFiltro } />
        <Hotels>{ hotels }</Hotels>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
