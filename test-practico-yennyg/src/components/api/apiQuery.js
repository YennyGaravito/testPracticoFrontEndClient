import React from 'react';
import ResultadoBusqueda from '../resultado/resultadoBusqueda';
import axios from 'axios';
import { useParams } from "react-router-dom";

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
  }

class ApiQuery extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            productos : [{}],
            isLoading: true
        }
    }

    componentDidMount() {      
        let { search } = this.props.params;
        const apiUrl = 'https://api.mercadolibre.com/sites/MLA/search?q=' + search;
        axios.get(apiUrl)
        .then(res => {
            this.state.productos = res.data.results;
            this.setState({
                productos: res.data.results,
                isLoading: false
            });
        });
    }


    transformData(productos) {
        let prodVistaArray = [];
        let categoriesArray = [];
        productos.map(prod => {
            if(prodVistaArray.length < 4) {
                prodVistaArray.push({
                    id: prod.id,
                    title: prod.title,
                    price: { 
                        currency: prod.currency_id,
                        amount: prod.price,
                        decimals: 0
                    },
                    picture: prod.thumbnail,
                    condition: prod.condition,
                    free_shipping: prod.shipping.free_shipping
                });
                categoriesArray.push(prod.category_id);
            }
        });
        const resultado = {
            queryResult: {
                author: {
                    name: "Yenny Carolina",
                    lastName: "Garavito"
                },
                categories: categoriesArray,
                items: prodVistaArray
            }
        };
        return resultado;
    }

    render() {
        if (this.state.isLoading === false) {
            return(
                    <div>
                        <div>
                            <ResultadoBusqueda productos={this.transformData(this.state.productos).queryResult.items}></ResultadoBusqueda>
                        </div>
                    </div>
            )
        }
    }
}

export default withParams(ApiQuery);