function highScore() {
  var string_score = document.getElementById("score").textContent;
  var final_score = parseInt(string_score);
  var highscore = localStorage.getItem("highscore");
  if(highscore !== null){
      if (final_score > highscore) {
          localStorage.setItem("highscore", final_score);
      }
  }
  else{
      localStorage.setItem("highscore", final_score);
  }
  var high_score = localStorage.getItem("highscore");
  document.getElementById("high_score").innerHTML = high_score;
}
