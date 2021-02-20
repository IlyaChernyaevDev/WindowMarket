export class Form {
  constructor(forms, api) {
    this.forms = document.querySelectorAll(forms);
    this.api = api;
  }

  addFormListener() {
    this.forms.forEach(form => {
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        this.postFormData(form);
      });
    });
  }

  getFormData(form) {
    return new FormData(form);
  }

  postFormData(form) {
    const formData = this.getFormData(form);

    const json = JSON.stringify(Object.fromEntries(formData.entries()));
    console.log(json);

    this.addFormLoader(form);

    this.api.postFormData(json)
    .then(function() {
      Form.removeFormLoader(form);
      console.log(this);
      form.insertAdjacentHTML('beforeend', Form.createMessage(true));
      Form.removeFormMessage(form);
    })
    .catch(function() {
      Form.removeFormLoader(form);
      form.insertAdjacentHTML('beforeend', Form.createMessage(false));
      Form.removeFormMessage(form);
    })
    .finally(function() {
      form.reset();
    });
  }

  createFormLoader() {
    return `<img class="form__loader" src="assets/slick/ajax-loader.gif">`; 
  }

  addFormLoader(form) {
    form.insertAdjacentHTML('beforeend', this.createFormLoader());
  }

  static removeFormLoader(form) {
    form.querySelector('.form__loader').remove();
  }

  static createMessage(message) {
    if(message) {
      return `<h3 class="form-message">Данный получены. Мы с вами скоро свяжемся.</h3>`;
    } else {
      return `<h3 class="form-message">Данные отправить не удалось.</h3>`;
    }
  }

  static removeFormMessage(form) {
    setTimeout(() => {
      form.querySelector('h3.form-message').remove();
    }, 10000);
  }
}