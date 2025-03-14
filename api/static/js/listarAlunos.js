
async function deletar(id){

    const resposta = await fetch(`/api/user/${id}`, {
        method:'DELETE'
    })
    if(resposta.ok){
        var linhaAluno = document.getElementById(`aluno-${id}`)
        linhaAluno.remove()
    }

}
