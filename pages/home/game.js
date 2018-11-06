var gameFunctions = {
  killInvader: function(invaderNumber) {   
    return this
      .wait('@invader')
      .click('@invader')
      .wait('@score')
      .assert.containsText('@score', "Score:".concat(' ', invaderNumber));
      //This could be removed if we add to each invader a custom qa-label
  },
  winGame: function() {
    this.wait('@invader');
    this.api.executeAsync(
      function(selector) {
        let invaders = document.querySelectorAll(selector);
        for (let i = 0; i <= invaders.length; i++) {
          invaders[i].click();
        }
      },
      [this.elements.invader.selector]
    );     
    //Should be used cause we need to wait to change the score label. But this could be remove if we put a qa-label when the label switch.
    this.api.pause(5000);
    return this
      .wait('@score')
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