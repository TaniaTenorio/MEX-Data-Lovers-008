
let data = window.POKEMON.pokemon;
let google = window.google;
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

let botonRespuestaUno = document.getElementById("weight");
let botonRespuestaDos = document.getElementById("height");
let botonRespuestaTres = document.getElementById("candy_count");

let botonSiguiente = document.getElementById("siguiente-mas-alto");
let botonSiguientePromedio = document.getElementById("siguiente-promedio-candy");

let preguntaUno = document.getElementById("pregunta-uno");
let preguntaDos = document.getElementById("pregunta-dos");
let preguntaTres = document.getElementById("pregunta-tres");

let imprimirRespuestaUno = document.getElementById("respuesta-uno");
let imprimirRespuestaDos = document.getElementById("respuesta-dos");
let imprimirRespuestaTres = document.getElementById("respuesta-tres");
let imgCandy = document.getElementById("img-candy");


//Funcion especifica para Imprimir cualquier data
let imprimir= (data) => {
  let template='';
  for(let pokemon of data){
      //mostrar.innerHTML += `<ul><li>
      template +=`<li>
      <img src="${pokemon.img}">
      <p><strong>No.</strong>${pokemon.num}</p>
      <p><strong>Nombre:</strong> ${pokemon.name}</p>
      </li>`;
  }
  return template;
};

