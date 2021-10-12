function mudaModo(){
    document.body.classList.toggle('dark')
  }


function imersao(){
  var boxImersao = document.querySelector("main.portfolio");
  boxImersao.innerHTML = `
    <div class = "projetos">
      <h3>A imersão dev</h3>
      <p>
        A imsersão dev é um projeto de iniciativa da plataforma de educação Alura que proporciona, aos participantes
        estudantes, um exoeriência incrível, de forma didática e ao mesmo tempo profissional
      </p>
      
    </div>`
}

function experiencia(){
  var boxImersao = document.querySelector("main.portfolio");
  boxImersao.innerHTML = 
  `    <div class = "projetos">
  <h3>Relato de experiência</h3>
  <p>
    A experiência durante e depois dos dias de imersão, proporcionando um ambiente interativo de resoluções de problemas

  </p>
  
</div>`

}

function desenvolvedor(){
  var boxImersao = document.querySelector("main.portfolio");
  boxImersao.innerHTML = 

  `    <div class = "projetos">
  <h3>O desenvolvedor</h3>
  <p>
    Sou professor de matemática da rede estadual de Alagoas, Técnico em Eltrônica e estudante do Curso 
    de Análise e Desenvolvimento de Sistemas. Sou grande entusiasta de tecnologias web, em especial no
    front-end. Entretando minhas pretensções é atuar na área de dados e back-end. A imersão Dev da alura
    proporcionou um grande aprendizado em fundamentos de tecnologia de Web.

  </p>
  
</div>`

}

function home(){
var boxPortfolio = document.querySelector("main.portfolio");

boxPortfolio.innerHTML = portfolio;

}

var portfolio = `<div class="projetos">

<h3>Portifólio ImersãoDEV 2021.2 - Alura</h3>
<table id="escopo">
    <tr>
        <th id="header-projeto">Projeto</th>
        <th>Código-fonte</th>
        <th>Análise</th>
    </tr>
    <tbody>
        <tr>
            <td><a href="/IMERSAO-DEV2021.2/aula01/calculadora-media.html">Calculadora</a></td>
            <td><a href="https://codepen.io/maerciomamedes/pen/powWaPP" target="_blank">💻</a></td>
            <td>📋</td>
        </tr>
        <tr>
            <td><a href="/aula02/conversor-moedas-aula02.html">Conversor de Moedas</a></td>
            <td><a href="https://codepen.io/maerciomamedes/pen/powWaPP" target="_blank">💻</a></td>
            <td>📋</td>
        </tr>
        <tr>
            <td><a href="/aula03/Mentalista-AULA03.html">Mentalista</a></td>
            <td><a href="https://codepen.io/maerciomamedes/pen/powWaPP" target="_blank">💻</a></td>
            <td>📋</td>
        </tr>
        <tr>
            <td><a href="/aula05/aula05.html">aluraflix</a></td>
            <td><a href="https://codepen.io/maerciomamedes/pen/powWaPP" target="_blank">💻</a></td>
            <td>📋</td>
        </tr>
    <tr>
        <td><a href="/aula08/aula08.html">Super Trunfo</a></td>
        <td><a href="https://codepen.io/maerciomamedes/pen/powWaPP" target="_blank">💻</a></td>
        <td>📋</td>
    </tr>
</tbody>

</table>

</div> 

<div id="complemento">
<h3>Conteúdo complementar</h3>
<ul>
  <li><a href="https://www.alura.com.br/artigos/html-css-e-js-definicoes">HTML, CSS e JavaScript</a></li>
  <li><a href="https://www.youtube.com/playlist?list=PLTcmLKdIkOWkJY8LJXs1GDqBnxCGsExBO">Dicas de Programação</a></li>
  <li><a href="https://www.alura.com.br/dev-em-t">Dev em T</a></li>
  <li><a href="https://www.youtube.com/playlist?list=PL-kOa62ayb1wQPeBChJ6KBILRLL2AHoZU">Como estudar melhor</a></li>
</ul>

</div>

</main>
</div>`;
  

