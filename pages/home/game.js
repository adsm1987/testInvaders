var gameFunctions = {
  killInvader: function(invaderNumber) {   
    return this
      //This is a custom command to avoid repeating code
      .wait('@invader')
      .click('@invader')
      .wait('@score')
      .assert.containsText('@score', "Score:".concat(' ', invaderNumber));
  },
  winGame: function() {
    this.wait('@invader');
    //TODO this is kinda a hack because the nightwatch click command will not click under divs maybe because the z-index.
    this.api.executeAsync(
      function(selector) {
        let invaders = document.querySelectorAll(selector);
        for (let i = 0; i <= invaders.length; i++) {
          invaders[i].click();
        }
      },
      [this.elements.invader.selector]
    );     
    //TODO Should be used cause we need to wait to change the score label. But this could be remove if we put a qa-label when the label switch.
    this.api.pause(5000);
    return this
      .wait('@score')
      //This label shouldn't be here but because is just one label and will not be reused i will let the label be here
      .assert.containsText('@score', "All threats eliminated. Well done!");
  }
}

module.exports = {
  commands: [gameFunctions],
  url: function() { 
    return this.api.launchUrl; 
  },
  elements: {
    gameFrame: {
      selector: '.game--2RyXZ'
    },
    invader: {
      selector: '.invader--1hKGm'
    },
    score: {
      selector: '.score--1Iov2'
    }
  }
};