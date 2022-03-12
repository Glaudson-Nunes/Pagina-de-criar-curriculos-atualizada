
/* INICIO DO MENUS DE OPÇÔES, dados pessoais, formaçâo, experiência, idiomas, faixas, cor da folha, limpar*/
/* APLICAR A LOGICA DO CONTEUDO QUE ESTA NONE, PARA VISIVEL EM CADA UMA DAS OPÇÔES DESSE MENU */


onload = function principal(){ /*funçâo principal ira conter todos os inputs de cliques */

    /*inputs de cliques que vâo chamar os submenus*/
    let b1 = document.getElementById("bt_dados-pessoais");
    let b2 = document.getElementById("bt_formacao");
    let b3 = document.getElementById("bt_experiencia");
    let b4 = document.getElementById("bt_idiomas");
    let b5 = document.getElementById("bt_faixas");
    let b6 = document.getElementById("bt_cor-folha");
    let b7 = document.getElementById("bt_limpar");
    let b8 = document.getElementById("btn-fontes1");


    b1.addEventListener("click",chamar_submenu_dadosP);
    b2.addEventListener("click",chamar_submenu_formacao);
    b3.addEventListener("click",chamar_submenu_experiencia);
    b4.addEventListener("click",chamar_submenu_idiomas);
    b5.addEventListener("click",chamar_submenu_faixas);
    b6.addEventListener("click",chamar_submenu_cor_folha);
    b7.addEventListener("click",chamar_submenu_limpar);
    b8.addEventListener("click",chamar_submenu_fontes);

    /* inputs de cliques que vâo esconder os submenus */
    let b01 = document.getElementById("bt_dados-pessoais2");
    let b02 = document.getElementById("bt_formacao2");
    let b03 = document.getElementById("bt_experiencia2");
    let b04 = document.getElementById("bt_idiomas2");
    let b05 = document.getElementById("bt_faixas2");
    let b06 =  document.getElementById("bt_cor-folha2");
    let b07 = document.getElementById("bt_limpar2");
    let b08 = document.getElementById("btn-fontes2");

    b01.addEventListener("click",ocultando_submenu_dadosP);
    b02.addEventListener("click",ocultando_submenu_formacao);
    b03.addEventListener("click",ocultando_submenu_experiencia);
    b04.addEventListener("click",ocultando_submenu_idiomas);
    b05.addEventListener("click",ocultando_submenu_faixas);
    b06.addEventListener("click",ocultando_submenu_cor_folha);
    b07.addEventListener("click",ocultando_submenu_limpar);
    b08.addEventListener("click",ocultando_submenu_fontes);

    /* INPUTS QUE VAO ALTERAR AS FONTES*/

    let bt_arial = document.getElementById("arial");
    let bt_times = document.getElementById("times");
    let bt_impact = document.getElementById("impact");
    let bt_verdana = document.getElementById("verdana");
    let bt_tahoma = document.getElementById("tahoma");
    let bt_monos = document.getElementById("monospace");
    let bt_apple = document.getElementById("apple");
    let bt_georgia = document.getElementById("georgia");
    let bt_courier = document.getElementById("courier");

    bt_arial.addEventListener("click",ariaF);
    bt_times.addEventListener("click",timesF);
    bt_impact.addEventListener("click",impactF);
    bt_verdana.addEventListener("click",verdanaF);
    bt_tahoma.addEventListener("click",tahomaF);
    bt_monos.addEventListener("click",monosF);
    bt_apple.addEventListener("click",appleF);
    bt_georgia.addEventListener("click",georgiaF);
    bt_courier.addEventListener("click",courierF);
    
}

function ariaF(){

    let fo = document.getElementById("folha");
    let fai = document.getElementById("faixa-lateral");
    fo.style.fontFamily = "Oswald";
    fai.style.fontFamily = "Oswald";
    

}

function timesF(){

    let fo = document.getElementById("folha");
    let fai = document.getElementById("faixa-lateral");
    fo.style.fontFamily = "Times";
    fai.style.fontFamily = "Times";

}

