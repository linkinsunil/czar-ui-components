const showElement = toastElement => {
  toastElement.classList.remove('hide');
  toastElement.classList.add('show');
};

const hideElement = toastElement => {
  toastElement.classList.remove('show');
  toastElement.classList.add('hide');
};

/******************** Modal ********************/

const modalDemoBtn = document.querySelector('#modal-demo-btn');

const modalContainer = document.querySelector('#modal-container');
const modalCloseBtn = document.querySelector('#modal-close-btn');

if (modalDemoBtn) {
  modalDemoBtn.addEventListener('click', () => {
    showElement(modalContainer);
  });
}

if (modalContainer) {
  modalContainer.addEventListener('click', event => {
    if (event.currentTarget === event.target) hideElement(modalContainer);
  });
}

if (modalCloseBtn) {
  modalCloseBtn.addEventListener('click', () => {
    hideElement(modalContainer);
  });
}

/******************** Toast ********************/

// Notification Toast

const notificationToastDemoBtn = document.querySelector(
  '#notification-toast-demo-btn'
);

const notificationToast = document.querySelector('#notification-toast');
const toastCrossBtn = document.querySelector('#toast-cross-btn');

if (notificationToastDemoBtn) {
  notificationToastDemoBtn.addEventListener('click', () => {
    showElement(notificationToast);

    setTimeout(() => hideElement(notificationToast), 3000);
  });
}

if (toastCrossBtn) {
  toastCrossBtn.addEventListener('click', () => {
    hideElement(notificationToast);
  });
}
