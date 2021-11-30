window.onload = function() {
  const toggleButton = document.getElementById('toggle-button');
  const navigationList = document.getElementById('navigation-list');
  const bodyElement = document.querySelector('body');

  const whiteMode = document.getElementById('whiteMode');
  const blackMode = document.getElementById('blackMode');
  const grayMode = document.getElementById('grayMode');

  const fontUp = document.getElementById('fontUp');
  const fontDown = document.getElementById('fontDown');
  const increaseDecrease = 0.10;
  var fontSize = 1;

  toggleButton.addEventListener('click', () => {
    navigationList.classList.toggle('active');
    navigationList.classList.toggle('inative');
  });

  fontUp.addEventListener('click', () => {
    if (fontSize <= 1.60) {
      fontSize += increaseDecrease;
      bodyElement.style.fontSize = fontSize + 'em';
    }
  });

  fontDown.addEventListener('click', () => {
    console.log('clicou diminuir')
    if (fontSize !== 1) {
      console.log('entrei')
      fontSize = fontSize - increaseDecrease;
      bodyElement.style.fontSize = fontSize + 'em';
    }
  });

  whiteMode.addEventListener('click', () => {
    bodyElement.classList.toggle('whiteMode');
  })

  blackMode.addEventListener('click', () => {
    bodyElement.classList.toggle('blackMode');
  })
}