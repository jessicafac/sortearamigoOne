//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let nomesSorteados = new Set();


function adicionarAmigo() {
    const nomeInput = document.getElementById('amigo');
    const nome = nomeInput.value.trim();

    if (nome === '') {
        alert('Por favor, insira um Amigo.');
        return;
    }

    amigos.push(nome);
    nomeInput.value = '';

    atualizarLista();
}

function atualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    amigos.forEach(nome => {
        const li = document.createElement('li');
        li.textContent = nome;
        listaAmigos.appendChild(li);
    });
}

function sortear() {
    if (amigos.length === 0) {
        alert('A lista de nomes está vazia. Adicione nomes antes de sortear.');
        return;
    }

    if (nomesSorteados.size === amigos.length) {
        alert('Todos os nomes já foram sorteados.');
        return;
    }

    let nomeSorteado;
    do {
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        nomeSorteado = amigos[indiceAleatorio];
    } while (nomesSorteados.has(nomeSorteado));

    nomesSorteados.add(nomeSorteado);
    atualizarListaSorteados();

    
    
}

function atualizarListaSorteados() {
    const listaSorteados = document.getElementById('sorteado');
    listaSorteados.innerHTML = '';


    nomesSorteados.forEach(nome => {
        const li = document.createElement('li');
        li.textContent = nome;
        listaSorteados.appendChild(li);
    });
}