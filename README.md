## 🏎💨 Quick Exit Button 🙅‍♀️
QEB is a button to redirect a website and remove traces from the history after being pressed.

## How it works ✏️
QEB works by utilizing an IFFE (pronounced "iffy"). An IFFE is an *Immediately Invoked Function Expression* that runs as soon as a website loads. IFFE's reduces clutter in the global scope because all variables and functions within it are not visible outside of its scope.

The functions inside the IFFE consists of three functions. The first is a function to replace the active window with a redirected website. Because the URL is being replaced with a new one, the entry is **not** saved in the browser's history, which also means that when the button is pressed, the back button **won't** go anywhere. The next function attaches an event handler to the button. The third function loads the page in an efficient manner.

## How to use 📍
Simply add a data attribute to your desired button in the HTML file. You will then have to use a querySelector to target your button in the JavaScript. Lastly, enter your desired website URL in the `exit()` function.

## Resources Used 📚
1. `https://developer.mozilla.org/en-US/docs/Web/API/Location/replace`
2. `https://codeburst.io/javascript-what-the-heck-is-an-immediately-invoked-function-expression-a0ed32b66c18`
3. `https://www.rgraph.net/canvas/docs/the-domcontentloaded-event.html`
4. `https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event`