var array = []; // Array para armazenar os produtos e quantidades

var table = document.getElementById("table"); // Obtém referência à tabela HTML

function adicionar() {
  // Função acionada ao clicar no botão de adicionar
  let nome = document.getElementById("ReN").value; // Obtém valor do campo de entrada para o nome do produto
  let numero = document.getElementById("ReNu").value; // Obtém valor do campo de entrada para a quantidade do produto

  const adicionarQuantidade = parseFloat(numero); // Converte a quantidade para um número decimal
  const produto = {
    nome: nome,
    quantidade: adicionarQuantidade,
  }; // Cria objeto de produto com nome e quantidade

  let NovoUsuario = document.createElement("tr"); // Cria nova linha (tr) na tabela
  NovoUsuario.classList.add("produto-row"); // Adiciona classe à nova linha

  let nomeProduto = document.createElement("td");
  nomeProduto.innerHTML = `<strong>Nome:</strong> ${produto.nome}`; // Define o texto da célula com o nome do produto

  let quantidadeProduto = document.createElement("td");
  quantidadeProduto.innerHTML = `<strong>Quantidade:</strong> ${produto.quantidade}`; // Define o texto da célula com a quantidade do produto

  NovoUsuario.appendChild(nomeProduto); // Adiciona célula do nome à linha
  NovoUsuario.appendChild(quantidadeProduto); // Adiciona célula da quantidade à linha
  table.appendChild(NovoUsuario); // Adiciona linha à tabela

  produto.table = NovoUsuario; // Adiciona referência da linha ao objeto do produto

  array.push(produto); // Adiciona objeto do produto ao array
  console.log(array); // Exibe o array atualizado no console

  // Limpa os campos de entrada
  document.getElementById("ReN").value = "";
  document.getElementById("ReNu").value = "";
}

function Entrada() {
  // Função acionada ao clicar no botão de entrada
  const nome = document.getElementById("NPE").value; // Obtém valor do campo de entrada para o nome do produto de entrada
  const numeroEntrada = document.getElementById("NUPE").value; // Obtém valor do campo de entrada para a quantidade do produto de entrada
  const entradaFloat = parseFloat(numeroEntrada); // Converte a quantidade de entrada para um número decimal

  array = array.map((item) => {
    // Percorre o array de produtos e atualiza a quantidade se o nome do produto for encontrado
    if (item.nome === nome) {
      return {
        ...item,
        quantidade: item.quantidade + entradaFloat,
      };
    }
    return item;
  });

  console.log(array); // Exibe o array atualizado no console
  document.getElementById("NPE").value = "";
  document.getElementById("NUPE").value = "";
      
      // Atualizar a tabela
 // Atualizar a tabela
 let linhasTabela = table.getElementsByClassName("produto-row");
 for (let i = 0; i < linhasTabela.length; i++) {
   let linha = linhasTabela[i];
   let nomeCelula = linha.querySelector("td");
   let quantidadeCelula = nomeCelula.nextElementSibling;
   let nomeProduto = nomeCelula.textContent.replace("<strong>Nome:</strong> ", "").trim();
   if (nomeProduto === produtoSaida.nome) {
     quantidadeCelula.innerHTML = `<strong>Quantidade:</strong> ${produtoSaida.quantidade}`; // Atualiza a célula da quantidade com a nova quantidade do produto
     break; // Sai do loop após atualizar a tabela para evitar iterações desnecessárias
   }
  }
}