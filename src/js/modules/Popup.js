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
    
    if(this.popup.classList.contains('popup_calc_profile')) {
      const arrayCheckbox = document.querySelectorAll('.checkbox');
      arrayCheckbox[0].checked = true;
      arrayCheckbox.forEach((checkbox, index) => {
        checkbox.addEventListener('change', function(event) {
         if(event.target.checked && index === 0) {
          arrayCheckbox[1].checked = false;
         } else {
          arrayCheckbox[0].checked = false;
         }
        });
      });
    }
  }

  popupShow(time) {
    setTimeout( () => {
      this.openPopup(this.popup);
    }, time);
  }
}