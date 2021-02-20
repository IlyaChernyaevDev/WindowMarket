import {Popup} from './modules/Popup';
import {Form} from './modules/Form';
import {Api} from './services/Api';

document.addEventListener('DOMContentLoaded', () => {

  const popupEngineer = new Popup('.popup_engineer' ,'.popup_engineer_btn');
  const popupCallHeader = new Popup('.popup' ,'.header .phone_link');
  const popupCallFeedback = new Popup('.popup' ,'.feedback .phone_link');
  const forms = new Form('form', new Api('http://localhost:3000/formData'));

  popupEngineer.addPopupListener();
  popupCallHeader.addPopupListener();
  popupCallFeedback.addPopupListener();
  forms.addFormListener();

});