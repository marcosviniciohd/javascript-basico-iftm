function validate() {
  user = document.getElementById("user");
  pwd = document.getElementById("pwd");

  if (!user.value) {
    alertWifi("Usuário em branco", false, 0, "../img/toupeira.gif", 30);
    user.focus();
  } else if (!pwd.value) {
    alertWifi("Senha em branco", false, 0, "../img/toupeira.gif", 30);
    pwd.focus();
  } else {
    //alertWifi("Login válido Uhuuuuuulllllll", false, 0, "../img/toupeira.gif", 30);
    readJSON(user.value, pwd.value);
  }
}

function readJSON(user, pwd) {
  var file = "../json/users.json";
  //file = 'https://wilton-filho.github.io/JS-GitHub/aulas/jogo/login/json/users2.json';
  fetch(file)
    .then((response) => response.json())
    .then((content) => checkUser(content, user, pwd))
    .catch((err) =>
      alertWifi("Erro na leitura do JSON!", false, 0, "img/toupeira.gif", 30)
    );
}

function checkUser(content, user, pwd) {
  var achou = false;

  for (i = 0; i < content.usuarios.length; i++) {
    if (content.usuarios[i].user == user && content.usuarios[i].pwd == pwd) {
      achou = true;
      break;
    }
  }

  if (achou) alertWifi("Usuário logado!", false, 0, "../img/toupeira.gif", 30);
  else
    alertWifi(
      "Usuário ou senha inválidos, tente novamente!",
      false,
      0,
      "../img/toupeira.gif",
      30
    );
}
