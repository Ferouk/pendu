import angular from 'angular';
import uiRouter from 'angular-ui-router';
import FailedComponent from './failed.component';

let failedModule = angular.module('failed', [
  uiRouter
])

  .config(($stateProvider, $urlRouterProvider) => {
    "ngInject";

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('failed', {
        url: '/failed',
        component: 'failed'
      });
  })
  .component('failed', FailedComponent)
  .name;

export default failedModule;