// funcion que imprime toda la data en la section1
let imprimirData = () =>{
    //llamar section donde se imprime la data
    mostrar.innerHTML = '';
    let template = imprimir(data);
    mostrar.innerHTML=`<ul>${template}</ul>`;
};
imprimirData();


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
  str = imprimir(resultado);
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
            <p><strong>No. </strong> ${pokemon.num}</p>
            <p><strong>Nombre: </strong> ${pokemon.name}</p>
            <p><strong>Tipo: </strong> ${pokemon.type}</p>
            <p><strong>Debilidad: </strong> ${pokemon.weaknesses}</p>`;
            if (data.hasOwnProperty(pokemon.next_evolution)){
            `<p><strong>Sig. Evolución:</strong> 
            <p><strong>No. </strong>${pokemon.next_evolution[0].num}</p>
            <p><strong>Nombre: </strong> ${pokemon.next_evolution[0].name}</p>
            </li>`;
            }
        }
    }
    pantallaBuscar.style.display = "none";
    pantallaResultNombre.style.display = "block";
    seccionEstadistica.style.display = "none";
};
botonBuscarNombre.addEventListener('click',buscarNombre);

//Funcion que muestra los tipos de Pokemon
//boton que se va a la lista de Tipos
const tipos = () =>{
  pantallaTipos.style.display="block";
  pantallaBuscar.style.display = "none";
  botonInfo.style.display = "none";
  botonRegresar.style.display = "block";
};
botonBuscarTipos.addEventListener("click",tipos);

//Funcion que imprime la data por tipo

let imprimeEstadistica = document.getElementById("resultado-estadistica");
let botonEstadistica = document.getElementById("muestra-estadistica-tipo");
//es la seccion que se debe ocultar y mostrar donde aparece la estadistica
let seccionEstadistica = document.getElementById("pantalla-estadistica"); 

//recorre los elementos de la misma clase y asigna el evento click
  for(let i=0; i<tipo.length; i++){   
    tipo[i].addEventListener("click",(e) => {
      if (!e) e= window.event;
      let str = " ";
      let resultado= " ";
      let condicion = e.target.id;
      //llama a la funcion Filtrar
      resultado = window.pokemon.filterByType(data,condicion);
      //Imprime el resultado de la funcion Filtrar
        str = imprimir(resultado);
        resultadoBuscarTipo.innerHTML = str; 

      //Calcula el porcentaje de Pkemon por tipo
      let porcentajeTipo = Math.round((resultado.length * 100) / 151);
      imprimeEstadistica.innerHTML = `<p>El porcentaje de Pokemon</p>
      <p>de tipo ${condicion} es ${porcentajeTipo} %</p>`;

      //aqui empieza el codigo para los graficos
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Tipo', 'Porcentaje'],
          [condicion, resultado.length],
          ['Otros', 151-resultado.length]
        ]);

        var options = {
          title: 'Porcentaje de Pokemon por Tipo'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }
      //Oculta la pantalla Tipos
      pantallaTipos.style.display = "none";
      //Imprime los pokemon por tipo
      pantallaPrintTipo.style.display= "block";
    });
  } 

  botonEstadistica.addEventListener("click",() => {
    seccionEstadistica.style.display = "block";
    pantallaPrintTipo.style.display= "none";
    //botonRegresar.style.display= "block";

  });



  let botonEstadisticaDebilidad = document.getElementById("muestra-estadistica-debilidad");
  //Funcion que imprime la data por debilidad
  //recorre los elementos de la misma clase y asigna el evento click
  for(let i=0; i<debilidad.length; i++){

    
    debilidad[i].addEventListener("click",(e) => {

      if (!e) e= window.event;
      let str = " ";
      let resultado= " ";
      let condicion = e.target.className;
      //llama a la funcion Filtrar por Debilidad
      resultado = window.pokemon.filterByWeaknesses(data,condicion);
      //Imprime el resultado de la funcion
      str = imprimir(resultado);
      resultadoBuscarDebilidad.innerHTML = str; 
      //Calcula el porcentaje
      let porcentajeTipo = Math.round((resultado.length * 100) / 151);
      imprimeEstadistica.innerHTML = `<p>El porcentaje de Pokemon</p>
      <p>debiles Contra ${condicion} es:
       ${porcentajeTipo} %</p>`;

       //aqui empieza el codigo para los graficos
      

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Debilidad', 'Porcentaje'],
          [condicion, resultado.length],
          ['Otros', 151-resultado.length]
        ]);

        var options = {
          title: 'Porcentaje de Pokemon debiles contra'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options);
      }
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);
      // Oculta la pantalla Tipos
      pantallaDebilidad.style.display = "none";
      pantallaPrintDebilidad.style.display= "block";
    });     
  }

  botonEstadisticaDebilidad.addEventListener("click",() => {
    seccionEstadistica.style.display = "block";
    pantallaPrintDebilidad.style.display= "none";

  });

  


//Funcion que imprime las curiosidades
let respuesta = document.getElementsByClassName("estadistica");
for(let i=0; i<respuesta.length; i++){

respuesta[i].addEventListener("click",(e) => {
  if (!e) e= window.event;
  let condicion = e.target.id;
  //llama a la funcion Filtrar por Debilidad

  let dato = window.pokemon.estadistica(data,condicion); 
  if(condicion === "weight"){
    imprimirRespuestaUno.innerHTML = `<li>
    <img src="${dato.img}">
    <p><strong>No.</strong> ${dato.num}</p>
    <p><strong>Nombre:</strong> ${dato.name}</p>
    <p><strong>Peso:</strong> ${dato.weight}</p>
    </li> `;
    imprimirRespuestaUno.style.display = "block";
    botonRespuestaUno.style.display = "none";
    }
  else if(condicion === "height"){
    imprimirRespuestaDos.innerHTML = `<li>
    <img src="${dato.img}">
    <p><strong>No.</strong> ${dato.num}</p>
    <p><strong>Nombre:</strong> ${dato.name}</p>
    <p><strong>Altura:</strong> ${dato.height}</p>
    </li> `;
    imprimirRespuestaDos.style.display = "block";
    botonRespuestaDos.style.display ="none";
    botonSiguiente.style.display = "none";
    botonSiguientePromedio.style.display = "block";
  }
  else if(condicion === "candy_count"){
    imprimirRespuestaTres.innerHTML = `${dato} Candy´s`;
    imprimirRespuestaTres.style.display = "block";
    imgCandy.style.display = "block";
    botonRespuestaTres.style.display = "none";
  }

});

  }

  //Función que muestra pantalla de debilidades y oculta pantalla de búsqueda
  const muestraDebilidades = () =>{
    pantallaTipos.style.display="none";
    pantallaBuscar.style.display = "none";
    pantallaDebilidad.style.display ="block";
    botonInfo.style.display = "none";
    botonRegresar.style.display = "block";
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
    seccionEstadistica.style.display = "none";
    botonInfo.style.display ="none";
    botonRegresar.style.display = "block";
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
      imprimirRespuestaUno.style.display = "none";
      botonRespuestaUno.style.display = "block";
      imprimirRespuestaDos.style.display = "none";
      preguntaDos.style.display = "none";
      botonRespuestaDos.style.display = "none";
      preguntaUno.style.display = "block";
      botonSiguientePromedio.style.display = "none";
      botonSiguiente.style.display = "block";
      imprimirRespuestaTres.style.display = "none";
      preguntaTres.style.display = "none";
      imprimirRespuestaTres.style.display = "none";
      imgCandy.style.display = "none";
      seccionEstadistica.style.display = "none";

  };
  botonCuriosidades.addEventListener ("click", curiosidades);

  let masAlto = () => {
    preguntaUno.style.display = "none";
    imprimirRespuestaUno.style.display = "none";
    preguntaDos.style.display= "block";
    botonRespuestaDos.style.display = "block";
    botonSiguientePromedio.style.display = "block";
    botonSiguiente.style.display = "none";
    botonRespuestaUno.style.display = "none";
  };
  botonSiguiente.addEventListener("click", masAlto);

  let promCandy = () => {
    preguntaDos.style.display= "none";
    imprimirRespuestaDos.style.display = "none";
    botonSiguiente.style.display ="none";
    botonSiguientePromedio.style.display = "none";
    preguntaTres.style.display = "block";
    botonRespuestaTres.style.display = "block";
    botonRespuestaDos.style.display = "none";

  };
  botonSiguientePromedio.addEventListener("click", promCandy);
  
  let infoFunction = () => {
      pantallaInfo.style.display ="block";
      pantallaPrincipal.style.display="none";
      pantallaOrdenada.style.display = "none";
      botonInfo.style.display ="none";
      botonRegresar.style.display = "block";
      labelOrdenar.style.display = "none";
      pantallaCuriosidades.style.display = "none";
      seccionEstadistica.style.display = "none";
      pantallaPrintDebilidad.style.display = "none";
  };
  botonInfo.addEventListener("click", infoFunction);

  let regresar = () => {
      pantallaPrincipal.style.display = "block";
      labelOrdenar.style.display = "block";
      botonInfo.style.display = "block";
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
      seccionEstadistica.style.display = "none";
      botonRegresar.style.display = "none";
      botonInfo.style.display = "block";
  };
  botonRegresar.addEventListener("click", regresar);