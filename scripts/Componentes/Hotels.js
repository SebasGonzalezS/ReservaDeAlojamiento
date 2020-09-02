    //Componente encargado de las fichas de cada alojamiento.
    const Hotel = (hotel) => {
        return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={hotel.children.photo} alt={hotel.children.name} />
                </figure>
            </div>
        <div className="card-content">
          <p className="title is-4">{hotel.children.name}</p>
          <p>{hotel.children.description}</p>
            <div className="field is-grouped is-grouped-multiline" style={{marginTop: '1em'}}>
                <Data icon="map-marker">{ `${hotel.children.city}, ${hotel.children.country}` }</Data>
                <Data icon="bed">{ `${hotel.children.rooms} Habitaciones` }</Data>
                <Precio count={hotel.children.price} />
            </div>
        </div>
        <div className="card-footer">
          <a className="card-footer-item has-background-success has-text-white has-text-weight-bold">Reservar</a>
        </div>
      </div>
    )
  }

    //componente encargado de mostrar la ciudad y el país que se encuentran en la data.
    const Data = (data) => {
        return (
        <div className="control">
            <div className="tags has-addons">
                <span className="tag is-medium is-info"><i className={ `fas fa-${data.icon}` }></i></span>
                <span className="tag is-medium">{data.children}</span>
            </div>
        </div>
    )
  }

  //componente encargado de mostrar el precio dentro de la ficha de alojamiento.
  const Precio = (precio) => {
    let icons = []
    for (var i = 0; i < 4; i++) {
      var style = {margin: '0 .125em'}
      if (i >= precio.count) {
        style.opacity = '0.25'
      }
      icons.push(<i className="fas fa-dollar-sign" style={style} key={i}></i>)
    }
  
    return (
      <div className="control">
        <div className="tags">
          <span className="tag is-medium is-info">{ icons }</span>
        </div>
      </div>
    )
  }
  
  //componente para mostrar unicamente los alojamientos solicitados.
  const Hotels = (hoteles) => {
    return (
      <section className="section" style={ {marginTop: '3em'} }>
        <div className="container">
          <div className="columns is-multiline">
            { hoteles.children.length ? hoteles.children.map((hotel) => (
                <div className="column is-one-third" key={ hotel.slug }>
                  <Hotel>{ hotel }</Hotel>
                </div>
              )) : (
                <article className="message is-warning">
                  <div className="message-body">
                    No se encuentran hoteles con las opciones seleccionadas.
                  </div>
                </article>
              )
            }
          </div>
        </div>
      </section>
    )
  }
  