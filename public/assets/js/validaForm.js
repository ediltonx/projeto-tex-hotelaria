// (user,pass)
// let form = document.querySelector("#myForm");

// form.addEventListener('onClick', validarFormulario)
// const btn = document.querySelector(".btn");
// btn.addEventListener("click", validarFormulario());

// function validaEnvio(){

// }
const password = "123456";
const email = "edmar.ade@gmail.com";

function validarFormulario() {
  var login = document.querySelector("#login").value;
  let senha = document.querySelector("#senha").value;


  login = login.replace(/"/g, "")
  login = login.replace(/'/g, "")
  console.log(login);

  if (login != email) {
    alert("login inválido");
  } else if (senha != password) {
    alert("senha inválida");
  }
  if (login != email) {
    
    alert("login inválido");
  } else if (senha != password) {
    alert("senha inválida");
  } else {
    alert("Usuário Validado");
  }

  // if(login == email){
  //     console.log('e-mail ok')
  // }
  // console.log(login);

  // let usuario = document.forms["myForm"]["login"].value; // modificar pra o nome do form e usuario do projeto
  // console.log(usuario);

  // let senha = document.forms["myForm"]["fpass"].value;  // modificar pra o nome do form e senha do projeto

  // let flag = false;   // flag que pode ser usada no futuro

  // // substitui espaços vazios no inicio e fim do user

  // if (user.charAt(0)(' ')) { user[0] = '';  }

  // if (user.charAt(user.lenght-1)(' ')) { user[user.lenght-1] = '';  }

  // // verifica se usuario esta vazio

  // if (usuario == "") {

  //   alert("O nome não pode ser vazio");

  //   flag = false;
  // }

  // // verifica se usuario esta correto

  // else if (usuario === user)

  // if (usuario == "") {

  //   alert("O nome não pode ser vazio");

  //   flag = false;
  // }
}
// verifica se usuario esta correto

// else if (usuario === user )
