/* FUNÇOES QUE IRÂO ADICIONAR OS TEXTO DOS INPUTS EM SEUS ELEMENTOS*/


var bt = document.getElementById("bt_aumentar_fonte");
bt.addEventListener("click",aumentar_Fonte);
var niv = document.getElementById("nivell");
niv.addEventListener("click",nivelFluencia);
var nivel1 = document.getElementById("nivel1");
var nivel2 = document.getElementById("nivel2");
var nivel3 = document.getElementById("nivel3");
var identificador = document.getElementById("identificador");
var input = document.getElementById("input-idioma");

var fo = document.getElementById("folha");
var fai = document.getElementById("faixa-lateral");

function aumentar_Fonte(){

    if(bt.value==1){

        fo.style.fontSize = "1.1em";
        fai.style.fontSize = "1.1em";

    }else if(bt.value==2){

        fo.style.fontSize = "20px";
        fai.style.fontSize = "20px";
    }else if(bt.value<1){

        fo.style.fontSize = "1em";
        fai.style.fontSize = "1em";

    }

}


function nivelFluencia(){

    if(niv.value==1){

        nivel1.style.display = "block";
        nivel2.style.display = "none";
        nivel3.style.display = "none";
        identificador.style.display = "block"; 

    }else if(niv.value ==2){

        nivel1.style.display = "none";
        nivel2.style.display = "block";
        nivel3.style.display = "none";
        identificador.style.display = "block";
        
    }else if(niv.value>2){

        nivel1.style.display = "none";
        nivel2.style.display = "none";
        nivel3.style.display = "block";
        identificador.style.display ="block";
        
        
        
        

    }else if(niv.value<1){

        nivel1.style.display = "none";
        nivel2.style.display = "none";
        nivel3.style.display = "none";
        identificador.style.display = "none";
        
    }


}



function addNome(textinput){

    let nome = document.getElementById("nome");
    nome.innerHTML = textinput.value;

}

function addEmail(textinput){

    let email = document.getElementById("e-mail");
    email.innerHTML = textinput.value;

}

function addPerfil(textinput){

    let perfil = document.getElementById("perfil");
    perfil.innerHTML = textinput.value;

}

function addTelefone(textinput){

    let tele = document.getElementById("telefone");
    tele.innerHTML = textinput.value;

}

function addEndereco(textinput){

    let ende = document.getElementById("endereco");
    ende.innerHTML = textinput.value;

}

function addSite(textinput){

    let site = document.getElementById("site");
    site.innerHTML = textinput.value;

}

function addLinkedln(textinput){

    let link = document.getElementById("linkedln");
    link.innerHTML = textinput.value;


}

function addIdioma(textinput2){

    let idioma = document.getElementById("idiomaa");
    idioma.innerHTML = textinput2.value;

    identificador.innerHTML = textinput2.value;
}

function addFormacao(textinput){

    let forma = document.getElementById("formaçâo");
    forma.innerHTML = textinput.value;

}

function addInstituicao(textinput){

    let insti = document.getElementById("instituicao");
    insti.innerHTML = textinput.value;

}

function addLocalidade(textinput){

    let local = document.getElementById("localidade");
    local.innerHTML = textinput.value;
}

function addFuncao(textinput){

    let func = document.getElementById("funcao");
    func.innerHTML = textinput.value;
}

function addEmpregador(textinput){

    let empre = document.getElementById("empregador");
    empre.innerHTML = textinput.value;
}


function corFaixa(cor){

    let input_color1 = document.getElementById("input_colorLateral").value;
    document.getElementById("faixa-lateral").style.backgroundColor = input_color1;

}

function corFolha(){

    let input_color2 = document.getElementById("input_colorFolha").value;
    document.getElementById("folha").style.backgroundColor = input_color2;

}