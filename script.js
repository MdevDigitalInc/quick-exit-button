(function() {
  window.onload = init();

  function init() {
    document.getElementById("menu").innerHTML = '<ul class="main-nav-list">'+
    '<li><a href="index.html">Link A</a></li>'+
    '<li><a href="page-2.html">Link B</a></li>'+
    '<li><a href="page-3.html">Link C</a></li>'+
    '<li><a href="page-4.html">Link D</a></li>'+ '</ul>';

    var chk = document.getElementById("button");
    if (chk.hidden == true) {
      console.log("EXIT button is NOT ACTIVE!");
    } else {
      console.log("EXIT button is ACTIVE!");
    }
  }

  function exit() {
    window.location.replace('http://www.weathernetwork.ca');
  };

  var chk = document.getElementById("button");
  document.querySelector("[data-exit-button]").addEventListener("click", exit);

  document.addEventListener('keydown', function(e) {
    console.log(e);
    console.log(e.target.nodeName);
    if (chk.hidden == true && e.which == 81) {
      console.log("'Q' shortcut blocked! No EXIT button on this page.")
    } else if (chk.hidden == false && e.which == 81 && e.target.nodeName == "BODY") {
      exit();
    }
  });
})();