async function Cadastro(){

    const nome = document.getElementById('nome').value
    const senha = document.getElementById('senha').value
    const csrf = document.querySelector('[name=csrfmiddlewaretoken]').value


    const respnse = await apiFetch('/api/user', 'POST', {username:nome, password:senha}, {'X-CSRFToken':csrf})
    console.log(respnse)

    if(respnse.status == 404)
    {
        console.log(respnse)
    }
    
}

document.getElementById('alunoForm').addEventListener('submit', Cadastro)