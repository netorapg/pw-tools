const nomesElfosMasculinos = [
    'Aegbor', 'Beleglas', 'Celebthir', 'Elrandir', 'Felasuil', 'Galbor', 'Thalion'
];

const nomesElfosFemininos = [
    'Fanuilos', 'Gilraen', 'Melianor', 'Morwenel', 'Saeluin'
];

const nomesOrcsMasculinos = [
    'Grulosh', 'Durgrom', 'Gorom', 'Thrakosh', 'Bolom'
];

const nomesOrcsFemininos = [
    'Graga', 'Groshka', 'Urga'
];

const nomesAnoes = [
    'Gimli', 'Thorin', 'Durin', 'Gloin', 'Balin', 'Kili', 'Fili'
];

function gerarNomeElfo() {
    const genero = Math.random() < 0.5 ? 'masculino' : 'feminino';
    if (genero === 'masculino') {
        const indice = Math.floor(Math.random() * nomesElfosMasculinos.length);
        return nomesElfosMasculinos[indice];
    } else {
        const indice = Math.floor(Math.random() * nomesElfosFemininos.length);
        return nomesElfosFemininos[indice];
    }
}

function gerarNomeOrc() {
    const genero = Math.random() < 0.5 ? 'masculino' : 'feminino';
    if (genero === 'masculino') {
        const indice = Math.floor(Math.random() * nomesOrcsMasculinos.length);
        return nomesOrcsMasculinos[indice];
    } else {
        const indice = Math.floor(Math.random() * nomesOrcsFemininos.length);
        return nomesOrcsFemininos[indice];
    }
}

function gerarNomeAnao() {
    const indice = Math.floor(Math.random() * nomesAnoes.length);
    return nomesAnoes[indice];
}

function gerarNome() {
    const raca = Math.floor(Math.random() * 3); // 0 = elfo, 1 = orc, 2 = anão

    switch (raca) {
        case 0:
            return gerarNomeElfo();
        case 1:
            return gerarNomeOrc();
        case 2:
            return gerarNomeAnao();
        default:
            return "Nome Fantasia";
    }
}

const btnGerarNome = document.getElementById('gerarNome');
const nomeGerado = document.getElementById('nomeGerado');

btnGerarNome.addEventListener('click', () => {
    const nome = gerarNome();
    nomeGerado.textContent = nome;
});
