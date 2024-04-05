import {
  EMAIL_INPUT,
  ERROR_PARAGRAPH,
  PASSWORD_INPUT,
  SUCCESS_PARAGRAPH,
} from "../constants/dom.js";

export default async function (event) {
  event.preventDefault();

  const emailValue = EMAIL_INPUT.value;
  const passwordValue = PASSWORD_INPUT.value;

  if (!emailValue || !passwordValue) {
    ERROR_PARAGRAPH.innerText = "Complétez le formulaire";
    // appel d'une fonction  add(arg1, arg2)
    setTimeout(() => {
      ERROR_PARAGRAPH.innerText = "";
    }, 2000);
    return;
  }

  //si tout se passe bien

  // on va récupérer le contenu du fichier users.json

  // cette action ne se fait pas de façon instantané
  //cela prend du temps donc on est obligé de signaler
  // au programme que c'est une action non synchrone
  // on utilise donc async et await
  // avec vous dites ne passe à la ligne suivante tant que
  // l'exécution de la fonction qui est précédé d'await n'est pas une promesse complète
  // la ligne 1
  const result = await fetch("./users.json");
  // on ne passe pas à la ligne 2 tant que la promosse await n'est pas réalisée
  // la méthode .json() convertire le json en javascript
  const users = await result.json();

  // on va chercher dans le tableau si l'email récupéré existe

  const isUserInUsers = (user) => user.email == emailValue;

  const user = users.find(isUserInUsers);
  if (user) {
    // si l'utilisateur existe alors on vérifie si le password
    // correspond à celui qui est dans la base de données
    if (user.password === passwordValue) {
      // les passwords correspondent
      ERROR_PARAGRAPH.innerHTML = "";
      SUCCESS_PARAGRAPH.innerHTML = "Connexion réussie";

      localStorage.setItem(
        "user",
        JSON.stringify({
          id: user.id,
          email: user.email,
        })
      );

      window.location.href = "shopping.html";
    } else {
      // les passwords ne correspondent pas
      SUCCESS_PARAGRAPH.innerHTML = "";
      ERROR_PARAGRAPH.innerHTML = "Mot de passe incorrect";
    }
  } else {
    SUCCESS_PARAGRAPH.innerHTML = "";
    ERROR_PARAGRAPH.innerHTML = "Utilisateur non trouvé";
  }
}
