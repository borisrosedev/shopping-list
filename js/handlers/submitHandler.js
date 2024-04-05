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

  if (!(emailValue && passwordValue)) {
    // si la condition ci-dessus est remplie alors tu m'appliques ce qui se trouve
    // en-dessous
    ERROR_PARAGRAPH.innerText = "Complétez le formulaire";
    // appel d'une fonction  add(arg1, arg2)
    setTimeout(() => {
      ERROR_PARAGRAPH.innerText = "";
    }, 2000);
    return;
  }


  const result = await fetch("https://todos-backend-ikdb.onrender.com/user/login", {
    method: "POST",
    headers: {
      "Content-Type":"application/json"
    },
    body:JSON.stringify({email: emailValue, password: passwordValue})
  })

  const { fullUser } = await result.json()
  const user = fullUser

  if (user) {
    console.log(user)
    // si l'utilisateur existe alors on vérifie si le password
    // correspond à celui qui est dans la base de données
    if (user.uid) {
      // les passwords correspondent
      ERROR_PARAGRAPH.innerHTML = "";
      SUCCESS_PARAGRAPH.innerHTML = "Connexion réussie";

      localStorage.setItem(
        "user",
        JSON.stringify({
          id: (user.uid).toString(),
          email: user.email,
        })
      );


      window.location.href = "shopping.html?token="+(user.uid).toString();
      console.log(window.location)
  
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