function impactF(){

    let fo = document.getElementById("folha");
    let fai = document.getElementById("faixa-lateral");
    fo.style.display = "Impact";
    fai.style.fontFamily = "Impact";

}

function verdanaF(){

    let fo = document.getElementById("folha");
    let fai = document.getElementById("faixa-lateral");
    fo.style.fontFamily = "Verdana";
    fai.style.fontFamily = "Verdana";

}

function tahomaF(){

    let fo = document.getElementById("folha");
    let fai = document.getElementById("faixa-lateral");
    fo.style.fontFamily = "Tahoma";
    fai.style.fontFamily = "Tahoma";

}

function monosF(){

    let fo = document.getElementById("folha");
    let fai = document.getElementById("faixa-lateral");
    fo.style.fontFamily = "Monos";
    fai.style.fontFamily = "Monos";

}

function appleF(){

    let fo = document.getElementById("folha");
    let fai = document.getElementById("faixa-lateral");
    fo.style.fontFamily = "apple-system";
    fai.style.fontFamily = "apple-system";

}

function georgiaF(){

    let fo = document.getElementById("folha");
    let fai = document.getElementById("faixa-lateral");
    fo.style.fontFamily = "Georgia";
    fai.style.fontFamily = "Georgia";

}

function courierF(){

    let fo = document.getElementById("folha");
    let fai = document.getElementById("faixa-lateral");
    fo.style.fontFamily = "Courier";
    fai.style.fontFamily = "Courier";

}



function chamar_submenu_fontes(){

    let subM_fontes = document.getElementById("box-fonte");
    subM_fontes.style.display = "block";

    let b8 = document.getElementById("btn-fontes1");
    b8.style.display = "none";

    let b08 = document.getElementById("btn-fontes2");
    b08.style.display = "block";

}

function ocultando_submenu_fontes(){

    let subM_fontes = document.getElementById("box-fonte");
    subM_fontes.style.display = "none";

    let b8 = document.getElementById("btn-fontes1");
    b8.style.display = "block";

    let b08 = document.getElementById("btn-fontes2");
    b08.style.display = "none";
}


function chamar_submenu_dadosP(){

    let subM = document.getElementById("box-dados-pessoais");
    subM.style.display = "block";
    subM.style.transitionDelay = "1s";

    let b1 = document.getElementById("bt_dados-pessoais");
    b1.style.display = "none";
    
    let b01 = document.getElementById("bt_dados-pessoais2");
    b01.style.display = "block";
    
      /* toda vez que um menu for chamado, ele ira ocultar os outros que estiverem aberto*/

      let subM_formacao = document.getElementById("box-formacao");
      let subM_experiencia = document.getElementById("box-experiencia");
      let subM_idiomas = document.getElementById("box-idiomas");
      let subM_faixa = document.getElementById("box-faixas");
      let subM_cor_folha = document.getElementById("box-cor-folha");
      let subM_limpar = document.getElementById("box-limpar");
  
      /* ocultando menus apos um ser chamado*/
      subM_formacao.style.display = "none";
      subM_experiencia.style.display = "none";
      subM_idiomas.style.display = "none";
      subM_faixa.style.display = "none";
      subM_cor_folha.style.display = "none";
      subM_limpar.style.display = "none";
}

function ocultando_submenu_dadosP(){

    let subM = document.getElementById("box-dados-pessoais");
    subM.style.display = "none";

    let b1 = document.getElementById("bt_dados-pessoais");
    b1.style.display = "block";
   
    let b01 = document.getElementById("bt_dados-pessoais2");
    b01.style.display = "none";

      /* toda vez que um menu for chamado, ele ira ocultar os outros que estiverem aberto*/

      let subM_formacao = document.getElementById("box-formacao");
      let subM_experiencia = document.getElementById("box-experiencia");
      let subM_idiomas = document.getElementById("box-idiomas");
      let subM_faixa = document.getElementById("box-faixas");
      let subM_cor_folha = document.getElementById("box-cor-folha");
      let subM_limpar = document.getElementById("box-limpar");


      
}




