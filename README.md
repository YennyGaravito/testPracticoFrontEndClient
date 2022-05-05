# testPracticoFrontEndClient
Repositorio cliente del test practico frontend para Mercado Libre Mayo de 2022

## Stack Tecnologico Usado
* React
* HTML
* SASS

## Generalidades del projecto
Ruta de codigo Source:
https://github.com/YennyGaravito/testPracticoFrontEndClient/tree/main/test-practico-yennyg

## Descripcion desarrollo
Se realiza una funcionalidad de busqueda basica

### Vistas:

* Caja de Búsqueda( “/” ) : Si se digita la palabra el api navega a los resultados de la busqueda mostrando los 4 primeros resultados. Si da click en el elemento del listado de resultados, la api navega directamente al detalle del producto.
* Resultados de la búsqueda (“/items/search/:search” ) : Busca en el endpoint de mercado libre el valor que es digitado en la URL. En la vista se presenta un listado con los primeros 4 productos que se recibieron en el resultado.
* Detalle del producto (“/items/:id”): Busca en el endpoint de mercado libre el id del item digitado por URL. En la vista se presenta el detalle del producto correspondiente al ID.

La vista principal es Caja de Busqueda.
Las otras dos vistas son navegables independiente o por continuidad de acciones de la api.


### Notas Adicionales:

* Primer desarrollo en react. He trabajo solo con Angular en typescript y es la primera vez que realizo un proyecto en React.
* Por tiempo quedaron pendientes algunos detalles, sin embargo se dio prioridad a la funcionalidad y manejo de vistas. 
* El diseño en general hace uso de clases tipo BEM, una clase por cada elemento dentro de la pagina. Sin embargo por tiempo no se pulieron los estilos.
* El manejo de objetos de respuesta y formato de Data, por ser una libreria que nunca habia usado, quedo pendiente la forma de retornarlo hacia un llamado; de todas formas, se incluyo en un archivo independiente para interaccion con la api de manera funcional.
* Gracias por Leer y siempre hay cosas por mejorar.
