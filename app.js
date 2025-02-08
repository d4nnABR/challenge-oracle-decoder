// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.



let amigos = [];

function actulizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (let amigo of amigos) {
        let listaDeAmigos = document.createElement('li');
        listaDeAmigos.textContent = amigo;
        lista.appendChild(listaDeAmigos);
    }
}


function asignarTextoNombres (elemento, lista) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = lista;
    return;
}

function agregarAmigo() {
    let friends = document.getElementById('amigo').value;
    if (friends.trim() === "") {
        alert('Por favor, escribe un nombre valido');
        return;
    }
    amigos.push(friends);
    actulizarLista();
    console.log(amigos);
}

function sortearAmigo() {
    let friends = document.getElementById('sorteo').value;
    if (amigos.length <=  0) {
        alert('Por favor, ingresa nombres antes de sortear');
        return;
    }
    let indiceAleatorio = Math.floor(Math.random()* amigos.length);
    asignarTextoNombres('nombreSorteado', `${amigos[indiceAleatorio]}`);
    console.log(amigos[indiceAleatorio]);
    return;
}