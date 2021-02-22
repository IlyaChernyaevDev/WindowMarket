export default class Images {
  constructor(images) {
    this.images = document.querySelectorAll(images);
    this.overlay = null;
  }

  static createImageOverlay() {
    const overlay = document.createElement('div');
    overlay.classList.add('img-popup');

    overlay.style.cssText =   `display: flex;
                              position: fixed;
                              top: 0;
                              left: 0;
                              width: 100%;
                              height: 100%;
                              z-index: 9;
                              background-color: rgba(0, 0, 0, 0.5);
                              justify-content: center;
                              align-items: center;`;

    return overlay;
  }

  static createImage(src) {
    const image = document.createElement('img');
    image.src = src;
    return image;
  }

  static addImage(overlay, image) {
    overlay.insertAdjacentElement('afterbegin', image);
  }

  static addOverlay(link, overlay) {
    link.insertAdjacentElement('afterbegin', overlay);
  }

  openImage(event) {
    event.preventDefault();
    this.overlay = Images.createImageOverlay();
    const link = event.target.parentNode;
    const image = Images.createImage(link.href);

    Images.addOverlay(link, this.overlay);
    Images.addImage(this.overlay, image);
    console.log()
    Images.removeOverlayListenet(this.overlay);
  }

  addImagesListener() {
    this.images.forEach(image => {
      image.addEventListener('click', this.openImage);
    });

  }

  static removeOverlayListenet(overlay) {
    if(overlay) {
      overlay.addEventListener('click', event => {
        event.preventDefault();
        if(event.target === overlay) overlay.remove(); 
      });
    }
  }
}