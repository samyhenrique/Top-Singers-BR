function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById
    ("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value

   // se o campo for uma string sem nada
   if (!campoPesquisa) {
       section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar nome do cantor(a)</p>"
       return
   }

   campoPesquisa = campoPesquisa.toLowerCase()

    
    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let titulo = "";
    let descricao = "";
  
    // Itera sobre cada dado na lista de dados (supondo que 'dados' seja um array de objetos)
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
            // cria um noo elemento
            resultados += `
            <div class="item-resultado">
              <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
              </h2>
              <p class="descricao-meta">${dado.descricao}</p>
              <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
          `;

        }
    
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"

    }
  
    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
  }




