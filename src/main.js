
let data = POKEMON.pokemon;
//llamar section donde se imprime la data
let mostrar = document.getElementById('lista');
let boton = document.getElementById('buscar-nombre');
let inputNombre = document.getElementById('nombre-pokemon');
let imprimirBusqueda = document.getElementById('result-busqueda-nombre');
let ordenarPor = document.getElementById('ordenar');
let botonBuscarTipos=document.getElementById("tipo-pokemon");
let botonBuscarDebilidad=document.getElementById("debilidad-pokemon");
let pantallaTipos=document.getElementById("pantalla-iconos-tipos");
let pantallaBuscar = document.getElementById("pantalla-buscar");
let pantallaPrintOrden = document.getElementById("pantalla-lista-ordenada");
let imprimirOrden = document.getElementById("lista-ordenada");



// funcion que imprime la data en la section1
      let imprimir = () =>{
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
                  <p><strong>Debilidad:</strong> ${pokemon.weaknesses}</p></li>`;
                  let sigEvol = pokemon["next_evolution"];
                  let properties = Object.keys(sigEvol);
                  console.log(properties);
                  `<p><strong>Sig. Evolución:</strong> ${pokemon.next_evolution.name}</p>`;                 
              }
          }

      };

boton.addEventListener('click',buscarNombre);

//Función que Imprime la Data Ordenada

const printordenar = () => {
  
  let ordenarData = ordenarPor.value;
  let propiedad = " ";
  let str = " ";
  if(ordenarData === "ascendente" || ordenarData === "descendente"){
    propiedad = "name";
  }
  else {
    propiedad = "num";
  }
  //Llama la funcion pura Ordenar
  const resultado = window.ordenar(data,propiedad,ordenarData);
  //Imprime la data ordenada
  resultado.forEach(element => {
      str += `<li>
      <img src="${element.img}">
      <p><strong>Numero:</strong>${element.num}</p>
      <p><strong>Nombre:</strong> ${element.name}</p>
      </li> `;
  });
  imprimirOrden.innerHTML=str;
  pantallaPrintOrden.style.display = "block";
  mostrar.style.display = "none";

};
ordenarPor.addEventListener("change", printordenar);

//Funcion que oculta pantalla buscar y muestra busqueda por tipos
const tipos = () =>{
  pantallaTipos.style.display="block";
  pantallaBuscar.style.display = "none";
};
//boton que se va a la lista de Tipos
botonBuscarTipos.addEventListener("click",tipos);

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
      resultado = window.filterByType(data,condicion);
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

  //Funcion que muestra pantalla debilidades y oculta pantalla de busqueda
  const muestraDebilidades = () =>{
    pantallaDebilidades.style.display="block";
    pantallaBuscar.style.display = "none";
  };

  botonBuscarDebilidad.addEventListener("click",muestraDebilidades); 

  //Funcion que imprime la Data por Debilidad
  let pantallaDebilidades=document.getElementById("pantalla-iconos-debilidades");
  let debilidad = document.getElementsByClassName("iconos-debilidad");
  let pantallaPrintDebilidad = document.getElementById("busqueda-por-debilidad");
  

  //recorre los elementos de la misma clase y asigna el evento click
  for(let i=0; i<debilidad.length; i++){
    
    debilidad[i].addEventListener("click", printweaknesses = (e) => {
      if (!e) e= window.event;
      let str = " ";
      let resultado= " ";
      let condicion = e.target.id;
      //llama a la funcion Filtrar por Debilidad
      resultado = window.filterByWeaknesses(data,condicion);
      //Imprime el resultado de la funcion
      resultado.forEach(element => {
        str += `<li>
        <img src="${element.img}">
        <p><strong>Numero:</strong>${element.num}</p>
        <p><strong>Nombre:</strong> ${element.name}</p>
        </li> `;
    });
      pantallaPrintDebilidad.innerHTML = str; 
      //Oculta la pantalla Tipos
      pantallaDebilidades.style.display = "none";
      pantallaPrintDebilidad.style.display= "block";
  });
  }


  //Boton de prueba que aparece seccion de buscar y desaparece pantalla principal
  let botonPrueba = document.getElementById("prueba");
  
  let myFunction = () => {
    pantallaBuscar.style.display = "block";
    mostrar.style.display = "none";
    pantallaTipos.style.display = "none";
    pantallaPrintTipo.style.display = "none";
    pantallaPrintOrden.style.display = "none";
    pantallaDebilidades.style.display = "none";
    pantallaPrintDebilidad.style.display = "none";
  };
  botonPrueba.addEventListener("click",myFunction);

  
  


    
  
  


