const languageSwitch = document.getElementById('languageSwitch');
const flipContainer = document.querySelector('.flip-container');
const languageText = document.getElementById('languageText');

languageSwitch.addEventListener('change', function () {
  if (this.checked) {
    flipContainer.classList.add('active');
    languageText.textContent = 'Langue : Anglais';
  } else {
    flipContainer.classList.remove('active');
    languageText.textContent = 'Langue : Français';
  }
});
