// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/*const example = () => {
  return 'example';
};

window.example = example;*/


// FUNCION QUE ORDENA 
  let ordenar = (data,propiedad,orden) => {
    let resultado = {};
    if(orden === "ascendente" || orden === "numAscendente") {
    resultado = data.sort((a,b) => (a[propiedad] > b[propiedad] ? 1 : -1));
    } 
    else if(orden === "descendente" || orden === "numDescendente") {
    resultado = data.sort ((a,b) => (a[propiedad] > b[propiedad] ? -1 : 1));
    }
    return resultado;
}

//Funcion que filtra por tipo
let filterByType = (data,condicion) => {
  let filtro = data.filter(pokemon => {
    for( let i = 0; i < pokemon.type.length; i++){
      if (pokemon.type[i] === condicion){
        return true;
      }
    }
    return false;
  });
  return filtro;
}

//Funcion que filtra por debilidad

let filterByWeaknesses = (data,condicion) => {
  let filtro = data.filter(pokemon => {
    return pokemon.weaknesses.find((arr) => arr === condicion);
      })
      return filtro;
    }      

//Funcion que calcula las estadisticas
let estadistica = (data,propiedad) => {
  //el mas pesado y el mas alto
  if(propiedad === "weight" || propiedad === "height"){
    let result = data.sort((a,b) => (a[propiedad] > b[propiedad] ? -1 : 1));
    return result[0];
  }
  //promedio de candy_count para evolucionar
  else if(propiedad === "candy_count"){
    
       let result = data.reduce((total,item)=>{
         //console.log(total)
         //console.log(item)
         //console.log(propiedad)
         //console.log(item[propiedad]);
         if (data.hasOwnProperty(item.candy_count)){
          return total + item.candy_count;
         }
          return  total + 0;
        },0)
        return (result/151);
        
      
    }
  } 


window.ordenar= ordenar;
window.filterByType = filterByType;
window.filterByWeaknesses = filterByWeaknesses;
window.estadistica = estadistica;