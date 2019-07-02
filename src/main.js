//llamar section donde se imprime la data
let mostrar = document.getElementById('lista')
// funcion que imprime toda la data en la section1
let imprimir = () =>{
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