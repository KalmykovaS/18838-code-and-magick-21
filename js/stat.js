'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const CLOUD_GAP = 10;
const FONT_GAP = 20;
const COLUMN_X = 140;
const COLUMN_Y = 90;
const COLUMN_GAP = 50;
const COLUMN_WIDTH = 40;
const COLUMN_MAX_HEIGHT = 150;
const COLUMN_TEXT_Y = 250;
const COLUMN_STEP = COLUMN_WIDTH + COLUMN_GAP;

const renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

const getMaxElement = function (arr) {
  let maxElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

const getRandomInt = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min)) + min;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');

  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + CLOUD_GAP * 2, CLOUD_Y + CLOUD_GAP * 2);
  ctx.fillText('Список результатов:', CLOUD_X + CLOUD_GAP * 2, CLOUD_Y + CLOUD_GAP * 2 + FONT_GAP);

  const maxTime = getMaxElement(times);

  for (let i = 0; i < names.length; i++) {
    ctx.fillText(names[i], COLUMN_X + COLUMN_STEP * i, COLUMN_TEXT_Y);
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(255, 100%, ' + getRandomInt(0, 100) + '%' + ')';
    }
    let columnHeight = COLUMN_MAX_HEIGHT * times[i] / maxTime;
    let columnOffset = COLUMN_MAX_HEIGHT - columnHeight;
    let columnTop = COLUMN_Y + columnOffset;
    ctx.fillRect(COLUMN_X + COLUMN_STEP * i, columnTop, COLUMN_WIDTH, columnHeight);
    ctx.fillStyle = '#000000';
    ctx.fillText(Math.round(times[i]), COLUMN_X + COLUMN_STEP * i, columnTop - 20);
  }
};
