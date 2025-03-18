<<<<<<< HEAD
async function deletar(id) {
    try {
        const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]').value;
        const response = await apiFetch(`/api/user/${id}`,"DELETE",null,{"X-CSRFToken": csrfToken})
            if(response.status == 200){
                var alunoRow = document.getElementById(`aluno-${id}`);
                if (alunoRow) {
                    alunoRow.remove();
                }
            }
    } catch (error) {
        console.error('Erro:', error);
        alert("Erro ao tentar excluir o aluno.");
=======

async function deletar(id){
    try 
    {
        const resposta = await fetch(`/api/user/${id}`, {
            method:'DELETE'
        })
        if(resposta.ok){
            var linhaAluno = document.getElementById(`user-${id}`)
            linhaAluno.remove()
        }
    }
    catch (error) 
    {
        console.log(error)
>>>>>>> 15124fa4ea3cc250ba2a5eaf187305ace6816158
    }
}