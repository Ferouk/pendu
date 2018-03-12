class CongratsController {
  constructor($state, $rootScope) {
    this.$state =  $state;
    this.$rootScope =  $rootScope;

    if(angular.isUndefined(this.$rootScope.city) || angular.isUndefined(this.$rootScope.username) || angular.isUndefined(this.$rootScope.finalScore) ||  this.$rootScope.city === '' || this.$rootScope.username === '' ){
      this.$state.go('intro');
    }

  }

  // Restart the game and re-initializing $rootScope variables
  restart(){
    this.$rootScope.city = '';
    this.$rootScope.username = '';
    this.$rootScope.username = '';
    this.$rootScope.finalScore = undefined;
    this.$state.go('intro');
  }
}

//Dependencies injection
CongratsController.$inject = ["$state", "$rootScope"];

export default CongratsController;
