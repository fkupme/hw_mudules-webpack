import '../css/style.css';
import {readGameSaving as loadGame, writeGameSaving as saveGame } from './game.js';
import Game from './game.js';
import GameSavingData from './game.js';

console.log('app worked')

const game = new Game();
game.start();


console.log({loadGame, saveGame});