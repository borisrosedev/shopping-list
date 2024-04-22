export class NotificationService {
  constructor() {
    this.element = document.getElementById("notification-container");
  }
  setContent(data) {
    this.element.innerHTML = `<p class="notification-p">${data}</p>`;
    this.element.style.display = "flex";
    setTimeout(() => {
      this.element.innerHTML = "";
      this.element.style.display = "none";
    }, 3000);
  }
}
