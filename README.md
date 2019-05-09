## 🏎💨 Quick Exit Button 🙅‍♀️
QEB is a button to redirect a website and quickly exit a webpage discretely.

## How it works ✏️
QEB works by utilizing an IFFE (pronounced "iffy"). An IFFE is an *Immediately Invoked Function Expression* that runs as soon as a website loads. IFFE's reduce clutter in the global scope because all variables and functions within it are not visible outside of its scope.

An inital `window.onload` runs the initializing function `init()` when the page first opens up. The functions inside the IFFE for the QEB consists a function and two event listeners. First, the main function `exit()` replaces the active window with a redirected website. Because the URL is being replaced with a new one, the entry is not saved in the browser's history. JavaScript is not able to completely manipulate the user's browsing history. Next, the first event listener attaches a mouse click and the `exit()` function with the actual HTML button. The second event listener waits for a keypress (designated in the `script.js` file), checks if keys are being typed in a textbox, and if the page has the QEB present on the page. If the page does not have the QEB, the function will not execute.

## How to use 📍
1. Enter your desired website URL in the `exit()` function. The URL must be enclosed in quotes (either '' or ""). 
2. To change which key triggers the `exit()` function, decide what key you would like to use and then use `https://keycode.info` to obtain the JavaScript event keycode. 
3. Take this value and replace it with the 81 in `line 19` of the HTML files in the `data-key` attribute.
4. To customize the appearance of the button, adjust the color, background, and border properties if desired in the same line as the previous step. This time, change the `data-color`, `data-background`, and `data-border` properties.

NOTE: No changes need to be done in the `exit-scripts.js` file. Any modifications must be made in the HTML files.

## Resources Used 📚
1. `https://developer.mozilla.org/en-US/docs/Web/API/Location/replace`
2. `https://codeburst.io/javascript-what-the-heck-is-an-immediately-invoked-function-expression-a0ed32b66c18`
3. `https://www.rgraph.net/canvas/docs/the-domcontentloaded-event.html`
4. `https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event`
