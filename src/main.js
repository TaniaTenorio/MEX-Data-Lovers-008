
let data = window.POKEMON.pokemon;
let labelOrdenar = document.getElementById("ordenar-por");
let pantallaPrincipal = document.getElementById("pantalla-principal");
let mostrar = document.getElementById('pantalla-principal');
let ordenarPor = document.getElementById("ordenar");
let imprimirOrden = document.getElementById("lista-ordenada");
let pantallaOrdenada = document.getElementById("pantalla-ordenada");
let botonCuriosidades = document.getElementById("boton-curiosidades");
let botonBuscar = document.getElementById("boton-buscar");
let botonRegresar = document.getElementById("boton-regresar");
let botonInfo = document.getElementById("boton-info");
let pantallaCuriosidades = document.getElementById("pantalla-curiosidades");
let pantallaBuscar = document.getElementById("pantalla-buscar");
let pantallaInfo = document.getElementById("pantalla-info");
let botonBuscarTipos=document.getElementById("tipo-pokemon");
let botonBuscarDebilidad=document.getElementById("debilidad-pokemon");
let botonBuscarNombre = document.getElementById('buscar-nombre');
let inputNombre = document.getElementById('nombre-pokemon');
let pantallaResultNombre = document.getElementById("pantalla-result-busqueda-nombre");
let imprimirBusqueda = document.getElementById('result-busqueda-nombre');
let pantallaTipos=document.getElementById("pantalla-iconos-tipos");
let pantallaPrintTipo = document.getElementById("pantalla-resultado-tipo");
let resultadoBuscarTipo = document.getElementById("busqueda-por-tipo"); 
let tipo = document.getElementsByClassName("iconos");
let pantallaDebilidad = document.getElementById("pantalla-iconos-debilidad");
let debilidad = document.getElementsByClassName("iconos-debilidad");
let pantallaPrintDebilidad = document.getElementById("pantalla-resultado-debilidad");
let resultadoBuscarDebilidad = document.getElementById("busqueda-por-debilidad");


// funcion que imprime toda la data en la section1
let imprimir = () =>{
    //llamar section donde se imprime la data
    mostrar.innerHTML = '';
    let template='';
  for(let pokemon of data){
    //mostrar.innerHTML += `<ul><li>
    template +=`<li>
    <img src="${pokemon.img}">
    <p><strong>No.</strong>${pokemon.num}</p>
    <p><strong>Nombre:</strong> ${pokemon.name}</p>
    </li>`;
  }
mostrar.innerHTML=`<ul>${template}</ul>`;
};
imprimir();

//Función que filtra la data ordenada
const printordenar = () => {

  let ordenarData = ordenarPor.value;
  let propiedad= "";
  let str = "";
  if(ordenarData === "ascendente" || ordenarData === "descendente"){
    propiedad = "name";
  }
  else {
    propiedad = "num";
  }
  const resultado = window.pokemon.ordenar(data,propiedad,ordenarData);
  
  //usar la funcion que imprime la data ****** PENDIENTE
  resultado.forEach(element => {
      str += `<li>
      <img src="${element.img}">
      <p><strong>No.</strong> ${element.num}</p>
      <p><strong>Nombre:</strong> ${element.name}</p>
      </li> `;
  });
imprimirOrden.innerHTML=str;
pantallaOrdenada.style.display="block";
pantallaPrincipal.style.display="none";
};
ordenarPor.addEventListener("change", printordenar);

//funcion que busca por nombre del pokemon
let buscarNombre = () => {
  
  let texto= inputNombre.value.toLowerCase();
  for(let pokemon of data){
        let nombre = pokemon.name.toLowerCase();
        if(nombre.indexOf(texto) !== -1){
            imprimirBusqueda.innerHTML = `<li>
            <img src="${pokemon.img}">
            <p><strong>No.</strong> ${pokemon.num}</p>
            <p><strong>Nombre:</strong> ${pokemon.name}</p>
            <p><strong>Tipo:</strong> ${pokemon.type}</p>
            <p><strong>Debilidad:</strong> ${pokemon.weaknesses}</p>
            <p><strong>Sig. Evolución:</strong> ${pokemon.next_evolution}</p>
            </li>`;
        }
    }
    pantallaBuscar.style.display = "none";
    pantallaResultNombre.style.display = "block";
};
botonBuscarNombre.addEventListener('click',buscarNombre);

//Funcion que muestra los tipos de Pokemon
//boton que se va a la lista de Tipos
const tipos = () =>{
  pantallaTipos.style.display="block";
  pantallaBuscar.style.display = "none";
};
botonBuscarTipos.addEventListener("click",tipos);

