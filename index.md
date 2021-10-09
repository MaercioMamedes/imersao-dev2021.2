<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>home</title>
</head>
<body>
    <div class="container">
        <header class="cabecalho">
          <div class="perfil">
            <img class="perfil-foto" src="https://github.com/MaercioMamedes.png"/>
            <div class="titulo">
              <h1>Maercio Mamedes</h1> 
              <h2>Professor de matemática, técnico em eletrônica e estudante de Análise e Desenvolvimento de Sistemas</h2>
            </div>
          </div>
          <div class="tema">
            <button onClick="mudaModo()">Alterar tema</button>
          </div>
        </header>
        <menu>
          <ul>
            <li><button class="menu" onclick="home()"><h2>Portifólio</h2></button></li>
            <li><button class="menu" onclick="imersao()"><h2>A imersão</h2></button></li>
            <li><button class="menu" onclick="experiencia()"><h2>Relato da experiência</h2></button></li>
            <li><button class="menu" onclick="desenvolvedor()"><h2>O desenvolvedor</h2></button></li>

          </ul>
        </menu>

        <main class="portfolio">

          
          <div class="projetos">

            <h3>Portifólio ImersãoDEV 2021.2 - Alura</h3>
            <table id="escopo">
                <tr>
                    <th id="header-projeto">Projeto</th>
                    <th>Código-fonte</th>
                    <th>Análise</th>
                </tr>
                <tbody>
                    <tr>
                        <td><a href="/aula01/calculadora-media.html">Calculadora</a></td>
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
      </div>

      <footer>
        <p><a href="https://twitter.com/mamedes01">&copy;mamedes01</a></p>
        <img class="rodape" src="https://cdn.pixabay.com/photo/2017/08/05/11/24/logo-2582757_1280.png" alt="" srcset="">
        <img class="rodape" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png" alt="" srcset="">
        <img class="rodape" src="https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png" alt="" srcset="">
      </footer>
    <script src="script.js"></script>  
</body>
</html>