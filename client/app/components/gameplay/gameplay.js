import angular from 'angular';
import uiRouter from 'angular-ui-router';
import GameplayComponent from './gameplay.component';

let gameplayModule = angular.module('gameplay', [
  uiRouter
])

  .config(($stateProvider, $urlRouterProvider) => {
    "ngInject";

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('gameplay', {
        url: '/game',
        component: 'gameplay'
      });
  })
  .component('gameplay', GameplayComponent)
  .name;

export default gameplayModule;
