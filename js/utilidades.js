rutaImagenes = "recursos/imagenes/";

function crearNodo(TipoNodo) {
  nodo = document.createElement(TipoNodo);
  return nodo;
}

function crearNodoConTexto(tipoNodo, textoNodo) {
  nodo = crearNodo(tipoNodo);
  nodo.textContent = textoNodo;
  return nodo;
}

function crearNodoIamgen(NombreImagen, alt) {
  nodo = crearNodo("img");
  nodo.src = rutaImagenes + NombreImagen;
  nodo.alt = alt;
  return nodo;
}

function agregarNodoABody(nodo) {
  document.body.appendChild(nodo);
}

function agregarNodoAContenedor(nodo, contenedor) {
  return contenedor.appendChild(nodo);
}
