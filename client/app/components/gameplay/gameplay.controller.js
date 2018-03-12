class GameplayController {
  constructor($state, $rootScope, $localStorage) {

    // Dependencies injection
    this.$rootScope = $rootScope;
    this.$state = $state;
    this.$localStorage = $localStorage;

    // Check if the username is set otherwise return to intro
    if(this.$rootScope.username === '' || angular.isUndefined(this.$rootScope.username)){
      this.$state.go('intro');
    }

    // Loading Scoreboard from local storage
    this.scoreboard = this.$localStorage.scoreboard || [];
    this.usedChars = [];

    // Initializing score
    this.score = 10;

    // List of words to divine
    const words = [
      'paris',
      'versailles',
      'orly',
      'creteil',
      'vincennes',
      'courbevoie',
      'montreuil',
      'cergy',
      'nanterre',
      'argenteuil',
      'evry',
      'colombes',
      'clichy',
      'meaux',
      'villejuif',
      'melin',
      'bondy',
      'fontainbleau',
      'antony',
      'drancy',
      'bobigny',
      'massy',
      'sarcelles',
      'pantin',
      'pontoise',
      'calamart',
      'puteaux',
      'chelles',
      'antony',
      'pantin'
    ];

    // Hanging levels
    this.levels = [
      'l0',
      'l1',
      'l1',
      'l1',
      'l2',
      'l2',
      'l3',
      'l3',
      'l4',
      'l4'
    ];
    // Initializing hanging level
    this.level = 'l5';

    // Generate random integer between 0 and words array length
    let random = Math.floor(Math.random() * words.length);
    // Generate an array of alphabet
    this.alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    // Randomly choosing a word to divine from words array
    this.word = words[random];
    // Storing city inside rootScope to use on fail/Congrats component
    this.$rootScope.city = this.word;
    // Defining a value for each try
    this.charValue = Math.floor(10 / (this.word.length - 2));

    //Initializing index count
    let i = 0;
    //Initializing word array
    this.wordArray = [];

    // Looping through the word characters
    // Creating an array objects of character, index and whether it was divined or not
    for(let char in this.word){

      // Initially the first/last characters are shown as a hint to help the player
      if(i !== 0 && i !== this.word.length - 1){
        this.wordArray.push({
          char : this.word[char],
          index: i,
          divined: false
        });
      }else{
        this.wordArray.push({
          char : this.word[char],
          index: i,
          divined: true
        });
      }
      i++;
    }
  }

  divine(char){
    let i = 0;
    // Initializing bad answer and unSolved
    let badAnswer = true;
    let unSolved = false;
    // userChars array to mark characters as used
    this.usedChars.push(char);
    //Loop through word characters and check if chosen character exist
    for(let character in this.word){
      if(char === this.word[character]){
        this.wordArray[i].divined = true;
        badAnswer = false;
      }
      i++;
    }
    for(let character in this.wordArray){
      if(this.wordArray[character].divined === false){
        unSolved = true;
      }
    }

    // If the answer is bad (Character doesn't exist in word) score will decrement by character value
    // Level will change based on score
    if(badAnswer){
      this.score -= this.charValue;
      this.level = this.levels[this.score];
    }

    // If score is less than or equal to 0 -> Game over
    // Save results to scoreboard on localStorage and go to failed
    if(this.score <= 0){
      this.$rootScope.finalScore = 0;
      this.scoreboard.push({
        username : this.$rootScope.username,
        finalScore : this.$rootScope.finalScore,
        time: Date.now()
      });
      this.$localStorage.scoreboard = this.scoreboard;
      this.$state.go('failed');
    }


    // If player divined all characters of the world
    // Save results to scoreboard on localStorage and go to congrats
    if(!unSolved){
      this.$rootScope.finalScore = this.score;
      this.scoreboard.push({
        username : this.$rootScope.username,
        finalScore : this.$rootScope.finalScore,
        time: Date.now()
      });
      this.$localStorage.scoreboard = this.scoreboard;
      this.$state.go('congrats');
    }
  }
}

//Dependencies injection
GameplayController.$inject = ['$state', '$rootScope', '$localStorage'];

export default GameplayController;
