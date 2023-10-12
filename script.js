class Hero {
    constructor(nome, idade, tipo, imagem) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.imagem = imagem;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'um ataque desconhecido';
        }

        const mensagem = `O ${this.tipo} atacou usando ${ataque}`;
        document.getElementById('attack-result').textContent = mensagem;
    }
}

document.getElementById('create-hero-button').addEventListener('click', () => {
    const nome = document.getElementById('hero-name-input').value;
    const idade = parseInt(document.getElementById('hero-age-input').value);
    const tipo = document.getElementById('hero-type-select').value;

    let imagem = '';
    switch (tipo) {
        case 'mago':
            imagem = 'mage.png'; 
            break;
        case 'guerreiro':
            imagem = 'warior.png'; 
            break;
        case 'monge':
            imagem = 'monk.png'; 
            break;
        case 'ninja':
            imagem = 'ninja.png'; 
            break;
        default:
            imagem = ''; 
    }

    const hero = new Hero(nome, idade, tipo, imagem);

    document.getElementById('hero-name').textContent = hero.nome;
    document.getElementById('hero-age').textContent = hero.idade;
    document.getElementById('hero-type').textContent = hero.tipo;
    document.getElementById('hero-image').src = hero.imagem;
    document.getElementById('hero-card').style.display = 'block';
});

document.getElementById('attack-button').addEventListener('click', () => {
    const hero = new Hero(document.getElementById('hero-name').textContent, parseInt(document.getElementById('hero-age').textContent), document.getElementById('hero-type').textContent);
    hero.atacar();
});