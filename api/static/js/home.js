async function GetUserNameLogado(){
    const response = await apiFetch("/api/GetDadosUsuarioLogado/")
    const div = document.getElementById("nomeUsuario")
    div.innerHTML = response.username
}
GetUserNameLogado()