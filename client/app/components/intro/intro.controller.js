class IntroController {
  constructor($state, $rootScope, $localStorage) {
    this.$state = $state;
    this.$localStorage = $localStorage;
    this.$rootScope= $rootScope;
    this.scoreboard = this.$localStorage.scoreboard || [];
    this.$rootScope.username = '';
    this.msg = '';
  }

  startGame(){
    if(this.$rootScope.username === '' || angular.isUndefined(this.$rootScope.username)){
      this.msg = "Veuillez introduire votre nom d'utilisateur pour commencer !";
    }else{
      this.$state.go('gameplay');
    }
  }
}
IntroController.$inject = ['$state', '$rootScope', '$localStorage'];
export default IntroController;