//Funcion que imprime la data por tipo
//recorre los elementos de la misma clase y asigana el evento click
  for(let i=0; i<tipo.length; i++){

    tipo[i].addEventListener("click", (e) => {
      if (!e) e= window.event;
      let str = " ";
      let resultado= " ";
      let condicion = e.target.id;
      //llama a la funcion Filtrar
      resultado = window.pokemon.filterByType(data,condicion);
      //Imprime el resltado de la funcion Filtrar
      resultado.forEach(element => {
        str += `<li>
        <img src="${element.img}">
        <p><strong>No.</strong> ${element.num}</p>
        <p><strong>Nombre:</strong> ${element.name}</p>
        </li> `;
    });
    resultadoBuscarTipo.innerHTML = str; 
      //Oculta la pantalla Tipos
      pantallaTipos.style.display = "none";
      pantallaPrintTipo.style.display= "block";
  });
  }
  //recorre los elementos de la misma clase y asigna el evento click
  for(let i=0; i<debilidad.length; i++){
    
    debilidad[i].addEventListener("click",(e) => {
      if (!e) e= window.event;
      let str = " ";
      let resultado= " ";
      let condicion = e.target.id;
      //llama a la funcion Filtrar por Debilidad
      resultado = window.pokemon.filterByWeaknesses(data,condicion);
      //Imprime el resultado de la funcion
      resultado.forEach(element => {
        str += `<li>
        <img src="${element.img}">
        <p><strong>No.</strong> ${element.num}</p>
        <p><strong>Nombre:</strong> ${element.name}</p>
        </li> `;
    });
      resultadoBuscarDebilidad.innerHTML = str; 
      //Oculta la pantalla Tipos
      pantallaDebilidad.style.display = "none";
      pantallaPrintDebilidad.style.display= "block";
  });
  }
//Funcion que imprime la estadistica
let respuesta = document.getElementsByClassName("estadistica");
for(let i=0; i<respuesta.length; i++){

respuesta[i].addEventListener("click",(e) => {
  if (!e) e= window.event;
  let condicion = e.target.id;
  //llama a la funcion Filtrar por Debilidad
  let dato = window.pokemon.estadistica(data,condicion); 
  console.log(dato);
});
}
  //Función que muestra pantalla de debilidades y oculta pantalla de búsqueda
  const muestraDebilidades = () =>{
    pantallaTipos.style.display="none";
    pantallaBuscar.style.display = "none";
    pantallaDebilidad.style.display ="block";
  };

  botonBuscarDebilidad.addEventListener("click",muestraDebilidades); 
  //Boton "Buscar" que aparece seccion de buscar y desaparece pantalla principal
  let myFunction = () => {
    pantallaBuscar.style.display = "block";
    labelOrdenar.style.display = "none";
    pantallaPrincipal.style.display = "none";
    pantallaResultNombre.style.display = "none";
    pantallaTipos.style.display = "none";
    pantallaPrintTipo.style.display = "none";
    pantallaDebilidad.style.display="none";
    pantallaPrintDebilidad.style.display = "none";
    pantallaOrdenada.style.display="none";
    pantallaInfo.style.display="none";
    pantallaCuriosidades.style.display = "none";
  };
  botonBuscar.addEventListener("click",myFunction);

  let curiosidades = () => {
      pantallaCuriosidades.style.display = "block";
      pantallaPrincipal.style.display = "none";
      labelOrdenar.style.display = "none";
      pantallaOrdenada.style.display = "none";
      pantallaPrintDebilidad.style.display = "none";
      pantallaPrintTipo.style.display = "none";
      pantallaResultNombre.style.display = "none";
      pantallaTipos.style.display = "none";
      pantallaResultNombre.style.display = "none";
      pantallaBuscar.style.display = "none";
      pantallaInfo.style.display = "none";
      pantallaDebilidad.style.display = "none";
  };
  botonCuriosidades.addEventListener ("click", curiosidades);
  
  let infoFunction = () => {
      pantallaInfo.style.display ="block";
      pantallaPrincipal.style.display="none";
      pantallaOrdenada.style.display = "none";
      botonInfo.style.display ="none";
      botonRegresar.style.display = "block";
      labelOrdenar.style.display = "none";
      pantallaCuriosidades.style.display = "none";
  };
  botonInfo.addEventListener("click", infoFunction);

  let regresar = () => {
      pantallaPrincipal.style.display = "block";
      labelOrdenar.style.display = "block";
      pantallaOrdenada.style.display = "none";
      pantallaPrintDebilidad.style.display = "none";
      pantallaPrintTipo.style.display = "none";
      pantallaResultNombre.style.display = "none";
      pantallaTipos.style.display = "none";
      pantallaResultNombre.style.display = "none";
      pantallaBuscar.style.display = "none";
      pantallaInfo.style.display = "none";
      pantallaDebilidad.style.display = "none";
      pantallaCuriosidades.style.display = "none";
  };
  botonRegresar.addEventListener("click", regresar);

  
  


    
  
  


