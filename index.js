//[] array: permite armazenar vários valores em uma variável, {} objeto: determina informações dos valores.

const perguntas = [
  {
    pergunta: "O que significa o acrônimo 'DOM' em JavaScript?",
    respostas: [
      "Document Object Model",
      "Data Object Model",
      "Dynamic Object Management",
    ],
    correta: 0
  },
  {
    pergunta: "Qual dos seguintes métodos de string JavaScript substitui uma parte da string por outra?",
    respostas: [
      "replace()",
      "concat()",
      "slice()",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
    respostas: [
      "==",
      "===",
      "!=",
    ],
    correta: 1
  },
  {
    pergunta: "Qual função é usada para arredondar um número para o inteiro mais próximo em JavaScript?",
    respostas: [
      "round()",
      "ceil()",
      "floor()",
    ],
    correta: 0
  },
  {
    pergunta: "O que o método 'forEach()' faz em um array JavaScript?",
    respostas: [
      "Itera sobre os elementos de um array",
      "Adiciona um elemento ao final de um array",
      "Remove um elemento de um array",
    ],
    correta: 0
  },
  {
    pergunta: "Como você declara uma variável em JavaScript?",
    respostas: [
      "var",
      "let",
      "ambos 'var' e 'let' são válidos",
    ],
    correta: 2
  },
  {
    pergunta: "Qual dos seguintes não é um tipo de dado primitivo em JavaScript?",
    respostas: [
      "number",
      "object",
      "string",
    ],
    correta: 1
  },
  {
    pergunta: "O que o método 'push()' faz em um array JavaScript?",
    respostas: [
      "Remove o último elemento do array",
      "Adiciona um elemento ao final do array",
      "Adiciona um elemento ao início do array",
    ],
    correta: 1
  },
  {
    pergunta: "Qual dos seguintes é usado para comentar várias linhas em JavaScript?",
    respostas: [
      "//",
      "/* */",
      "'",
    ],
    correta: 1
  },
  {
    pergunta: "O que o operador 'typeof' faz em JavaScript?",
    respostas: [
      "Retorna o tipo de uma variável",
      "Verifica se uma variável é do tipo 'undefined'",
      "Verifica se uma variável é do tipo 'number'",
    ],
    correta: 0
  }
];

//querySelector: busca elementos no DOM com base em uma div, tag e outros seletores.

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

//loop ou laço de repetição, permite que um bloco de código seja executado diversas vezes até que determinada condição seja atendida.
//cloneNode(): permite copiar em elemento HTML, incluindo elementos filhos.
//appendChild(): permite inserir novos elementos (filhos) dentro de um elemento (pai).

for(const item of perguntas){
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

  for(let resposta of item.respostas){
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta

      corretas.delete(item) 
      if(estaCorreta){
        corretas.add(item)
      }

      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }

    quizItem.querySelector('dl').appendChild(dt)
  }

  quizItem.querySelector('dl dt').remove()

  //coloca a pergunta na tela
  quiz.appendChild(quizItem)
}
