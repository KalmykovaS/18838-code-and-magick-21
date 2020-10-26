'use strict';

const WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
const WIZARD_LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
const WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
const WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

const userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

const similarListElement = userDialog.querySelector('.setup-similar-list');
const similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

const getRandomItem = function (arr) {
  let index = Math.floor(Math.random() * arr.length);

  return arr[index];
}

const generateRandomWizard = function () {
  let name = getRandomItem(WIZARD_NAMES) + ' ' + getRandomItem(WIZARD_LAST_NAMES);

  let wizard = {
    name: name,
    coatColor: getRandomItem(WIZARD_COAT_COLOR),
    eyesColor: getRandomItem(WIZARD_EYES_COLOR)
  };

  return wizard;
}

const getWizardsArray = function () {
  let wizardsDisplay = [];

  for (let i = 0; i < 4; i++) {
    wizardsDisplay[i] = generateRandomWizard();
  }

  return wizardsDisplay;
}

const renderWizard = function (wizard) {
  let wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
}

const fragment = document.createDocumentFragment();
const wizards = getWizardsArray();

for (let i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);
userDialog.querySelector('.setup-similar').classList.remove('hidden');
