let etiqueta_value = true;

document.getElementById('avariaSelect').addEventListener('change', mudarAvaria);

function aparecerEtiquetas(){
    const etiqueta = document.getElementById('etiqueta_naves');
    if (etiqueta_value === true){
        etiqueta.style.display = "block";
        etiqueta_value = false;
    
    } else{
        etiqueta.style.display = "none";
        etiqueta_value = true;
    };
};

function mudarCores(){
    const img_nave = document.getElementById("nave");
    const cores = document.querySelector('select[name="cor"]').value;
    if (cores == "preto"){
        nave.src = "/static/images/naves/navepreto.png";
    } else if( cores == "branco"){
        nave.src = "/static/images/naves/naveBranca.png";
    } else if ( cores == "azul"){
        nave.src = "/static/images/naves/naveAzul.png";
    } else if ( cores == "verde"){
        nave.src = "/static/images/naves/naveVerde.png";
    } else if ( cores == "vermelho"){
        nave.src = "/static/images/naves/naveVermelha.png";
    } else if ( cores == "amarelo"){
        nave.src = "/static/images/naves/naveamarela.png";
    } else if ( cores == "laranja"){
        nave.src = "/static/images/naves/naveLaranja.png";
    } else if ( cores == "roxo"){
        nave.src = "/static/images/naves/naveRoxa.png";
    } else if ( cores == "rosa"){
        nave.src = "/static/images/naves/naveRosa.png";
    } else if ( cores == "marrom"){
        nave.src = "/static/images/naves/naveMarrom.png";
    } else if ( cores == "cinza"){
        nave.src = "/static/images/naves/naveCinza.png";
    } else if ( cores == "prata"){
        nave.src = "/static/images/naves/navePrata.png";
    } else if ( cores == "dourado"){
        nave.src = "/static/images/naves/ovoDourado.png";
    } 
}

function mudarAvaria(){
    const avaria = document.querySelector('select[name="avaria"]').value;
    const grau1 = document.getElementById('praticamente_intacta');
    const grau2 = document.getElementById('parcialmente_destruida');
    const grau3 = document.getElementById('muito_destruida');
    const grau4 = document.getElementById('perda_total');

    if (avaria === "intacta"){
        grau1.style.display="none";
        grau2.style.display="none";
        grau3.style.display="none";
        grau4.style.display="none";
    } else if (avaria == "praticamente_intacta"){
        grau1.style.display="block";
        grau2.style.display="none";
        grau3.style.display="none";
        grau4.style.display="none";
    } else if (avaria === "parcialmente_destruida"){
        grau1.style.display="none";
        grau2.style.display="block";
        grau3.style.display="none";
        grau4.style.display="none";
    } else if (avaria === "muito_destruida"){
        grau1.style.display="none";
        grau2.style.display="none";
        grau3.style.display="block";
        grau4.style.display="none";
    } else if (avaria === "perda_total"){
        grau1.style.display="none";
        grau2.style.display="none";
        grau3.style.display="none";
        grau4.style.display="block";
    }
};

function mudarTamanho(){
    const tamanho = document.querySelector('select[name="tamanho"]').value;
    const conjNave = document.querySelector('.container-img');

    if (tamanho === "pequena"){
        conjNave.style.scale = "100%"
    } else if (tamanho === "media"){
        conjNave.style.scale = "110%"
    } else if (tamanho === "grande"){
        conjNave.style.scale = "125%"
    } else if (tamanho === "gigantesca"){
        conjNave.style.scale = "150%"

    }
}