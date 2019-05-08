## 🏎💨 Quick Exit Button 🙅‍♀️
QEB is a button to redirect a website and remove traces from the history after being pressed.

## How it works ✏️
QEB works by utilizing an IFFE (pronounced "iffy"). An IFFE is an *Immediately Invoked Function Expression* that runs as soon as a website loads. IFFE's reduce clutter in the global scope because all variables and functions within it are not visible outside of its scope.

An inital onload function runs the initializing function `init()` when the page first opens up. The functions inside the IFFE for the QEB consists a function and two event listeners. First, the main function `exit()` replaces the active window with a redirected website. Because the URL is being replaced with a new one, the entry is not saved in the browser's history. JavaScript is not able to completely manipulate the user's browsing history. Next, the first event listener attaches a mouse click and the `exit()` function with the actual HTML button. The second event listener waits for a keypress (designated in the `script.js` file), checks if keys are being typed in a textbox, and if the page has the QEB present on the page. If the page does not have the QEB, the function will not execute.

## How to use 📍
1. Enter your desired website URL in the `exit()` function. The URL must be enclosed in quotes (either '' or ""). 
2. To change which key triggers the `exit()` function, decide what key you would like to use and then use `https://keycode.info` to obtain the JavaScript event keycode. 
3. Take this value and replace it with the 81 in `line 59` and `line 61`.
4. To customize the appearance of the button, adjust the color, background, and border properties if desired in the `init()` function. If changed, be sure to copy the same values to `line 19`, `line 20`, and `line 21`. The hovering colours on the button may be changed as well if desired. The properties on the hovering will not have to be copied anywhere else.

## Resources Used 📚
1. `https://developer.mozilla.org/en-US/docs/Web/API/Location/replace`
2. `https://codeburst.io/javascript-what-the-heck-is-an-immediately-invoked-function-expression-a0ed32b66c18`
3. `https://www.rgraph.net/canvas/docs/the-domcontentloaded-event.html`
4. `https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event`
