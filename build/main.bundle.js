'use strict';

// SmoothScroll

var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
  easing: "easeInOutQuad",
  updateURL: true
});

// ModalNotification
var colorNotification = document.querySelector('#color-notification');

// Open ModalNotification
function openColorNotification() {
  colorNotification.classList.add('show-cn');
  overlay.classList.add('show-o');
}

// Close ModalNotificationOnDelay
function closeColorNotificationOnDelay() {
  setTimeout(function () {
    colorNotification.classList.remove('show-cn');
    overlay.classList.remove('show-o');
  }, 1100);
}

// Clipboard
var clipboard = new ClipboardJS('.colorCardBtn');

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
var overlay = document.querySelector('#overlay');

function toggleNav() {
  if (!colorNav.classList.contains('opened')) {
    colorNav.classList.add('opened');
    overlay.classList.add('show-o');
    document.body.classList.add('no-scroll');
    document.documentElement.classList.add('no-scroll');
  } else {
    colorNav.classList.remove('opened');
    overlay.classList.remove('show-o');
    document.body.classList.remove('no-scroll');
    document.documentElement.classList.remove('no-scroll');
  }
}

colorNavBtn.addEventListener('click', toggleNav, false);
colorNav.addEventListener('click', toggleNav, false);
overlay.addEventListener('click', toggleNav, false);

// Share API
var shareBtn = document.querySelector('#share-btn');
shareBtn.addEventListener('click', function (event) {
  if (navigator.share) {
    navigator.share({
      title: 'ColorFinder',
      url: 'https://colorfinder.netlify.com'
    }).then(function () {
      console.log('Obrigado por Compartilhar!');
    }).catch(console.error);
  } else {
    shareBtn.classList.add('no-share');
  }
});

// Color Sections Vars
var grayColors = document.querySelector('#gray-colors');
var blueColors = document.querySelector('#blue-colors');
var redColors = document.querySelector('#red-colors');
var pinkColors = document.querySelector('#pink-colors');
var orangeColors = document.querySelector('#orange-colors');
var brownColors = document.querySelector('#brown-colors');
var yellowColors = document.querySelector('#yellow-colors');
var whiteColors = document.querySelector('#white-colors');
var purpleColors = document.querySelector('#purple-colors');
var greenColors = document.querySelector('#green-colors');

// JumpTo Functions
function jumtpToGrayColors() {
  grayColors.scrollIntoView({
    behavior: "smooth"
  });
};

function jumpToBlueColors() {
  blueColors.scrollIntoView({
    behavior: "smooth"
  });
};

function jumpToRedColors() {
  redColors.scrollIntoView({
    behavior: "smooth"
  });
};

function jumpToPinkColors() {
  pinkColors.scrollIntoView({
    behavior: "smooth"
  });
};

function jumpToOrangeColors() {
  orangeColors.scrollIntoView({
    behavior: "smooth"
  });
};

function jumpToBrownColors() {
  brownColors.scrollIntoView({
    behavior: "smooth"
  });
};

function jumpToYellowColors() {
  yellowColors.scrollIntoView({
    behavior: "smooth"
  });
};

function jumpToWhiteColors() {
  whiteColors.scrollIntoView({
    behavior: "smooth"
  });
};

function jumpToPurpleColors() {
  purpleColors.scrollIntoView({
    behavior: "smooth"
  });
};

function jumpToGreenColors() {
  greenColors.scrollIntoView({
    behavior: "smooth"
  });
};

// Keyboard Shortcuts
document.onkeyup = function (e) {
  if (e.shiftKey && e.which == 49) {
    jumtpToGrayColors();
  } else if (e.shiftKey && e.which == 50) {
    jumpToBlueColors();
  } else if (e.shiftKey && e.which == 51) {
    jumpToRedColors();
  } else if (e.shiftKey && e.which == 52) {
    jumpToPinkColors();
  } else if (e.shiftKey && e.which == 53) {
    jumpToOrangeColors();
  } else if (e.shiftKey && e.which == 54) {
    jumpToBrownColors();
  } else if (e.shiftKey && e.which == 55) {
    jumpToYellowColors();
  } else if (e.shiftKey && e.which == 56) {
    jumpToWhiteColors();
  } else if (e.shiftKey && e.which == 57) {
    jumpToPurpleColors();
  } else if (e.shiftKey && e.which == 48) {
    jumpToGreenColors();
  }
};

// Dark Theme Fixes
function changeMetaTheme() {
  var metaThemeColor = document.querySelector("meta[name=theme-color]");
  if (!window.matchMedia(" (prefers-color-scheme: dark) ").matches) {
    metaThemeColor.setAttribute('content', '#ffffff');
  } else {
    metaThemeColor.setAttribute('content', '#000000');
  }
}

changeMetaTheme();
