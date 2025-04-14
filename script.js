const btnBasico = document.getElementById('alertBasico');
btnBasico.addEventListener('click', () =>{
    Swal.fire({
        title: 'Alerta básico!', 
        text: 'Este é um alerta básico!', 
        icon: 'question'
    })
});

const btnSucesso = document.getElementById('alertSucesso');
btnSucesso.addEventListener('click', () =>{
    Swal.fire({
        title: 'Sucesso!', 
        text: 'A operação foi concluída com sucesso', 
        icon: 'success'
    })
});

const btnErro = document.getElementById('alertErro');
btnErro.addEventListener('click', () =>{
    Swal.fire({
        title: 'Erro!', 
        text: 'A operação falhou!', 
        icon: 'error'
    })
});

const btnAviso = document.getElementById('alertAviso');
btnAviso.addEventListener('click', () =>{
    Swal.fire({
        title: 'Aviso!', 
        text: 'Você foi avisado...', 
        icon: 'warning'
    })
});

const btnInfo = document.getElementById('alertInformacao');
btnInfo.addEventListener('click', () =>{
    Swal.fire({
        title: 'Informação!', 
        text: 'Agora você ta sabendo!', 
        icon: 'info'
    })
});

const btnConfirmacao = document.getElementById('alertConfirma');
btnConfirmacao.addEventListener('click', () =>{
    Swal.fire({
        title: 'Confirmar ação?',
        text: 'Você nao vai ter voltas',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar'
    // Obtendo valor do clique
    }).then((result) =>{ //Quando o clique acontecer, obter resultado
        if(result.isConfirmed){ // Caso seja True (CONFIRMADO)
            Swal.fire('Confirmado!','Você confirmou a ação','success')
        } //Caso seja False (CANCELADO)
        else if(result.dismiss === Swal.DismissReason.cancel){
            Swal.fire('Cancelado','A ação foi cancelado','error')
        }
    })
});

const btnInput = document.getElementById('alertPrompt');
btnInput.addEventListener('click', () =>{
    Swal.fire({
        title: 'Qual seu nome?', 
        input: 'text', 
        inputLabel: 'Digite seu nome completo!',
        inputAttributes: {maxLength: "15"},
        icon: 'question'
    }).then((result) =>{ // Caso o valor seja True e tenha um texto
        if(result.isConfirmed && result.value){
            Swal.fire(`Olá, ${result.value}`, 'Seu nome foi recebido', 'success')
        }
    })
});

const btnTimer = document.getElementById('alertTimer');
btnTimer.addEventListener('click', ()=>{
    Swal.fire({
        title: 'Seu tempo...',
        text: 'Ele está acabando',
        icon: 'warning',
        timer: 1000,
        // Exibindo a barra de progresso
        timerProgressBar: true,
        didOpen(){
            // Efeito de carregamento
            Swal.showLoading()
        }
    })
})

const btnHTML = document.getElementById('alertHTML');
btnHTML.addEventListener('click', () =>{
    Swal.fire({
        title: 'HTML Básico',
        // Marcacao html no efeito
        html: `
        <h1> Cachorros Frios </h1>
        <p>Oi gente, eu adoro <strong>Cachorros Frios</strong></p>
        <ul style="display:flex;margin:4rem;gap:1rem;list-style:none;background-color:red;color:green;"><li>cachorro</li><li>frio</li></ul>
        <a href="">Mais informações sobre os cachorros frios...</a>
        `,
        icon: 'question'
    })
})