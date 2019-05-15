(function() {
  // Load script as soon as the window opens
  window.onload = init();

  function init() {
    // Check if the EXIT button is present on the page
    if (document.getElementById("button").getAttribute("data-keyboard")) {
      // Add an event listener to the EXIT button and link the exit() function
      document.querySelector("[data-exit-button]").addEventListener("click", exit);

      console.log("EXIT button is ACTIVE!");
    } else {
      console.log("EXIT button is NOT ACTIVE!");
      return;
    }

    // Obtain button colour properties
    var btnColor = document.getElementById("button").getAttribute("data-color");
    var btnBackground = document.getElementById("button").getAttribute("data-background");
    var btnBorder = document.getElementById("button").getAttribute("data-border");

    // Change the button colour using user-defined properties
    document.querySelector("[data-exit-button]").style.color = btnColor;
    document.querySelector("[data-exit-button]").style.background = btnBackground;
    document.querySelector("[data-exit-button]").style.border = btnBorder;

    // Check if button-styles are allowed to be customized. If not, use default properties.
    var status = document.getElementById("button").getAttribute("data-button-style");
    if (status === "false") {
      // Default properties
      document.querySelector("[data-exit-button]").style.color = "white";
      document.querySelector("[data-exit-button]").style.background = "darkred";
      document.querySelector("[data-exit-button]").style.border = "3px solid red";
    }
  };

  // A function to exit and redirect the current website to a different one.
  function exit() {
    window.location.replace(document.getElementById("button").getAttribute("data-exit-url"));
  };

  // An event listener to check for keypress.
  document.addEventListener('keydown', function(e) {
    // Check if text is being typed inside a textbox
    var nodeIdentifier = e.target.nodeName;

    // Store keypress inside a variable
    var valueFromKeyboard = e.which;

    // Fetch key designated by user in HTML
    var userKeyCode = document.getElementById("button").getAttribute("data-key");
    /*
      If key is pressed and page has an EXIT button, execute exit(). Otherwise, do not run.
      In addition, the function will not execute if the exit shortcut key is typed in a text
      field.
    */
    if (document.getElementById("button").getAttribute("data-keyboard") && valueFromKeyboard == userKeyCode && nodeIdentifier == "BODY") {
      console.log("Redirecting...");
      exit();
    }
  });
})();