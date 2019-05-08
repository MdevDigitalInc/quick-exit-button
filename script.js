(function() {
  // Load script as soon as the window opens
  window.onload = init();

  function init() {
    // Add an event listener to the EXIT button and link the exit() function
    document.querySelector("[data-exit-button]").addEventListener("click", exit);

    // Change the button colour
    document.querySelector("[data-exit-button]").style.color = "white";
    document.querySelector("[data-exit-button]").style.background = "orange";
    document.querySelector("[data-exit-button]").style.border = "3px solid darkorange";

    /*
      Optional presentation functionality.
      Copy the same values for color, background, and border as above for these attributes.
    */
    document.querySelector("[data-exit-button]").onmouseout = function () {
      this.style.color = "white";
      this.style.background = "orange";
      this.style.border = "3px solid darkorange";
    }

    /*
      Here, use different colours for when your mouse is not hovering the button.
      ie. Try these different colour combinations!
      background = "red" and border = "darkred"
      background = "blue" and border = "darkblue"
    */
    document.querySelector("[data-exit-button]").onmouseover = function () {
      this.style.color = "white";
      this.style.background = "lightgray";
      this.style.border = "3px solid darkgray";
    }
  };

  /*
    Replace the URL in this function with your desired website address. The URL must be enclosed in quotes
    by using either '' or "".
  */
  function exit() {
    window.location.replace('http://www.weathernetwork.ca');
  };

  // An event listener to check for keypress.
  document.addEventListener('keydown', function(e) {
    var checkButton = document.getElementById("button");
    var nodeIdentifier = e.target.nodeName;
    var keyCode = e.which;

    /*
      Once you decide on your desired key, replace the keyCode value with yours.
      To find JavaScript event keycodes, refer here: https://keycode.info

      If key is pressed and page has an EXIT button, execute exit(). Otherwise, do not run.
      In addition, the function will not execute if the exit shortcut key is typed in a text
      field.
    */
    if (checkButton.hidden == true && keyCode == 81) {
      return;
    } else if (checkButton.hidden == false && keyCode == 81 && nodeIdentifier == "BODY") {
      exit();
    }
  });
})();