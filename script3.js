// Método Simples
const tituloSimples = document.getElementById('titulo');
tituloSimples.textContent = 'Produto em Destaque';

// Método Complexo
const containerProduto = document.createElement('div');
containerProduto.classList.add('produto');

const nomeProduto = document.createElement('h2');
nomeProduto.textContent = 'Produto A';

const descricaoProduto = document.createElement('p');
descricaoProduto.textContent = 'Descrição do Produto A';

const precoProduto = document.createElement('p');
precoProduto.textContent = 'Preço: R$ 99,99';

const imagemProduto = document.createElement('img');
imagemProduto.src = 'caminho_para_imagem_do_produto.jpg';
imagemProduto.alt = 'Produto A';

containerProduto.appendChild(nomeProduto);
containerProduto.appendChild(descricaoProduto);
containerProduto.appendChild(precoProduto);
containerProduto.appendChild(imagemProduto);

document.body.appendChild(containerProduto);
