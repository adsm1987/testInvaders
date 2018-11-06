module.exports = {
  'Kill an invader' : function (browser) {
    var game = browser.page.home.game();
    //This will open the page object url defined. In this case wil be just the nightwatch.json one.
    game.navigate();
    game.killInvader(1);
    browser.end()
  },
  'Win a Game' : function (browser) {
    var game = browser.page.home.game();
    game.navigate();
    game.winGame();
    browser.end()
  }
};