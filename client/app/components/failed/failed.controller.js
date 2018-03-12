class FailedController {
  constructor($state, $rootScope) {
    this.$state = $state;
    this.$rootScope = $rootScope;
  }

  // Restart the game and re-initializing $rootScope variables
  restart(){
    this.$rootScope.city = '';
    this.$rootScope.username = '';
    this.$rootScope.finalScore = undefined;
    this.$state.go('intro');
  }
}

//Dependencies injection
FailedController.$inject = ["$state", "$rootScope"];

export default FailedController;
