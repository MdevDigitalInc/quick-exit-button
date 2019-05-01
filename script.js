function exit() {
    window.location.replace('http://www.weathernetwork.ca');
    // window.open("http://www.google.ca", "_newtab");
}

function eventListeners() {
    document.getElementById("exit-button").addEventListener("click", exit);
}

document.addEventListener("DOMContentLoaded", function() { 
    eventListeners();
});