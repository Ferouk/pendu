import angular from 'angular';
import intro from './intro/intro';
import gameplay from './gameplay/gameplay';
import congrats from './congrats/congrats';
import failed from './failed/failed';

let componentModule = angular.module('app.components', [
  intro,
  gameplay,
  congrats,
  failed
]).name;

export default componentModule;
