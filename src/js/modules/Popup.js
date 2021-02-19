export class Popup {
  constructor(popup, openButton, closeButton = 'strong') {
    this.popup = document.querySelector(popup);
    this.openButton = document.querySelector(openButton);
    this.closeButton = this.popup.querySelector(closeButton);
  }

  openPopup() {
    this.popup.style.display = 'block';
  }

  closePopup() {
    this.popup.style.display = 'none';
  }

  addListener() {
    this.openButton.addEventListener('click', (event) => {
      event.preventDefault();
      this.openPopup();
    });

    this.popup.addEventListener('click', (event) => {
      event.preventDefault();
      if(event.target === this.popup || event.target === this.closeButton) {
        this.closePopup();
      }
    });
  }
}