import React from 'react';
import Busqueda from '../busqueda/busqueda';
import "../styles/detalleProducto.css"


class ItemDetalle extends React.Component {
  render() {
    return(
        <div>
            <div className="detalle-producto-fila">
                    <div className="detalle-producto-column__img">
                        <img
                            className="detalle-item__img"
                            src={this.props.producto.thumbnail}
                            alt={this.props.producto.title}
                        />
                    </div>
                    <div className="detalle-producto-column__resumen">
                        {this.props.producto.condition}
                        <br />
                        <span className="detalle-item__titulo">
                            {this.props.producto.title}
                        </span>
                        <br />
                        <br />
                        <div className="detalle-item__price">
                            $ {this.props.producto.price}
                        </div>
                        <br />
                        <button className="detalle-item__button">
                            Comprar
                        </button>
                    </div>
                </div>
                <div className="detalle-producto-fila">
                    <div className="detalle-producto-column__descripcion">
                        <h4>Descripción del producto</h4>
                        <span className="detalle-item__descripcion">
                            {this.props.descrip}
                        </span>
                    </div>
                </div>
          </div>
      );
    }
  }

class Detalle extends React.Component {

  state = {
    isLoading: true,
    itemProducto: {}
  };

  constructor(props) {
    super(props);
  }
  
    render() {
        return (
          <div className='detalle-container'>
              {
                <Busqueda></Busqueda>
              }
              <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb__item"> 
                            {this.props.producto.producto.title}</li>
                    </ol>
                </nav>
              <div className="detalle-producto-container">
                    {
                          <ItemDetalle producto={this.props.producto.producto} descrip={this.props.producto.productoDescription} />
                    }
              </div>
          </div>
        );
    }
  }

  export default Detalle;