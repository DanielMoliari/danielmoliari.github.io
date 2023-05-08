class JogoDaMemoria {
    constructor({ tela, util }) {
        this.tela = tela
        this.util = util

        this.heroisIniciais = [
            { img: './assets/batman.png', nome: 'batman' },
            { img: './assets/coringa.png', nome: 'coringa' },
            { img: './assets/deadpool.png', nome: 'deadpool' },
            { img: './assets/groot.png', nome: 'groot' },
            { img: './assets/homemaranha.png', nome: 'homemaranha' },
            { img: './assets/homemdeferro.png', nome: 'homemdeferro' },
            { img: './assets/hulk.png', nome: 'hulk' },
            { img: './assets/mulhermaravilha.png', nome: 'mulhermaravilha'},
            { img: './assets/nickfury.png', nome: 'nickfury' },
            { img: './assets/thor.png', nome: 'thor' } ,
            { img: './assets/wolverine.png', nome: 'wolverine' }
        ]
        this.iconePadrao = './assets/padrao.png'
        this.heroisEscondidos = []
        this.heroisSelecionados = []
    }
    inicializar() {
        this.tela.atualizarImagens(this.heroisIniciais)
        this.tela.configurarBotaoJogar(this.jogar.bind(this))
        this.tela.configurarBotaoVerificarSelecao(this.verificarSelecao.bind(this))
        this.tela.configurarBotaoMostrarTudo(this.mostrarHeroisEscondidos.bind(this))
    }
    async embaralhar() {
        const copias = this.heroisIniciais
        .concat(this.heroisIniciais)
        .map(item => {
            return Object.assign({}, item, { id: Math.random() / 0.5 })
        })
        .sort(() => Math.random() - 0.5)

        this.tela.atualizarImagens(copias)
        
        await this.util.timeout(1000)
        this.esconderHerois(copias)
    }
    esconderHerois(herois) {
        const heroisOcultos = herois.map(( { nome, id }) => ({
            id,
            nome,
            img: this.iconePadrao
        }))
        this.tela.atualizarImagens(heroisOcultos)
        this.heroisEscondidos = heroisOcultos
    }
    exibirHerois(nomeDoHeroi) {
        const { img } = this.heroisIniciais.find(({ nome }) => nomeDoHeroi === nome)
        this.tela.exibirHerois(nomeDoHeroi, img)
    }
    verificarSelecao(id, nome){
        const item = { id, nome }
        const heroisSelecionados = this.heroisSelecionados.length
        switch(heroisSelecionados){
            case 0:
                this.heroisSelecionados.push(item)
                break;
            case 1:
                const [ opcao1 ] = this.heroisSelecionados
                this.heroisSelecionados = []
                if(opcao1.nome === item.nome && opcao1.id !== item.id){
                    this.exibirHerois(item.nome)
                    this.tela.exibirMensagem()

                    return;
                }
                this.tela.exibirMensagem(false)
                break;
        }
    }
    mostrarHeroisEscondidos(){
        const heroisEscondidos = this.heroisEscondidos
        for(const heroi of heroisEscondidos) {
            const { img } = this.heroisIniciais.find(item => item.nome === heroi.nome)
            heroi.img = img
        }
        this.tela.atualizarImagens(heroisEscondidos)
    }
    jogar(){
        this.embaralhar()
    }
}