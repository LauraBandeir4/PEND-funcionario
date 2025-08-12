'use astrict'

import funcionarios from './funcionarios.json' with {type: 'json'}

// Nos parênteses estão escritos os nomes das Tags
function mostrarDados(funcionario1){
   // console.log(produto.preco [0])
   const funcionarios = document.getElementById('funcionarios')
   const funcionario = document.createElement('div')
   const imagem =document.createElement('img')
   const p = document.createElement('p')
   const span = document.createElement('span')

   //Estou puxando o caminho da pasta, pq não puxaria se só chamasse a imagem
   const path = `./img/${funcionario1.imagem}`
   imagem.src = path

   p.textContent = funcionario1.nome
   span.textContent = funcionario1.cargo

   //Colocando as tags dentro da div, nesse caso ou colocando uma tag dentro da outra
   funcionario.appendChild(imagem)
   funcionario.appendChild(p)
   funcionario.appendChild(span)

   funcionarios.appendChild(funcionario)
}

funcionarios.forEach (mostrarDados)