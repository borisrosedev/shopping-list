function verifyIfInputDivExists() {
    // je vérifie que l'élément html qui représent l'input de création d'un nouvel élément existe sur la page HTML
    const isPresentInPage = document.getElementById(
      "new-todos-item-input"
    );

    const result = isPresentInPage == null ? false : true;

    return result;
}

export {
    verifyIfInputDivExists
}
