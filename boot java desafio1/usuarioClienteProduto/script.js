async function fazerLogin(){
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
    const result = await fetch("./usuarioClienteProduto/usuario.json");
    const usuariosCadastrados = await result.json();

    const acesso = usuariosCadastrados.users.find((item)=>item.user===usuario && item.pws===senha);
    
    if (acesso){
        window.location.href = "./panel.html"
    } else {
        alert("Usuário ou senha incorretos. Tente novamente.")
    }
};