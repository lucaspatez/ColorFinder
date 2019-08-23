// Scroll
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 3000,
  speedAsDuration: true
});

// Dark Theme Switcher and Local Storage
const darkTheme = document.querySelector('#dark-theme');
const darkThemeStorage = localStorage.getItem('gmtDarkTheme');
const metaThemeColor = document.querySelector('meta[name=theme-color]');

if (darkThemeStorage) {
  document.documentElement.classList.add('dark-theme');
  metaThemeColor.setAttribute("content", '#000000');

  darkTheme.checked = true;
};

darkTheme.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-theme');

  if (document.documentElement.classList.contains('dark-theme')) {
    localStorage.setItem('gmtDarkTheme', true);
    metaThemeColor.setAttribute("content", '#000000');
    return;
  } else {
    localStorage.removeItem('gmtDarkTheme');
    metaThemeColor.setAttribute("content", '#ffffff');
  }
});

// ModalNotification
var colorNotification = document.querySelector('#color-notification');

// Open ModalNotification
function openColorNotification() {
  colorNotification.style.display = 'block';
}

// Close ModalNotificationOnDelay
function closeColorNotificationOnDelay() {
  setTimeout(function () {
    colorNotification.style.display = 'none';
  }, 1100);
}

// Clipboard
var clipboard = new ClipboardJS('.color-btn');

clipboard.on('success', function (e) {
  openColorNotification();
  closeColorNotificationOnDelay();
  console.log('Action:', e.action);
  console.log('Text:', e.text);
  console.log('Trigger:', e.trigger);

  e.clearSelection();
});

clipboard.on('error', function (e) {
  alert('Erro! Não Foi possível copiar.');
  console.error('Action:', e.action);
  console.error('Trigger:', e.trigger);
});

// ColorNav
var colorNavBtn = document.querySelector('#color-nav-btn');
var colorNav = document.querySelector('#color-nav');
var colorNavLink = document.querySelectorAll('#color-nav ul li a');
var colorNavOverlay = document.querySelector('#color-nav-overlay');

// Open and close menu when the button is clicked
var open = false;

colorNavBtn.addEventListener('click', () => {
  checkNav();
});

for (var i = 0; i < colorNavLink.length; i++) {
  colorNavLink[i].onclick = function () {
    closeNav();
  };
};

colorNavOverlay.addEventListener('click', () => {
  closeNav();
});

function checkNav() {
  if (!open) {
    openNav();
  } else {
    closeNav();
  }
}

function openNav() {
  open = true;
  colorNavBtn.innerHTML = "-";
  colorNav.classList.add('opened');
  colorNavOverlay.classList.add('visible');
}

function closeNav() {
  open = false;
  colorNavBtn.innerHTML = "+";
  colorNav.classList.remove('opened');
  colorNavOverlay.classList.remove('visible');
}