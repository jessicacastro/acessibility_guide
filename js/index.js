const toggleButton = document.getElementById('toggle-button');
const navigationList = document.getElementById('navigation-list');

toggleButton.addEventListener('click', () => {
  navigationList.classList.toggle('active');
  navigationList.classList.toggle('inative');
});
