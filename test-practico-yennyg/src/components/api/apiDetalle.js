
import React from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import Detalle from '../detalle/detalleProducto';

let itemProducto = {
  isLoading: true,
};
let itemProductoDesc;
let itemProductoRespuesta;

function transformData(producto, description) {
  itemProductoRespuesta = {
      author: { 
          name: "Yenny",
          lastname: "Garavito"
      },
      item: {
          id: producto.catalog_product_id,
          title:  producto.title,
          price: {
              currency: producto.currency_id,
              amount: producto.price,
              decimals: 0,
          },
        picture: producto.thumbnail,
        condition: producto.condition,
        free_shipping: producto.shipping,
        sold_quantity: producto.sold_quantity,
        description: description
      }
  };
}

async function traerProductoData(idItem) {
  const apiUrlGeneralItem = 'https://api.mercadolibre.com/items/' + idItem;
  await axios.get(apiUrlGeneralItem)
    .then((data) => (
      itemProducto = {
          producto: data.data,
          productoDescription: '',
          isLoading: false,
        }
    ));
}

async function traerProductoDesc(idItem) {
  const apiUrlGeneralItemDesc = 'https://api.mercadolibre.com/items/' + idItem + '/description';
  await axios.get(apiUrlGeneralItemDesc)
    .then((data) => (
      itemProductoDesc = data.data.plain_text)
    );
}


function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}

class ApiDetalle extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      productos : [{}],
      isLoading: true
    }
  }

  componentDidMount() {
    let { id } = this.props.params;
    traerProductoData(id);
    traerProductoDesc(id);
    setTimeout(() => {
      transformData(itemProducto, itemProductoDesc);
      this.setState({isLoading: false});
    }, 200);
  }

  render() {
    if (this.state.isLoading === false) {
      return(
        <Detalle producto={itemProducto} descripcion={itemProductoDesc}></Detalle>
      )
    }
  }
}

export default withParams(ApiDetalle);