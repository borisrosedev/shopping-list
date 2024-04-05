// ---- TODOS PAGE
const ADD_BUTTON = document.getElementById("add-button");
const LOGOUT_BUTTON = document.getElementById("logout-button");
const TODOS_LIST = document.getElementById("todos-list");
const NEW_ITEM_INPUT_CONTAINER = document.getElementById(
  "new-item-input-container"
);
const NO_ITEM = document.getElementById("no-item");
const RESET_BUTTON_CONTAINER = document.getElementById("reset-button-container")
// ------------LOGIN PAGE
const FORM = document.getElementById("login-form");
const EMAIL_INPUT = document.getElementById("email");
const PASSWORD_INPUT = document.getElementById("password");
const ERROR_PARAGRAPH = document.getElementById("error");
const SUCCESS_PARAGRAPH = document.getElementById("success");
// --------------REGISTER PAGE
const REGISTER_FORM = document.getElementById("register-form");
const CONFIRMED_PASSWORD_INPUT = document.getElementById("confirmed-password")



// je veux pouvoir utiliser ces variables ailleurs
export { 
  ADD_BUTTON, 
  TODOS_LIST, 
  NEW_ITEM_INPUT_CONTAINER, 
  NO_ITEM,
  RESET_BUTTON_CONTAINER,
  FORM,
  EMAIL_INPUT,
  PASSWORD_INPUT,
  ERROR_PARAGRAPH,
  SUCCESS_PARAGRAPH,
  REGISTER_FORM,
  CONFIRMED_PASSWORD_INPUT,
  LOGOUT_BUTTON
}