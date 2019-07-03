// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/*const example = () => {
  return 'example';
};

window.example = example;*/


//llama la data
//let data = POKEMON;


// const filter = () => {
//   return filter;
// }

let ordenar = (data,propiedad,orden) => {
  console.log(orden);
  let resultado = {};
  if(orden === "ascendente") {
  resultado = data.sort((a,b) => (a[propiedad] > b[propiedad] ? 1 : -1));
console.log(resultado);

} 
else if(orden === "descendente") {
  resultado = data.sort ((a,b) => (a[propiedad] > b[propiedad] ? -1 : 1));
}
else if(orden === "numAscendente"){
  resultado = data.sort((a,b) => (a[propiedad] > b[propiedad] ? 1 : -1));
}
else if (orden === "numDescendente"){
  resultado = data.sort((a,b) => (a[propiedad] > b[propiedad] ? -1 : 1));
}
else if(orden === "")
return resultado;

};

window.ordenar = ordenar;