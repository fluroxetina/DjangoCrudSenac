
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
    }

}
