export class Tab {

  constructor(tabLinks, tabContents) {
    this.tabLinks = document.querySelectorAll(tabLinks);
    this.tabContents = document.querySelectorAll(tabContents);
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
    target.querySelector('a').classList.add('active');
  }

  removeActiveClass() {
    this.tabLinks.forEach(link => {
      link.querySelector('a').classList.remove('active');
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