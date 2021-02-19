import {Popup} from './modules/Popup';

document.addEventListener('DOMContentLoaded', () => {

  const popupEngineer = new Popup('.popup_engineer' ,'.popup_engineer_btn');
  const popupCallHeader = new Popup('.popup' ,'.header .phone_link');
  const popupCallFeedback = new Popup('.popup' ,'.feedback .phone_link');

  popupEngineer.addListener();
  popupCallHeader.addListener();
  popupCallFeedback.addListener();

});