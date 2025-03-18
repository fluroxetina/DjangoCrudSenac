async function Cadastro(evento){
<<<<<<< HEAD
    evento.preventDefault()

=======
>>>>>>> 15124fa4ea3cc250ba2a5eaf187305ace6816158

    evento.preventDefault()
    const nome = document.getElementById('nome').value
    const senha = document.getElementById('senha').value
    const path = window.location.pathname;
    const parts = path.split('/');
    const id = parts[parts.length - 1];
    const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]').value;

    let response

<<<<<<< HEAD
    if(id)
    {
        response = await apiFetch(`/api/user/${id}`,"PUT",{username:nome, password:senha},{"X-CSRFToken": csrfToken})
=======
    const respnse = await apiFetch('/api/user', 'POST', {username:nome, password:senha}, {'X-CSRFToken':csrf})
    console.log(respnse)

    if(respnse)
    {
        window.location.href = "/home"
>>>>>>> 15124fa4ea3cc250ba2a5eaf187305ace6816158
    }
    else
    {
        response = await apiFetch('/api/user', 'POST', {username:nome, password:senha}, {'X-CSRFToken':csrfToken})
    }

    if(response)
    {
        window.location.href = "/home"
    }  
    else
    {
        throw new Error('Erro ao tentar cadastrar o aluno.');
    }      

    
    
}

document.getElementById('alunoForm').addEventListener('submit', Cadastro)

<<<<<<< HEAD
=======
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
>>>>>>> 15124fa4ea3cc250ba2a5eaf187305ace6816158
