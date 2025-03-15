async function Cadastro(evento){

    evento.preventDefault()
    const nome = document.getElementById('nome').value
    const senha = document.getElementById('senha').value
    const csrf = document.querySelector('[name=csrfmiddlewaretoken]').value


    const respnse = await apiFetch('/api/user', 'POST', {username:nome, password:senha}, {'X-CSRFToken':csrf})
    console.log(respnse)

    if(respnse)
    {
        window.location.href = "/home"
    }
    
}

document.getElementById('alunoForm').addEventListener('submit', Cadastro)

// async function Cadastro(evento){
//     evento.preventDefault()
    
//     const nome = document.getElementById('nome').value
//     const senha = document.getElementById('senha').value
//     const csrf = document.querySelector("[name=csrfmiddlewaretoken]").value

//     const url = window.location.pathname
//     const valor = url.split("/")
//     const id = valor[valor.length - 1]
//     let resposta;

//     if (id){
//         resposta = await apiFetch(`/api/user/${id}`, "PUT", {username: nome, password: senha}, {"X-CSRFToken": csrf})
//     }else{
//         resposta = await apiFetch("/api/user/", "POST", {nome: nome, senha: senha}, {"X-CSRFToken": csrf})
//     }

    
//     if(resposta){
//         window.location.href = "/home"
//     }
    
// }

var alunoForm = document.getElementById('alunoForm').addEventListener("submit", Cadastro)