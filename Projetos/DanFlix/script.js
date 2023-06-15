const URL = 'https://rafaelescalfoni.github.io/desenv_web/filmes.json'
const dados = [
  {
    id: 1,
    titulo: "Better Call Saul",
    resumo:
      "Jimmy era um advogado qualquer até a vida o transformar em Saul, o cara que coloca criminosos dentro da lei.",
    generos: [
      "Séries",
      "Séries dos EUA",
      "Séries Cômicas",
      "Séries Dramáticas",
    ],
    titulosSemelhantes: [2, 3],
    classificacao: 18,
    figura:
      "https://rafaelescalfoni.github.io/desenv_web/img/betterCallSaul.jpg",
    elenco: [
      "Bob Odenkirk",
      "Jonathan Banks",
      "Michael McKean",
      "Rhea Seehorn",
    ],
    opinioes: [
      {
        rating: 5,
        descricao:
          "Estou ansioso pelos próximos episódios. Sou fã de Breaking Bad e estou confiante que essa série será um grande sucesso.",
      },
      {
        rating: 5,
        descricao:
          'Ansioso para ver. Vai ser demais! "Advogados são como planos de saúde, você espera nunca precisar, mas cara... Não ter um ... NÃO!" \\o/ ',
      },
    ],
  },
  {
    id: 2,
    titulo: "Breaking Bad",
    resumo:
      "À beira da morte, um professor passa a fabricar metanfetamina pelo futuro da família, mudando o destino de todos.",
    generos: [
      "Séries",
      "Séries dos EUA",
      "Séries Dramáticas",
      "Dramas para TV sobre crimes",
    ],
    titulosSemelhantes: [1, 3, 4],
    classificacao: 18,
    figura: "https://rafaelescalfoni.github.io/desenv_web/img/breakingBad.png",
    elenco: ["Bryan Cranston", "Aaron Paul", "Anna Gunn", "Dean Norris"],
    opinioes: [
      {
        rating: 5,
        descricao:
          "Ótima série! Uma das melhores dos últimos tempos. Quando a quinta temporada completa estará completa?",
      },
      {
        rating: 5,
        descricao: "Série excelente!",
      },
    ],
  },
  {
    id: 3,
    titulo: "House of Cards",
    resumo:
      "É verdade que o poder corrompe? O congressista Frank Underwood está pronto para descobrir.",
    generos: ["Séries", "Séries dos EUA", "Séries Dramáticas"],
    titulosSemelhantes: [1, 2, 4],
    classificacao: 16,
    figura: "https://rafaelescalfoni.github.io/desenv_web/img/houseOfCards.png",
    elenco: [
      "Kevin Spacey",
      "Robin Wright",
      "Kate Mara",
      "Corey Stoll",
      "Michael Kelly",
    ],
    opinioes: [
      {
        rating: 5,
        descricao:
          "Uma nova era para web! Essa série, sua estreia e temporada completa ao resto do mundo",
      },
    ],
  },
  {
    id: 4,
    titulo: "Narcos",
    resumo:
      "Primeiro, a mercadoria. Segundo, as rotas. Quando o dinheiro corre solto, a próxima parada é o poder.",
    generos: ["Séries", "Séries dos EUA", "TV policial violenta"],
    titulosSemelhantes: [1, 2, 3],
    classificacao: 16,
    figura: "https://rafaelescalfoni.github.io/desenv_web/img/narcos.png",
    elenco: [
      "Wagner Moura",
      "Boyd Holbrook",
      "Pedro Pascal",
      "Joanna Christie",
    ],
    opinioes: [
      {
        rating: 4,
        descricao: "Tudo para ser uma ótima série.",
      },
    ],
  },
  {
    id: 5,
    titulo: "Carros",
    resumo:
      "Um carro de corrida aprende que a vida é mais do que fama e glória. E você achava que o seu carro tinha personalidade!",
    generos: ["Filmes para a família e crianças", "Filme para 2 e 4 anos"],
    titulosSemelhantes: [6, 8],
    classificacao: 0,
    figura: "https://rafaelescalfoni.github.io/desenv_web/img/carros.png",
    elenco: ["Owen Wilson", "Larry the Cable Guy", "Michael Caine"],
    opinioes: [
      {
        rating: 5,
        descricao: "Excelente desenho! Meu filho adorou!!!",
      },
    ],
  },
  {
    id: 6,
    titulo: "Carros 2",
    resumo:
      "A caminho da Europa para participar do Grand Prix Mundial, o carro de corridas Relâmpago McQueen se envolve em divertidas e misteriosas intrigas internacionais.",
    generos: ["Filmes para a família e crianças", "Filme para 2 e 4 anos"],
    titulosSemelhantes: [5, 8],
    classificacao: 0,
    figura: "https://rafaelescalfoni.github.io/desenv_web/img/carros2.png",
    elenco: ["Owen Wilson", "Larry the Cable Guy", "Michael Caine"],
    opinioes: [
      {
        rating: 4,
        descricao: "Bom filme!",
      },
    ],
  },
  {
    id: 7,
    titulo: "Uma Família da Pesada",
    resumo:
      "Nesta série animada sem escrúpulos de Seth MacFarlane, o cômico Peter Griffin e sua família problemática passam por desventuras tresloucadas.",
    generos: ["Séries", "Séries dos EUA", "Séries cômicas"],
    titulosSemelhantes: [1, 2],
    classificacao: 12,
    figura: "https://rafaelescalfoni.github.io/desenv_web/img/familyGuy.png",
    elenco: ["Seth MacFarlane", "Alex Borstein"],
    opinioes: [
      {
        rating: 5,
        descricao: "Coloquem novas temporadas, por favor!",
      },
    ],
  },
  {
    id: 8,
    titulo: "Valente",
    resumo:
      "Após enfurecer três lordes poderosos e ter um pedido impensado atendido, uma indomável princesa escocesa começa sua jornada para reparar os estragos que causou.",
    generos: ["Filmes para a família e crianças", "Filmes para 4 a 7 anos"],
    titulosSemelhantes: [5, 6],
    classificacao: 0,
    figura: "https://rafaelescalfoni.github.io/desenv_web/img/valente.png",
    elenco: ["Kelly Macdonald", "Billy Connolly", "Emma Thompson"],
    opinioes: [
      {
        rating: 5,
        descricao: "Ótimo filme! Adoro filmes assim",
      },
      {
        rating: 4,
        descricao: "ótimo filme! Encantador, prende a atenção o tempo todo!",
      },
    ],
  },
  {
    id: 9,
    titulo: "Friends",
    resumo:
      "Esta série de enorme sucesso acompanha as aventuras de seis amigos que enfrentam as armadilhas da vida, do trabalho e do amor nos anos 1990.",
    generos: ["Séries", "Séries dos EUA", "Séries cômicas", "sitcoms"],
    titulosSemelhantes: [14],
    classificacao: 12,
    figura: "https://rafaelescalfoni.github.io/desenv_web/img/friends.png",
    elenco: [
      "Jennifer Aniston",
      "Courteney Cox",
      "Lisa Kudrow",
      "Matt LeBlanc",
      "Matthew Perry",
      "David Schwimmer",
    ],
    opinioes: [
      {
        rating: 5,
        descricao: "Estou sentido falta das primeiras temporadas!",
      },
      {
        rating: 3,
        descricao: "Boa série... dos anos 1990!!!",
      },
    ],
  },
  {
    id: 10,
    titulo: "House",
    resumo:
      "Hugh Laurie é o mal-humorado Dr. Gregory House, um médico que odeia seus pacientes mas que é um gênio ao tratar doenças misteriosas.",
    generos: ["Séries", "Séries dos EUA", "Séries dramáticas"],
    titulosSemelhantes: [],
    classificacao: 14,
    figura: "https://rafaelescalfoni.github.io/desenv_web/img/house.png",
    elenco: ["Hugh Laurie", "Omar Epps", "Robert Sean Leonard"],
    opinioes: [
      {
        rating: 4,
        descricao: "Boa pedida!",
      },
    ],
  },
  {
    id: 11,
    titulo: "Mãos talentosas",
    resumo:
      "Cuba Gooding Jr. é um cirurgião pediátrico que supera grandes obstáculos para estudar medicina e salvar vidas no Hospital Johns Hopkins.",
    generos: ["Dramas", "Dramas biográficos", "Dramas baseados em fatos reais"],
    titulosSemelhantes: [],
    classificacao: 12,
    figura:
      "https://rafaelescalfoni.github.io/desenv_web/img/maosTalentosas.png",
    elenco: ["Seth MacFarlane", "Alex Borstein"],
    opinioes: [
      {
        rating: 5,
        descricao: "Coloquem novas temporadas, por favor!",
      },
    ],
  },
  {
    id: 12,
    titulo: "Família Moderna",
    resumo:
      "Esta série vencedora do Emmy acompanha a vida de Jay Pritchett e sua eclética família enquanto lidam com os desafios da vida contemporânea em Los Angeles.",
    generos: ["Séries", "Séries dos EUA", "Séries cômicas"],
    titulosSemelhantes: [14, 9],
    classificacao: 10,
    figura: "https://rafaelescalfoni.github.io/desenv_web/img/modernFamily.png",
    elenco: ["Ed O'Neill", "Sofia Vergara", "Julie Bowen"],
    opinioes: [
      {
        rating: 5,
        descricao: "Coloquem novas temporadas, por favor!",
      },
    ],
  },
  {
    id: 13,
    titulo: "Scarface",
    resumo:
      'Um chefão do tráfico da Flórida comete o erro fatal de "abusar do seu próprio suprimento", nesta refilmagem do diretor Brian de Palma do original de 1932.',
    generos: [
      "Ação e aventura",
      "Suspenses de ação",
      "Clássicos de ação e aventura",
    ],
    titulosSemelhantes: [],
    classificacao: 18,
    figura: "https://rafaelescalfoni.github.io/desenv_web/img/scarface.png",
    elenco: ["Al Pacino", "Steven Bauer", "Michelle Pfeiffer"],
    opinioes: [
      {
        rating: 5,
        descricao: "Coloquem novas temporadas, por favor!",
      },
    ],
  },
  {
    id: 14,
    titulo: "That '70s show",
    resumo: "Jovens ",
    generos: ["Séries", "Séries dos EUA", "Séries cômicas"],
    titulosSemelhantes: [1, 2],
    classificacao: 12,
    figura: "https://rafaelescalfoni.github.io/desenv_web/img/that70s.png",
    elenco: [
      "Topher Grace",
      "Mila Kunis",
      "Ashton Kutcher",
      "Danny Masterson",
      "Laura Prepon",
      "Wilmer Valderrama",
      "Debra Jo Rupp",
      "Kurtwood Smith",
      "Don Stark",
      "Tanya Roberts",
    ],
    opinioes: [
      {
        rating: 5,
        descricao: "Já estava na hora de adicioná-la! Muito boa!!!",
      },
    ],
  },
  {
    id: 15,
    titulo: "Zumbilândia",
    resumo:
      "Tentando sobreviver em um mundo dominado por zumbis, um universitário se une a um desordeiro e duas irmãs golpistas.",
    generos: ["Comédias", "Comédias obscuras"],
    titulosSemelhantes: [],
    classificacao: 16,
    figura: "https://rafaelescalfoni.github.io/desenv_web/img/zumbilandia.png",
    elenco: ["Jesse Eisenberg", "Woody Harrelson", "Emma Stone"],
    opinioes: [
      {
        rating: 5,
        descricao: "Excelente filme! Irreverente!",
      },
    ],
  },
];

