export default class Tab {

  constructor(tabLinks, tabContents, activeClass, activeElement = null) {
    this.tabLinks = document.querySelectorAll(tabLinks);
    this.tabContents = document.querySelectorAll(tabContents);
    this.activeClass = activeClass;
    this.activeElement = activeElement;
  }

  addTabLinksListeners() {
    this.tabLinks.forEach(link => {
      link.addEventListener('click', event => {
        const target = event.currentTarget;
        const linkIndex = this.findLinkIndex(target);

        this.removeActiveClass();
        this.hideTabContent();

        this.addActiveClass(target);
        this.showTabContent(linkIndex);
      });
    });
  }

  addActiveClass(target) {
    if(this.activeElement) {
      target.querySelector(this.activeElement).classList.add(this.activeClass);
    } else {
      target.classList.add(this.activeClass);
    }
  }

  removeActiveClass() {
    this.tabLinks.forEach(link => {
      if(this.activeElement) {
        link.querySelector(this.activeElement).classList.remove(this.activeClass);
      } else {
        link.classList.remove(this.activeClass);
      }
    });
  }

  findLinkIndex(link) {
    let index;
    this.tabLinks.forEach((item, i) => {
      if(item === link) index = i;
    });
    return index;
  }

  showTabContent(linkNumber) {
    this.tabContents.forEach((tab, index) => {
      if(index === linkNumber) {
        tab.style.display = 'block';
      }
    });
  }

  hideTabContent() {
    this.tabContents.forEach((tab) => {
      tab.style.display = 'none';
    });
  }



}