import angular from 'angular';
import uiRouter from 'angular-ui-router';
import IntroComponent from './intro.component';

let introModule = angular.module('intro', [
  uiRouter
])
  .config(($stateProvider, $urlRouterProvider) => {
    "ngInject";
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('intro', {
        url: '/',
        component: 'intro'
      });
  })
  .component('intro', IntroComponent)
  .name;

export default introModule;
