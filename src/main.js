
let data = POKEMON.pokemon;
let newData = [];
// funcion que imprime toda la data en la section1
let imprimir = () =>{
    //llamar section donde se imprime la data
    let mostrar = document.getElementById('lista');
    mostrar.innerHTML = '';
    let template='';
  for(let pokemon of data){
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
let imprimirBusqueda = document.getElementById('result-busqueda-nombre');

let buscarNombre = () => {
  
  let texto= inputNombre.value.toLowerCase();
  for(let pokemon of data){
        let nombre = pokemon.name.toLowerCase();
        if(nombre.indexOf(texto) !== -1){
            imprimirBusqueda.innerHTML = `<li>
            <img src="${pokemon.img}">
            <p><strong>No.:</strong>${pokemon.num}</p>
            <p><strong>Nombre:</strong> ${pokemon.name}</p>
            <p><strong>Tipo:</strong>${pokemon.type}</p>
            <p><strong>Debilidad:</strong> ${pokemon.weaknesses}</p>
            <p><strong>Sig. Evolución:</strong> ${pokemon.next_evolution}</p>
            </li>`;
        }
    }

};

boton.addEventListener('click',buscarNombre);

//Función que filtra la data ordenada
let ordenarPor = document.getElementById("ordenar");
let imprimirOrden = document.getElementById("lista-ordenada");

const printordenar = () => {

  let ordenarData = ordenarPor.value;
  let name= "";
  let str = "";
  if(ordenarData === ("ascendente" || "descencente")){
    name = "name";
  }
  else {
    name = "num";
  }
  const resultado = window.ordenar(data,name,ordenarData);
  
  //usar la funcion que imprime la data ****** PENDIENTE
  resultado.forEach(element => {
      str += `<li>
      <img src="${element.img}">
      <p><strong>Numero:</strong>${element.num}</p>
      <p><strong>Nombre:</strong> ${element.name}</p>
      </li> `;
  });
imprimirOrden.innerHTML=str;
};
ordenarPor.addEventListener("change", printordenar);



//Funcion que muestra los tipos de Pokemon
//boton que se va a la lista de Tipos
let botonBuscarTipos=document.getElementById("tipo-pokemon");
let botonBuscarDebilidad=document.getElementById("debilidad-pokemon");
let pantallaTipos=document.getElementById("pantalla-iconos-tipos");
let pantallaBuscar = document.getElementById("pantalla-buscar");
let pantallaPrincipal = document.getElementById("pantalla-principal");

const tipos = () =>{
  pantallaTipos.style.display="block";
  pantallaBuscar.style.display = "none";

  
};
botonBuscarTipos.addEventListener("click",tipos);
botonBuscarDebilidad.addEventListener("click",tipos);

//Funcion que imprime la data por tipo

let pantallaPrintTipo = document.getElementById("busqueda-por-tipo"); 
let tipo = document.getElementsByClassName("iconos");

//recorre los elementos de la misma clase y asigana el evento click
  for(let i=0; i<tipo.length; i++){
    
    tipo[i].addEventListener("click", printType = (e) => {
      if (!e) e= window.event;
      let str = " ";
      let resultado= " ";
      let condicion = e.target.id;
      //llama a la funcion Filtrar
      resultado = window.filtrar(data,condicion);
      //Imprime el resltado de la funcion Filtrar
      resultado.forEach(element => {
        str += `<li>
        <img src="${element.img}">
        <p><strong>Numero:</strong>${element.num}</p>
        <p><strong>Nombre:</strong> ${element.name}</p>
        </li> `;
    });
      pantallaPrintTipo.innerHTML = str; 
      //Oculta la pantalla Tipos
      pantallaTipos.style.display = "none";
      pantallaPrintTipo.style.display= "block";
  });
  }

  //Boton de prueba que aparece seccion de buscar y desaparece pantalla principal
  let botonPrueba = document.getElementById("prueba");
  let myFunction = () => {
    pantallaBuscar.style.display = "block";
    pantallaPrincipal.style.display = "none";
    pantallaTipos.style.display = "none";
    pantallaPrintTipo.style.display = "none";
  };
  botonPrueba.addEventListener("click",myFunction);

  //Funcion que oculta patalla buscar y muestra busqueda por tipos
  


    
  
  


