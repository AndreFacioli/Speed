
console.log(Senha)
console.log(Email)



function logar(){
    var Email=document.getElementById("login")
    var Senha=document.getElementById("senha")

    if(Email == "admin" && Senha =="admin"){
        alert("Sucesso ao logar"+Email+"!");
        location.href="home.html"
    }else{
        alert("Usuário ou senha incorretos!")
    }
}