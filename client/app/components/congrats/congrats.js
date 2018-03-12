import angular from 'angular';
import uiRouter from 'angular-ui-router';
import CongratsComponents from './congrats.component';

let congratsModule = angular.module('congrats', [
  uiRouter
])

  .config(($stateProvider, $urlRouterProvider) => {
    "ngInject";

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('congrats', {
        url: '/congrats',
        component: 'congrats'
      });
  })
  .component('congrats', CongratsComponents)
  .name;

export default congratsModule;
