// var dropdownLink = document.querySelectorAll('.navContentItem');
// for (var i = 0; i < dropdownLink.length; i++) {
//  dropdownLink[i].onclick = function () {
//    dropdown.classList.remove('active');
//    dropdownButtonIcon.classList.remove('fa-times');
//   };
// };

// Dark Theme Switcher and Local Storage
const darkTheme = document.querySelector('#dark-theme');
const darkThemeStorage = localStorage.getItem('gmtDarkTheme');
const metaThemeColor = document.querySelector('meta[name=theme-color]');

if (darkThemeStorage) {
  document.documentElement.classList.add('dark-theme');
  metaThemeColor.setAttribute("content", '#000000');
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

// Scroll
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 3000,
  speedAsDuration: true
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