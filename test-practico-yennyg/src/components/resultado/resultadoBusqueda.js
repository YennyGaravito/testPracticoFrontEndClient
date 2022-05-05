import React from 'react';
import Busqueda from '../busqueda/busqueda';
import "../styles/resultadoBusqueda.css";
import { Link } from 'react-router-dom';

class ItemLista extends React.Component {
  render() {
    return(
      <div className="busq-list-item" id={this.props.producto.id} >
         <Link to={"/api/items/" + this.props.producto.id}>
          <img
              className="busq-list-item__img"
              src={this.props.producto.picture}
              alt={this.props.producto.title}
          />
          </Link>
          <div className="busq-list-item__caract">
              <span className="busq-list-item__caract-price">
                  $ {this.props.producto.price.amount}
              </span>
              <div><br /></div>
              {this.props.producto.title}
              <br />
              {this.props.producto.categoria}
              <br />
              {this.props.producto.condition}
          </div>
          <div className="busq-list-item__ciudad">
              Ciudad
          </div>
      </div>
    );
  }
}

class ResultadoBusqueda extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='busq-resultado'>
      {
        <Busqueda></Busqueda>
      }
        <div className="busq-resultado-container">
            <nav>
                <ol className="breadcrumb">
                    <li className="breadcrumb__item"> 
                        {this.props.productos[0].title}</li>
                </ol>
            </nav>
            <div className="busq-resultado-list">
                {this.props.productos.map(prod => {
                    return(
                        <ItemLista producto={prod} />
                    );
                  })
                }
            </div>
        </div>
      </div>
    );
  }
}

export default ResultadoBusqueda;