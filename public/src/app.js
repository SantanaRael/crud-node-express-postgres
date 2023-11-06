let consultar = document.querySelector(".botoes-dep").children[0];
let incluir = document.querySelector(".botoes-dep").children[1];

let containerCadastrar = document.querySelector("#Cadastrar");


let cadastrar = document.querySelector("#submit")

const url = "http://localhost:3000/clientes/";


//essa função faz um get na API e recebe o resultado na variavel response.data
function consultarTodos(){
    axios.get(url)
    .then(response => {
        const dados = response.data;
        criarTabela(dados)
    })
    .catch( error => console.log(error))
}


//Essa função transforma o Array em tabela
function criarTabela(dados) {
    
	var tabela = document.querySelector("table");
	var tbody = tabela.querySelector("tbody");

    if(tbody.innerHTML != ""){
        tbody.innerHTML = "";
        criarTabela(dados)
    }else{
        for (var i = 0; i < dados.length; i++) {
            var row = tbody.insertRow();
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
    
            cell1.innerHTML = dados[i].id;
            cell2.innerHTML = dados[i].nome;
            cell3.innerHTML = dados[i].email;
            cell4.innerHTML = dados[i].cpf;
        }
    }


}


//aqui fazemos a função constultar todos ser executada sempre que for clicado no botão consultar
consultar.addEventListener("click", function(){

    consultarTodos()
});

//aqui temos uma função que usa o metodo post na API que envia  um json com as informações dos inputs
function cadastraCliente(){

    //esse array pega os valores dos inputs pelo id
    const dadosDosInputs = {
    nome: nome.value,
    email: email.value,
    cpf: cpf.value
    }

    axios.post(url, dadosDosInputs)
    .then(response => {
        console.log(response.data)
    })
    .catch(error => console.log(error))
}

cadastrar.addEventListener("click", function(){
    cadastraCliente()
    alert("Usuario adicionado com sucesso!")

});


function consultarPeloId(){
    
    
    axios.get(`${url}${userId.value}` )
    .then(response => {
        const dados = response.data;
        userName.value = dados[0].nome;
        userEmail.value = dados[0].email;
        userCpf.value  = dados[0].cpf;
    })
    .catch( error => console.log(error))
}

buscarPeloId.addEventListener("click", function(){
    consultarPeloId()
});

function alterarCliente(){
    const dadosDosInputs = {
        nome: userName.value,
        email: userEmail.value,
        cpf: userCpf.value
        }
        console.log(dadosDosInputs)
    axios.patch(`${url}${userId.value}`, dadosDosInputs)
    .then(response => {
        alert("Usuario alterado com sucesso")
    })
    .catch(error => console.log(error))
    
}

alterar.addEventListener("click", function(){
    alterarCliente()
});

function deletarCliente(){
    axios.delete(`${url}${userIdDel.value}`)
    .then(response => {
        alert("Usuario apagado com sucesso!")
    })
    .catch(error => console.log(error))
}


apagarUser.addEventListener("click", function(){
    deletarCliente()
});


function mostrarDiv(id) {
    // Oculta todas as divs de conteúdo
    var divs = document.getElementsByClassName('content');
    for (var i = 0; i < divs.length; i++) {
        divs[i].style.display = 'none';
    }

    // Mostra a div correspondente ao item clicado
    var div = document.getElementById(id);
    div.style.display = 'block';
}


