
// funcion que imprime toda la data en la section1
let imprimir = () =>{
    //llamar section donde se imprime la data
    let mostrar = document.getElementById('lista');
    mostrar.innerHTML = '';
    let template='';
  for(let pokemon of POKEMON.pokemon){
    //mostrar.innerHTML += `<ul><li>
    template +=`<li>
    <img src="${pokemon.img}">
    <p><strong>Numero:</strong>${pokemon.num}</p>
    <p><strong>Nombre:</strong> ${pokemon.name}</p>
    </li> `
  }
mostrar.innerHTML=`<ul>${template}</ul>`
};
imprimir();

//funcion que busca por nombre del pokemon
let boton = document.getElementById('buscar-nombre');
let inputNombre = document.getElementById('nombre-pokemon');
let imprimirBusqueda = document.getElementById('busqueda-nombre');

let buscarNombre = () => {
  
  let texto= inputNombre.value.toLowerCase();
  console.log(texto)
  for(let pokemon of POKEMON.pokemon){
        let nombre = pokemon.name.toLowerCase();
        if(nombre.indexOf(texto) !== -1){
            imprimirBusqueda.innerHTML = `<li>
            <img src="${pokemon.img}">
            <p><strong>Numero:</strong>${pokemon.num}</p>
            <p><strong>Nombre:</strong> ${pokemon.name}</p>
            </li>`;
        }
    }
        //console.log(Nombre);

};

boton.addEventListener('click',buscarNombre);

//Función ordenar ascendente
// let ordenarData = document.getElementById("ordenar").value;
let ascendente = document.getElementById("ascendente");
// let descendente = document.getElementById("descendente");

const printordenar = () => {
  let ordenarData = ascendente.value;
  let data= POKEMON.pokemon;
  let name= "name";
  const resultado =window.ordenar(data,name,ordenarData);
  //console.log(resultado);
};
ascendente.addEventListener("change", printordenar);
// descendente.addEventListener("c", printordenar);


//Ordenar por número, descendente
// const sortedByNumberDown = POKEMON.pokemon.sort((a,b) => (a.number > b.number ? 1 : -1));
//Ordenar por número ascendente
// const sortedByNumberUp = POKEMON.pokemon.sort((a,b) => (a.number > b.number ? -1 : 1));
//Ordenar de la A-Z
// const sortedByNameAz = POKEMON.pokemon.sort((a,b) => (a.name > b.name ? 1 : -1));
//Ordenar de la Z-A
// const sortedByNameZa = POKEMON.pokemon.sort ((a,b) => (a.name >b.name ? -1 : 1));
// console.log(sortedByNameAz)