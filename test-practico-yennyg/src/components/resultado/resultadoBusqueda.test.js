import { render, screen, shallow } from '@testing-library/react';
import React from 'react';

import ResultadoBusqueda from './resultadoBusqueda';

const items = [{
        id: '1',
        img: 'url/img',
        price: '72500',
        title: "Anteojos de sol Hawkers ",
        categoria: 'Ropa y Accesorios',
        condition: "nuevo",
        descripcion: "DESCRPCION"
        },{
        id: '2',
        picture: 'url/img',
        price: '72500',
        title: "Anteojos de sol Hawkers otros ",
        categoria: 'Ropa y Accesorios',
        condition: "nuevo",
        descripcion: "DESCRPCION"
    }];

jest.mock("./resultadoBusqueda");

describe('Test de resultado busqueda', () => {
    it('Render inicial', () => {
        const { getByText } = render(<ResultadoBusqueda productos={items}/>);
        const elem = getByText('Ciudad');
        expect(elem.innerHTML).toBeDefined();
    })
});