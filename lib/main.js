// ModalNotification
var colorNotification = document.querySelector('#color-notification');

// Open ModalNotification
function openColorNotification() {
  colorNotification.style.display = 'block';
  overlay.classList.add('show-o');
}

// Close ModalNotificationOnDelay
function closeColorNotificationOnDelay() {
  setTimeout(function () {
    colorNotification.style.display = 'none';
    overlay.classList.remove('show-o');
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

const colorNavBtn = document.querySelector('#color-nav-btn');
const colorNav = document.querySelector('#color-nav');
const overlay = document.querySelector('#overlay');

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
const shareBtn = document.querySelector('#share-btn');
shareBtn.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      title: 'ColorFinder',
      url: 'https://colorfinder.netlify.com'
    }).then(() => {
      console.log('Obrigado por Compartilhar!');
    }).catch(console.error);
  } else {
    shareBtn.classList.add('no-share');
  }
});

// Color Sections Vars
const grayColors = document.querySelector('#gray-colors');
const blueColors = document.querySelector('#blue-colors');
const redColors = document.querySelector('#red-colors');
const pinkColors = document.querySelector('#pink-colors');
const orangeColors = document.querySelector('#orange-colors');
const brownColors = document.querySelector('#brown-colors');
const yellowColors = document.querySelector('#yellow-colors');
const whiteColors = document.querySelector('#white-colors');
const purpleColors = document.querySelector('#purple-colors');
const greenColors = document.querySelector('#green-colors');

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