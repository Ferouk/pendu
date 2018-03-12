import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngStorage from 'ngstorage';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css';

angular.module('app', [
  uiRouter,
  ngStorage.name,
  Components
])
  .config(($locationProvider) => {
    "ngInject";
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent);
