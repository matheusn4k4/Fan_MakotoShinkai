function alterar_h() {
    if (radiobtn_yn_historia.checked) {
        document.getElementById("ft_cartaz").src = "img/yn_ft.jpg"
    }
    if (radiobtn_tnk_historia.checked) {
        document.getElementById("ft_cartaz").src = "img/tnk_ft.jpg"
    }
    if (radiobtn_gow_historia.checked) {
        document.getElementById("ft_cartaz").src = "img/tgow_ft.jpg"
    }
    if (radiobtn_fcps_historia.checked) {
        document.getElementById("ft_cartaz").src = "img/fcps_ft.jpg"
    }
    historia = document.querySelector('input[name="radio"]:checked').value;
    alert(sexoVar)
}

function alterar_op() {
    if (radiobtn_yn_op.checked) {
        document.getElementById("ft_cartaz3").src = "img/yn_ft.jpg"
        document.getElementById("audio_op").src = "music/yn_op"
    }
    if (radiobtn_tnk_op.checked) {
        document.getElementById("ft_cartaz3").src = "img/tnk_ft.jpg"
        document.getElementById("audio_op").src = "music/yn_op"
    }
    if (radiobtn_gow_op.checked) {
        document.getElementById("ft_cartaz3").src = "img/tgow_ft.jpg"
        document.getElementById("audio_op").src = "music/yn_op"
    }
    if (radiobtn_fcps_op.checked) {
        document.getElementById("ft_cartaz3").src = "img/fcps_ft.jpg"
        document.getElementById("audio_op").src = "music/yn_op"
    }
    op = document.querySelector('input[name="radio3"]:checked').value;
}

function alterar_ost() {
    if (radiobtn_yn_ost.checked) {
        document.getElementById("ft_cartaz4").src = "img/yn_ft.jpg"
        document.getElementById("audio_ost").src = "music/yn_ost"
    }
    if (radiobtn_tnk_ost.checked) {
        document.getElementById("ft_cartaz4").src = "img/tnk_ft.jpg"
        document.getElementById("audio_ost").src = "music/yn_ost"
    }
    if (radiobtn_gow_ost.checked) {
        document.getElementById("ft_cartaz4").src = "img/tgow_ft.jpg"
        document.getElementById("audio_ost").src = "music/yn_ost"
    }
    if (radiobtn_fcps_ost.checked) {
        document.getElementById("ft_cartaz4").src = "img/fcps_ft.jpg"
        document.getElementById("audio_ost").src = "music/yn_ost"
    }
    ost = document.querySelector('input[name="radio4"]:checked').value;
}

function alterar_end() {
    if (radiobtn_yn_end.checked) {
        document.getElementById("ft_cartaz5").src = "img/yn_ft.jpg"
        document.getElementById("audio_end").src = "music/yn_end"
    }
    if (radiobtn_tnk_end.checked) {
        document.getElementById("ft_cartaz5").src = "img/tnk_ft.jpg"
        document.getElementById("audio_end").src = "music/yn_end"
    }
    if (radiobtn_gow_end.checked) {
        document.getElementById("ft_cartaz5").src = "img/tgow_ft.jpg"
        document.getElementById("audio_end").src = "music/yn_end"
    }
    if (radiobtn_fcps_end.checked) {
        document.getElementById("ft_cartaz5").src = "img/fcps_ft.jpg"
        document.getElementById("audio_end").src = "music/yn_end"
    }
    end = document.querySelector('input[name="radio5"]:checked').value;
}


function enviar() {
    var historiaVar = document.querySelector('input[name="radio"]:checked').value;
    var openingVar = document.querySelector('input[name="radio3"]:checked').value;
    var ostVar = document.querySelector('input[name="radio4"]:checked').value;
    var endingVar = document.querySelector('input[name="radio5"]:checked').value;
    var nomeVar = inp_nome.value;
    var emailVar = inp_email.value;
    var dataVar = inp_nac.value;
    var sexoVar = document.querySelector('input[name="radio_sexo"]:checked').value;
    var cidadeVar = slc_cidade.value;
    console.log(historiaVar, openingVar, ostVar, endingVar, nomeVar, emailVar, dataVar, sexoVar, cidadeVar)
}




function cadastrar() {
    // aguardar();

    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo 
    var historiaVar = document.querySelector('input[name="radio"]:checked').value;
    var openingVar = document.querySelector('input[name="radio3"]:checked').value;
    var ostVar = document.querySelector('input[name="radio4"]:checked').value;
    var endingVar = document.querySelector('input[name="radio5"]:checked').value;
    var nomeVar = inp_nome.value;
    var emailVar = inp_email.value;
    var dataVar = inp_nac.value;
    var sexoVar = document.querySelector('input[name="radio_sexo"]:checked').value;
    var cidadeVar = slc_cidade.value;


    // if (nomeVar == "" || emailVar == "" || senhaVar == "" || confirmacaoSenhaVar == "") {
    //     //card.style.display = "block"
    //     mensagem_erro.innerHTML = "(Mensagem de erro para todos os campos em branco)";

    // //finalizarAguardar();
    //     return false;
    // }
    // else {
    //     setInterval(sumirMensagem, 5000)
    // }

    // Enviando o valor da nova input
    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            historiaServer: historiaVar,
            openingServer: openingVar,
            ostServer: ostVar,
            endingServer: endingVar,
            nomeServer: nomeVar,
            emailServer: emailVar,
            dataServer: dataVar,
            sexoServer: sexoVar,
            cidadeServer: cidadeVar

        })
    }).then(function (resposta) {

        alert("Formulario envidado com sucesso");
        console.log("resposta: ", resposta);

        if (resposta.ok) {
            //card.style.display = "block";
            div_confirmacao.innerHTML = `Formulario envidado com sucesso`
            console.log(`confirmado`)

            // setTimeout(() => {
            //     window.location = "login.html";
            // }, "2000")

            limparFormulario();
            // //finalizarAguardar();
        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        // //finalizarAguardar();
    });

    return false;
}

function sumirMensagem() {
    //card.style.display = "none"
}

function kpiMetrica(){
    fetch('/ususarios/kpiMetricas/')
    .then((response) => {
        response.json().then((json)=>{
            if(json.length > 0){

            }
        });
    }).catch((error)=>{
        console.log('nenhum dado encontrado!');
        console.error(error);
    });
}
