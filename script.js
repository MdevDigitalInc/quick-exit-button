(function() {
  function exit() {
    window.location.replace('http://www.weathernetwork.ca');
  };
  
  function eventListeners() {
    document.querySelector("[data-exit-button]").addEventListener("click", exit);
  };
  
  document.addEventListener("DOMContentLoaded", function() { 
    eventListeners();
  });
})();