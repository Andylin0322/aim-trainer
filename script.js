var points=0;
var timeleft = 9;

function timer(){
  var countdown = setInterval(function(){
    document.getElementById("time").innerHTML = timeleft;
    if(timeleft <= 0){
      clearInterval(countdown);
      var final_score = points;
      localStorage.setItem("score", final_score);
      finish();
    }
    timeleft -= 1;
  }, 1000);
}

function jump() {
  var x = (Math.random() * 86) + 5 + "%",
      y = (Math.random() * 71) + 10 + "%";
  document.getElementById("target").style.left = x;
  document.getElementById("target").style.top = y;
  points += 1;
  if (points == 1){
     timer();
     document.getElementById("time").innerHTML = "10";
     document.getElementById("instruction").style.display = "none";
  }
}

function finish() {
  window.location.href="score.html";
}

function display() {
  var final_score = localStorage.getItem("score");
  document.getElementById("score").innerHTML = final_score;
}

document.getElementById("target").addEventListener("click", jump);
