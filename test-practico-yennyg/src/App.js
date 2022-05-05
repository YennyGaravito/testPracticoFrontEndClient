import React from 'react';
import { Route, Routes } from "react-router-dom";
import Busqueda from './components/busqueda/busqueda';
import ApiQuery from './components/api/apiQuery';
import ApiDetalle from './components/api/apiDetalle';

export default function App() {
  return (
    <div>
      <Routes> 
        <Route exact path="/" element=
          {
            <Busqueda></Busqueda>
          }
        />
        <Route path="/items/:id" element=
          {
            <ApiDetalle></ApiDetalle>
          }
        />
        <Route exact path="/items/search/:search" element=
          {
            <ApiQuery></ApiQuery>
          }
        />
        <Route exact path="/api/items/:id" element=
          {
            <ApiDetalle></ApiDetalle>
          }
        />
        <Route path="/api/items/search/:search" element=
          {
            <ApiQuery></ApiQuery>
          }
        />
        <Route path="*" element=
          {
            <Busqueda></Busqueda>
          }
        />
      </Routes>
      <footer>
        <h5>Developed by YennyG</h5>
      </footer>
    </div>
  );
}