function chamar_submenu_formacao(){

    let subM_formacao = document.getElementById("box-formacao");
    subM_formacao.style.display = "block";

    let b2 = document.getElementById("bt_formacao");
    b2.style.display = "none";

    let b02 = document.getElementById("bt_formacao2");
    b02.style.display = "block";

}

function ocultando_submenu_formacao(){

    let subM_formacao = document.getElementById("box-formacao");
    subM_formacao.style.display = "none";

    let b2 = document.getElementById("bt_formacao");
    b2.style.display = "block";

    let b02 = document.getElementById("bt_formacao2");
    b02.style.display = "none";

}



function  chamar_submenu_experiencia(){

    let subM_experiencia = document.getElementById("box-experiencia");
    subM_experiencia.style.display = "block";

    let b3 = document.getElementById("bt_experiencia");
    b3.style.display = "none";

    let b03 = document.getElementById("bt_experiencia2");
    b03.style.display = "block";


}

function ocultando_submenu_experiencia(){

    let subM_experiencia = document.getElementById("box-experiencia");
    subM_experiencia.style.display = "none";

    let b3 = document.getElementById("bt_experiencia");
    b3.style.display = "block";

    let b03 = document.getElementById("bt_experiencia2");
    b03.style.display = "none";

}


function chamar_submenu_idiomas(){

    let subM_idiomas = document.getElementById("box-idiomas");
    subM_idiomas.style.display = "block";

    let b4 = document.getElementById("bt_idiomas");
    b4.style.display = "none";


    let b04 = document.getElementById("bt_idiomas2");
    b04.style.display = "block";


}

function ocultando_submenu_idiomas(){

    let subM_idiomas = document.getElementById("box-idiomas");
    subM_idiomas.style.display = "none";

    let b4 = document.getElementById("bt_idiomas");
    b4.style.display = "block";


    let b04 = document.getElementById("bt_idiomas2");
    b04.style.display = "none";

}

function chamar_submenu_faixas(){

    let subM_faixa = document.getElementById("box-faixas");
    subM_faixa.style.display = "block";

    let b5 = document.getElementById("bt_faixas");
    b5.style.display = "none";


    let b05 = document.getElementById("bt_faixas2");
    b05.style.display = "block";


}

function ocultando_submenu_faixas(){

    let subM_faixa = document.getElementById("box-faixas");
    subM_faixa.style.display = "none";

    let b5 = document.getElementById("bt_faixas");
    b5.style.display = "block";


    let b05 = document.getElementById("bt_faixas2");
    b05.style.display = "none";

}


function chamar_submenu_cor_folha(){

    let subM_cor_folha = document.getElementById("box-cor-folha");
    subM_cor_folha.style.display = "block";

    let b6 = document.getElementById("bt_cor-folha");
    b6.style.display = "none";

    let b06 =  document.getElementById("bt_cor-folha2");
    b06.style.display = "block";



}

function ocultando_submenu_cor_folha(){

    let subM_cor_folha = document.getElementById("box-cor-folha");
    subM_cor_folha.style.display = "none";

    let b6 = document.getElementById("bt_cor-folha");
    b6.style.display = "block";

    let b06 =  document.getElementById("bt_cor-folha2");
    b06.style.display = "none";

}


function chamar_submenu_limpar(){

    
    let subM_limpar = document.getElementById("box-limpar");
    subM_limpar.style.display = "block";

    let b7 = document.getElementById("bt_limpar");
    b7.style.display = "none";


     let b07 = document.getElementById("bt_limpar2");
     b07.style.display = "block";
    
}

function ocultando_submenu_limpar(){

    let subM_limpar = document.getElementById("box-limpar");
    subM_limpar.style.display = "none";

    let b7 = document.getElementById("bt_limpar");
    b7.style.display = "block";


     let b07 = document.getElementById("bt_limpar2");
     b07.style.display = "none";
    
}

