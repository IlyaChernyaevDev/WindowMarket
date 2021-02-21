import './slider';
import Form from './modules/Form';
import Api from './services/Api';
import Tab from './modules/Tab';
import Popup from './modules/Popup';

document.addEventListener('DOMContentLoaded', () => {

  const popupEngineer = new Popup('.popup_engineer' ,'.popup_engineer_btn');
  const popupCallHeader = new Popup('.popup' ,'.header .phone_link');
  const popupCallFeedback = new Popup('.popup' ,'.feedback .phone_link');
  const forms = new Form('form', new Api('http://localhost:3000/formData'));
  const tabs = new Tab('.glazing_block', '.glazing_content', 'active', 'a');
  const tabsPopup = new Tab('.balcon_icons_img', '.big_img img', 'do_image_more');
  const popupPrice = new Popup('.popup_calc', '.glazing_price_btn');
  const popupProfile = new Popup('.popup_calc_profile','.popup_calc_button', '.popup_calc');
  const popupApplication = new Popup('.popup_calc_end', '.popup_calc_profile_button', '.popup_calc_profile');

  popupEngineer.addPopupListener();
  popupCallHeader.addPopupListener();
  popupCallFeedback.addPopupListener();

  forms.addFormListener();

  tabs.addTabLinksListeners();

  popupPrice.addPopupListener();

  tabsPopup.addTabLinksListeners();

  popupProfile.addPopupListener();

  popupApplication.addPopupListener();

});