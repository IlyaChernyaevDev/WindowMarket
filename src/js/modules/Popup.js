export default class Popup {
  constructor(popup, openButton, previosPopup = null, closeButton = 'strong') {
    this.popup = document.querySelector(popup);
    this.openButton = document.querySelectorAll(openButton);
    this.previosPopup = document.querySelector(previosPopup);
    this.closeButton = this.popup.querySelector(closeButton);
  }

  openPopup(popup) {
    popup.style.display = 'block';
  }

  closePopup(popup) {
    popup.style.display = 'none';
  }

  addPopupListener() {
    this.openButton.forEach(button => {
      button.addEventListener('click', event => {
        event.preventDefault();
        if(this.previosPopup) {
          this.closePopup(this.previosPopup);
        }
        
        this.openPopup(this.popup);
        
      });
    });

    this.popup.addEventListener('click', event => {
      if(event.target === this.popup || event.target === this.closeButton) {
        this.closePopup(this.popup);
      } 
    });

    
  }
}