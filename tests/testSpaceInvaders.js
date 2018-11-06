module.exports = {
  'Kill an invader' : function (browser) {
    var game = browser.page.home.game();
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