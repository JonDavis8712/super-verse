function toggleButtonAndTab(buttonId) {
    const buttons = document.querySelectorAll(`button.single-tab-head`);
    buttons.forEach((button) => {
      if (button.getAttribute('data-id') === buttonId) {
        button.classList.add('active-btn');
      } else {
        button.classList.remove('active-btn');
      }
    });
  
    const tabs = document.querySelectorAll(`ul.single-tab`);
    tabs.forEach((tab) => {
      if (tab.getAttribute('data-id') === buttonId) {
        tab.classList.add('active-tab');
      } else {
        tab.classList.remove('active-tab');
      }
    });
  }
  
  export default toggleButtonAndTab;