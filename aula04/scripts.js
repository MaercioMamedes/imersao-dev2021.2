function image_print(escola){

    for(let i=0;i<escola.length;i++){

        var secao = document.querySelector("section.catalogo");
        var figure = document.createElement("figure");
        var image = document.createElement("img");
        figure.className = "grade";
        image.className="capa";
        image.src=escola[i];
        console.log(image);
        console.log(figure);
        secao.appendChild(figure);
        figure.appendChild(image)



    }
}

function apagar(){
    var figura = document.querySelectorAll("figure.grade");
    var image = document.querySelectorAll("img.capa");
    for(let i=0;i<figura.length;i++){
        figura[i].remove(image);
    }

}


function mostrar(){

    apagar()
     var selecao = document.querySelector("select#escolha");


    switch(parseInt(selecao.value)){
        case(0):
            image_print(cursos()[0]);
            break;
        case(1):
            image_print(cursos()[1]);
            break;
        case(2):
            image_print(cursos()[2]);
            break; 
        case(3):
            image_print(cursos()[3]);
            break;
        case(4):
            image_print(cursos()[4]);
            break;
        case(5):
            image_print(cursos()[5]);
            break;
        case(6):
            image_print(cursos()[6]);
            break;   

    }
}


function cursos(){

    const escolaProgramacao = [

        "https://www.alura.com.br/assets/api/cursos/php-primeiros-passos.svg",
        "https://www.alura.com.br/assets/api/cursos/python-3-introducao-a-nova-versao-da-linguagem.svg",
        "https://www.alura.com.br/assets/api/cursos/java-primeiros-passos.svg",
        "https://www.alura.com.br/assets/api/cursos/csharp-parte-1-primeiros-passos.svg",
    
    ];
    
    const escolaFrontEnd = [
        "https://www.alura.com.br/assets/api/cursos/html5-css3-primeiros-passos.svg",
        "https://www.alura.com.br/assets/api/cursos/guia-estilos-paginas-componentes.svg",
        "https://www.alura.com.br/assets/api/cursos/javascritpt-orientacao-objetos.svg",
        "https://www.alura.com.br/assets/api/cursos/react-js.svg",
        "https://www.alura.com.br/assets/api/cursos/angular-comecando-framework.svg",
    ];
    
    const escolaDataScience = [
        "https://www.alura.com.br/assets/api/cursos/mysql-manipule-dados-com-sql.svg",
        "https://www.alura.com.br/assets/api/cursos/engenharia-dados-introducao-data-pipelines.svg",
        "https://www.alura.com.br/assets/api/cursos/data-science-primeiros-passos.svg",
        "https://www.alura.com.br/assets/api/cursos/machine-learning-introducao-a-classificacao-com-sklearn.svg",
    ];
    
    const escolaDevOps = [
        "https://www.alura.com.br/assets/api/cursos/git-github-controle-de-versao.svg",
        "https://www.alura.com.br/assets/api/cursos/amazon-lightsail.svg",
        "https://www.alura.com.br/assets/api/cursos/linux-ubuntu.svg",
        "https://www.alura.com.br/assets/api/cursos/docker-e-docker-compose.svg",
        "https://www.alura.com.br/assets/api/cursos/kubernetes-deployments-volumes-escalabilidade.svg",
    ];
    
    const escolaUxUi = [
        "https://www.alura.com.br/assets/api/cursos/adobe-xd-site-mobile.svg",
        "https://www.alura.com.br/assets/api/cursos/fundamentos-ux-entendendo-experiencia-usuario.svg",
        "https://www.alura.com.br/assets/api/cursos/identidade-visual-parte-1-do-briefing-ate-um-logo-no-illustrator.svg",
        "https://www.alura.com.br/assets/api/cursos/photoshop-esboco-de-um-poster-de-super-heroi.svg",
    ];
    
    const escolaMobile = [
        "https://www.alura.com.br/assets/api/cursos/android-sua-primeira-app-mobile.svg",
        "https://www.alura.com.br/assets/api/cursos/swift-novas-features-melhorias-nas-apis.svg",
        "https://www.alura.com.br/assets/api/cursos/trabalhando-unity-mobile.svg",
        "https://www.alura.com.br/assets/api/cursos/flutter-fundamentos.svg",
    
    ];
    
    const escolaInovGestao = [
        "https://www.alura.com.br/assets/api/cursos/kanban-primeiros-passos.svg",
        "https://www.alura.com.br/assets/api/cursos/fundamentos-agilidade.svg",
        "https://www.alura.com.br/assets/api/cursos/governanca-ti-demandas-servicos.svg",
        "https://www.alura.com.br/assets/api/cursos/certificacao-itil-4-conceitos-chave-gerenciamento-servicos.svg",
    ];
    
    var alura = [
        escolaProgramacao,
        escolaFrontEnd,
        escolaDataScience,
        escolaDevOps,
        escolaUxUi,
        escolaMobile,
        escolaInovGestao,
    ];

    return alura;
};



for(let i = 0; i<cursos().length; i++){
    let curso = cursos()[i];
    image_print(curso);
}

    

