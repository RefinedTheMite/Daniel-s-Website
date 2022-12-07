setScreen("welcome_screen");
var score = 0;
onEvent("start_dough", "click", function( ) {
  setScreen("game_screen");
  setTimeout(function() {
    setProperty("score", "text", score);
    setScreen("score_screen");
  }, 15000);
});
onEvent("Restart", "click", function( ) {
  setScreen("welcome_screen");
  score = 0;
});
onEvent("bad_thing", "click", function( ) {
  score = score - 1;
  setPosition("bad_thing", randomNumber(30, 300), randomNumber(30, 420), randomNumber(25, 125), randomNumber(10, 225));
  setPosition("good_thing", randomNumber(30, 300), randomNumber(30, 300), 100, 100);
});
onEvent("good_thing", "click", function( ) {
  score = score + 1;
  setPosition("good_thing", randomNumber(30, 300), randomNumber(30, 420), randomNumber(10, 300), randomNumber(10, 225));
  setPosition("bad_thing", randomNumber(30, 300), randomNumber(30, 420), randomNumber(10, 300), randomNumber(10, 300));
});
