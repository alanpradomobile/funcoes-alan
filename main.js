const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas= document.querySelector(".caixa-perguntas");
const caixaAlternativas= document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const caixaResultado = document.querySelector(".texto-resultado");



const perguntas = [
    {
        enunciado: "Qual a marca de carro você prefere?",
        alternativas: [
            {
                texto: " Toyota",
                afirmacao: " È uma otíma escolha poís tem a melhor qualidade e a confiabilidade do mercado, e são conhecidos por durabilidade e baixo custo da manutenção. ",
            },
            {
                texto: " Honda ",
                afirmacao: " Bela escolha, a honda conta com confiabilidade, desempenho, inovação tecnologica e seu valor de revenda, essas qualidades fazem a honda ser popular entre os consumidores. ",
            }
        ]
    },
    {
        enunciado: " Você é uma pessoa que prefere carros do tipo: ",
        alternativas: [
            {
                texto: " Esportivo ",
                afirmacao: " O carro possuí mais velocidade quando esportivo que é a melhor opção para a escolha de hoje em dia. ",
            },
            {
                texto: " Road dynamic ",
                afirmacao: " Esse modo de condução é para gastar menos combustível e andar tranquilamente carros assim geralmente são mais confortáveis que os esportivos ",
            }
        ]
    },
    {
        enunciado: " Pergunta?",
        alternativas: [
            {
                texto: " Texto/resposta ",
                afirmacao: " Afirmação ",
            },
            {
                texto: " Texto/resposta ",
                afirmacao: " Afirmação ",
            }
        ]
    },
    {
        enunciado: " Pergunta?",
        alternativas: [
            {
                texto: " Texto/resposta ",
                afirmacao: " Afirmação ",
            },
            {
                texto: " Texto/resposta ",
                afirmacao: " Afirmação ",
            }
        ]
    },
    {
        enunciado: " Pergunta?",
        alternativas: [
            {
                texto: " Texto/resposta ",
                afirmacao: "Afirmação",
            },
            {
                texto: " Texto/resposta ",
                afirmacao: " Afirmação ",
            }
        ]
    },
];