let listaFilmes = document.querySelector("ol");

const retornaGeneros = (arrG) => {
  let generos = "";
  arrG.forEach((gen) => {
    generos += gen + ", ";
  });

  return `<p class="generos"> ${generos.substring(0, generos.length - 2)}</p>`;
};

const retornaElenco = (arrE) => {
  let elenco = "Elenco: ";
  arrE.forEach((ele) => {
    elenco += ele + " ";
  });

  return `<p class="nomes-elenco">${elenco}</p>`;
};

const retornaEstrelas = (rating) => {
  let estrelas = "";
  for (let i = 1; i <= rating; i++) {
    estrelas += `<span><img class="estrela" src="./icons/star.png"></span>`;
  }

  return estrelas;
};

const retornaTitulos = (similares, arrayDados) => {
  let titulos = "";
  similares.forEach((similar) => {
    let index = similar - 1;
    titulos += `<a href=${
      "#id" + similar
    }><span><img class="icon-similar" src=${
      arrayDados[index].figura
    }></span></a>`;
  });

  return titulos;
};

const retornaClassificacao = (classificacao) => {
  let classe;

  if (classificacao >= 18) {
    classe = "preto";
  } else if (classificacao >= 16) {
    classe = "vermelho";
  } else if (classificacao >= 14) {
    classe = "laranja";
  } else if (classificacao >= 12) {
    classe = "amarelo";
  } else if (classificacao >= 10) {
    classe = "azul";
  } else {
    classe = "verde";
    return `<p class=${classe}></p>`;
  }

  return `<p class=${classe}>${classificacao}</p>`;
};

dados.forEach((obj) => {
  listaFilmes.innerHTML += `<li id=${"id" + obj.id} class="item-filme">
<div class="superior">
<div class="img-holder">
  <img src=${obj.figura}>
</div>
<div class="superior-info">
  <h2>${obj.titulo}</h2>
      ${retornaGeneros(obj.generos)}
  <div class="info-elenco">
      ${retornaElenco(obj.elenco)}
  </div>
</div>
<span class="classificacao">
  ${retornaClassificacao(obj.classificacao)}
</span>
</div>
<div class="rating">
${retornaEstrelas(obj.opinioes[0].rating)}
</div>
<p>${obj.resumo}</p>
<div class="similares">
<h3>Titulos similares</h3>
${retornaTitulos(obj.titulosSemelhantes, dados)}
</div>
</li>
`;
});
