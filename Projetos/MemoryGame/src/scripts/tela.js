const util = Util

const ID_CONTEUDO = "conteudo"
const ID_BTN_JOGAR = "jogar"
const ID_MENSAGEM = "mensagem"
const CLASSE_INVISIVEL = "invisible"
const ID_BTN_MOSTRAR_TUDO = "mostrarTudo"
const MENSAGENS = {
    sucesso: {
        texto: 'Combinação correta!',
        classe: 'alert-sucess'
    },
    erro: {
        texto: 'Combinação incorreta!',
        classe: 'alert-danger'
    }
}
class Tela {
  static obterCodigoHtml(item) {
    return `<div class="card" onclick="window.verificarSelecao('${item.id}', '${item.nome}')">
        <img src="${item.img}" name="${item.nome}" class="card-img" alt="..." />
      </div>`;
  }
  static configurarBotaoVerificarSelecao(funcaoOnClick) {
    window.verificarSelecao = funcaoOnClick
  }
  static alterarConteudoHTML(codigoHtml) {
    const conteudo = document.getElementById(ID_CONTEUDO)
    conteudo.innerHTML = codigoHtml
  }
  static gerarStringHTMLPelaImagem(itens) {
    return itens.map(Tela.obterCodigoHtml).join('')
  }
  static atualizarImagens(itens) {
    const codigoHtml = Tela.gerarStringHTMLPelaImagem(itens)
    Tela.alterarConteudoHTML(codigoHtml)
  }
  static configurarBotaoJogar(funcaoOnClick) {
    const btnJogar = document.getElementById(ID_BTN_JOGAR)
    btnJogar.onclick = funcaoOnClick
  }
  static exibirHerois(nomeDoHeroi, img) {
    const elementosHtml = document.getElementsByName(nomeDoHeroi)
    elementosHtml.forEach(item => (item.src = img))
  }
  static async exibirMensagem(sucesso = true) {
    const elemento = document.getElementById(ID_MENSAGEM)
    if(sucesso) {
        elemento.classList.remove(MENSAGENS.erro.classe)
        elemento.classList.add(MENSAGENS.sucesso.classe)
        elemento.innerHTML = MENSAGENS.sucesso.texto
    }
    else{
        elemento.classList.remove(MENSAGENS.sucesso.classe)
        elemento.classList.add(MENSAGENS.erro.classe)
        elemento.innerHTML = MENSAGENS.erro.texto
    }
    elemento.classList.remove(CLASSE_INVISIVEL)
    await util.timeout(1000)
    elemento.classList.add(CLASSE_INVISIVEL)
  }
  static configurarBotaoMostrarTudo(funcaoOnClick) {
    const btnMostrarTudo = document.getElementById(ID_BTN_MOSTRAR_TUDO)
    btnMostrarTudo.onclick = funcaoOnClick
  }
}
