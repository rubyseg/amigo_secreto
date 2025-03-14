// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaNombres = [];

function agregarAmigo(){
    let amigoNombre = document.getElementById("amigo").value;

    if(!amigoNombre){
        alert('Ingresa un nombre, por favor');
        return;
    }
    listaNombres.push(amigoNombre);
    limpiarCaja();
    mostrarLista();
    document.getElementById("amigo").focus();

}

function mostrarLista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < listaNombres.length; i++) {
        let item = document.createElement('li');
        item.textContent=listaNombres[i];
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    if(listaNombres.length < 3){
        alert('Ingresa al menos 3 nombres, por favor');
        return;
    }
    let amigoSorteado = listaNombres[Math.floor(Math.random()*listaNombres.length)];
    let resutado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo sorteado es ${amigoSorteado}`;
}

function limpiarCaja() {
    let valorCaja = document.getElementById("amigo").value= '';
}

function reiniciarSorteo(){
    limpiarCaja();
    document.getElementById("listaAmigos").innerHTML='';
    resultado.innerHTML='';
    listaNombres = [];
}