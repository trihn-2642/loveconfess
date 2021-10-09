var aparted = false;

$("#open").click(function () {
  if (!aparted) {
    var typed = new Typed(".letter", {
      strings: [
        "^1000Gửi cậu...",
        "À sai rồi!!!",
        "Phải là...",
        "Gửi người tớ yêu!<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Thế gian này đã dành không biết bao nhiêu giấy mực để viết về tình yêu.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Còn tớ, tớ muốn dành cả phần đời còn lại để yêu cậu, để mang lại hạnh phúc cho cậu! Nhưng mà...<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cậu lại không yêu tớ!!!<br><p style='float:right; display:block; width:auto; margin-right: 5px'>Người Yêu Cậu <i class='fas fa-heart-broken' id='heart'></i></p>",
      ],
      typeSpeed: 50,
      backSpeed: 30,
    });

    $("#open").find("span").eq(0).css("background-position", "0 -150px");

    aparted = true;

    var music = document.getElementById("music2");
    if (music.paused) {
      music.play();
      $("#music_btn2").css("opacity", "1");
    }
  }
});

function playPause() {
  var music = document.getElementById("music2");
  var music_btn = $("#music_btn2");

  if (music.paused) {
    music.play();
    music_btn.css("opacity", "1");
  } else {
    music.pause();
    music_btn.css("opacity", "0.2");
  }
}

window.onload = function () {
  var currentUrl = window.location.href;
  var firstIndex = currentUrl.indexOf("#");
  if (firstIndex <= 0) window.location.href = currentUrl + "#contact";

  $("#music2").attr("src", bgmsrc);

  document.addEventListener("touchstart", function (event) {
    if (event.touches.length > 1) event.preventDefault();
  });

  var lastTouchEnd = 0;

  document.addEventListener(
    "touchend",
    function (event) {
      var now = new Date().getTime();
      if (now - lastTouchEnd <= 300) event.preventDefault();
      lastTouchEnd = now;
    },
    false
  );

  document.addEventListener("gesturestart", function (event) {
    event.preventDefault();
  });

  $("body").css("opacity", "1");
  $("#jsi-cherry-container").css("z-index", "-99");
};
