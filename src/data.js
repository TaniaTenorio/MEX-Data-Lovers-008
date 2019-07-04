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


  // FUNCION QUE ORDENA 
  let ordenar = (data,propiedad,orden) => {
    let resultado = {};
    if(orden === "ascendente") {
    resultado = data.sort((a,b) => (a[propiedad] > b[propiedad] ? 1 : -1));
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
    return resultado;

}
  let filtrar = (data,condicion) => {
    let arrayData = [];
    let string=" ";
    for(let key in data ){
      const element = data[key];
      arrayData.push(element);
      string += arrayData.filter(arr => arr === condicion);
    }
      //string = arrayData.filter(arr => arr.type === condicion);
      console.log(string);
      return string;
    }
    

window.ordenar= ordenar;
window.filtrar = filtrar;