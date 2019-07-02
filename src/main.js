
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
}
imprimir();

//funcion que busca por nombre del pokemon
let boton = document.getElementById('buscar-nombre');
let Nombre = document.getElementById('nombre-pokemon');
let imprimirBusqueda = document.getElementById('busqueda-nombre');

let buscarNombre = () => {
    
    let texto= Nombre.value.toLowerCase();
    for(let pokemon of POKEMON.pokemon){
        let nombre = pokemon.name.toLowerCase();
        if(nombre.indexOf(texto) !== -1){
            imprimirBusqueda.innerHTML += `<li>
            <img src="${pokemon.img}">
            <p><strong>Numero:</strong>${pokemon.num}</p>
            <p><strong>Nombre:</strong> ${pokemon.name}</p>
            </li>`
        }
    }
        //console.log(Nombre);

}

boton.addEventListener('click',buscarNombre);