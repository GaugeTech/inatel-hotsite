var filename= location.pathname.split('/').pop();
var json_origem= '';

switch(filename){
    case "engenharia-redes-sistemas-telecomunicacoes.html":
        json_origem = "./json/engenharia-redes-sistemas-telecomunicacoes.json";
        break;
    
    case "engenharia-clinica-engenharia-biomedica.html":
        json_origem = "./json/engenharia-clinica-engenharia-biomedica.json";
        break;

    case "engenharia-sistemas-eletroeletronicos-automacao-controle-industrial.html":
        json_origem = "./json/engenharia-sistemas-eletroeletronicos-automacao-controle-industrial.json";
        break;

    case "desenvolvimento-aplicacoes-dispositivos-moveis-cloud-computing.html":
        json_origem = "./json/desenvolvimento-aplicacoes-dispositivos-moveis-cloud-computing.json";
        break;

    case "internet-das-coisas.html":
        json_origem = "./json/internet-das-coisas.json";
        break;

    case "mba-gestao-empresarial-ambiente-tecnologico.html":
        json_origem = "./json/mba-gestao-empresarial-ambiente-tecnologico.json";
        break;

    case "industria-4.html":
        json_origem = "./json/industria-4.json";
        break;

    case "design-interacao-artefatos-digitais.html":
        json_origem = "./json/design-interacao-artefatos-digitais.json";
        break;
}

$.get( json_origem, function(data) {               
    $( "body" ).addClass(data.class);

    $('.json-name-curso').text(data.titulo);

    if(data.campus.length > 3){
        $('.json-campus').append(data.campus[0].item + " / " + 
        data.campus[1].item + " / " + 
        data.campus[2].item + "<span class=''> + "+ 
        (data.campus.length-3) + "</span>");
    }else{
        for(var i=0; i < 3; i++){
            $('.json-campus').append(data.campus[i].item)
            if(data.campus[i+1]){
                $('.json-campus').append(" / ")
            }else{
                break
            }
        }
    }

    $('.json-inicio').text(data.inicio);
    $('.json-horario').text(data.horario);
    $('.json-duracao').text(data.duracao);
    $('.json-sobre').html(data.sobre[0].descricao);

    for(var i=0; i< data.conteudo.length; i++){
        var strHTL = "<div class='col-12 col-md-4'><div class='item-conteudo'>" + 
        data.conteudo[i].item+"</div></div>";
        $(".json-conteudo").append(strHTL);
    }

    for(var i=0; i< data.principaisAtividadesDesenvolvidas.length; i++){
        var strHABILIDADES = "<div class='col-12 col-md-4 item-habilidades'><p class='numero'>"+ (i+1) +"</p><p class='texto'>"+ data.principaisAtividadesDesenvolvidas[i].descricao +"</p></div>";
        if(i < 6) {$(".json-habilidades").append(strHABILIDADES);}                
    }

    for(var i=0; i< data.professores.length; i++){
        var strPROFS = "<div class='col-12 col-md-4'><div class='item-professores' onClick='modalProfessor(\" "+ data.professores[i].id  +" \")'>"+
        "<img src='./assets/img/professores/"+
        data.professores[i].imagem + 
        ".jpg' class='thumb-professor'>"+
        "<div class='dados-professor'><p class='nome'>"+ 
        data.professores[i].professor +"</p><p class='materia'>"+ 
        data.professores[i].materia +"</p></div></div></div>";
        $(".json-professores").append(strPROFS);
    }

    $('.json-coordenador').text(data.coordenador[0].nome)
    $('.json-coordenador-descricao').text(data.coordenador[0].descricao);

    // Criação tabelas
    for(var j = 0; j < data.unidades.length; j++){
        var strHEADER = "<div class='overflow-auto'><div class='tabela-cidade color-course'>"+ 
        data.unidades[j].valores[0].cidade +"</div><table><tr><th>" + 
        data.unidades[j].valores[0].desconto + "</th><th>" + 
        data.unidades[j].valores[0].valor_curso + "</th><th>" + 
        data.unidades[j].valores[0].valor_desconto + "</th><th><span class='color-course'>+ " + 
        data.unidades[j].valores[0].desconto_um + "% de deconto</span>" + 
        data.unidades[j].valores[0].matricula_opcao_um + "</th><th><span class='color-course'>+ " + 
        data.unidades[j].valores[0].desconto_dois + "% de deconto</span>" + 
        data.unidades[j].valores[0].matricula_opcao_tres + "</th><th><span class='color-course'>+ " + 
        data.unidades[j].valores[0].desconto_tres + "% de deconto</span>" + 
        data.unidades[j].valores[0].matricula_opcao_tres + "</th></tr>";

        var strVALORES = '';
        var strTABELA = strHEADER;

        for(var i=1; i < data.unidades[j].valores.length; i++){         
            var strVALORES = "<tr><td>"+data.unidades[0].valores[i].primeira_coluna+"</td><td>"+
                data.unidades[j].valores[i].valor_curso+"</td><td>"+
                data.unidades[j].valores[i].valor_desconto+"</td><td>"+
                data.unidades[j].valores[i].valor_matricula_1+"</td><td>"+
                data.unidades[j].valores[i].valor_matricula_2+"</td><td>"+
                data.unidades[j].valores[i].valor_matricula_3+"</td></tr>";

                strTABELA = strTABELA.concat(strVALORES);
        }

    var strFOOTER = "</table></div>";
    
    strTABELA = strTABELA.concat(strFOOTER);
    $('.json-valores').append(strTABELA);
    }
    // Fim criação tabelas
});

$.get( "./json/cards.json", function(data) {               
    $( "body" ).addClass(data.class);

    for(var i=0; i< 4; i++){
        var strCARDS = "<div class='col-12 col-lg-3 col-md-6'><a class='item-cursos box-shadow-course' href='"+ 
        data.cards[i].link +".html'><img src='"+ data.cards[i].imagem +".png' class='img-destaque'><div class='descricao-cursos'><p class='titulo'>"+ 
        data.cards[i].nome +"</p><p class='item'><img src='./assets/img/maps-and-flags.svg'>"+ 
        data.cards[i].campus[0].item +"<span class='color-course'>"+ data.cards[i].campusExtras +"</span></p><p class='item'><img src='./assets/img/shuttle.svg'>"+ 
        data.cards[i].inicio +"</p><p class='item'><img src='./assets/img/calendar.svg'>"+ 
        data.cards[i].duracao +"</p></div></a></div<a>";
        $('.json-cards').append(strCARDS);
    }

    for(var i=0; i< data.cards.length; i++){
        var strFOOTER = "<p><a href='"+ data.cards[i].link +".html'>"+ data.cards[i].nome +"</a></p>";
        $('.json-footer').append(strFOOTER);
    }
}); 

function modalOpen() {
    $('body').find('.float-inscreva-se').toggleClass('closed');
    $('body').find('.overlay').toggleClass('closed');
}

function modalProfessor(id) {
    var teste = parseInt(id, 10);
    //console.log(teste);
    $.get( "./json/professores.json", function(dataProfessores) {               
        
        //console.log( dataProfessores.professores[teste].professor );
        
    });
}