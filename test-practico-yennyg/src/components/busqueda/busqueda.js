import React, { Component } from 'react';
import "../styles/busqueda.css";
import buscador from '../../img/busqueda.png';
import { Link } from 'react-router-dom';

export default class Busqueda extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '', redirect: false};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ value: this.state.value, redirect: true })
  };

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
  const { redirect } = this.state;

  if (redirect) {
    return <redirect to={'/api/items/search/' + this.state.value}/>;
  }
  return(
      <div className="busq-bar">
          <div className="busq-container">
              <img
                  src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.18.9/mercadolibre/logo__small.png"
                  alt="Mercado Libre"
                  className="busq-logo"
              />
              <form className="busq-form" onSubmit={this.handleSubmit}>
                  <input 
                      type="text" 
                      className="busq-input"
                      name="buscarInput"
                      id="buscarInput"
                      placeholder="Nunca dejes de buscar" 
                      maxLength="120"
                      autoCorrect="off"
                      autoComplete="off"
                      value={this.state.value} onChange={this.handleChange}
                      >
                  </input>
                  
                <Link to={"/api/items/search/" + this.state.value}>
                  <button type="submit" className="busq-search-btn">
                        <img src={buscador}
                            alt="Buscar en Mercado Libre"
                            className="busq-search-img"
                        ></img>
                  </button>
                </Link>
              </form>
          </div>
      </div>
  )}
}
