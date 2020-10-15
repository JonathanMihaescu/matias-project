// Start the main app logic.
/* for when you have dependencies this is how it would look like
requirejs(['jquery', 'canvas', 'app/sub'],
function   ($,        canvas,   sub) {*/
/* Require will not execute until the dependencies are loaded*/
requirejs(['domReady'],
function (domReady) {
  console.log("common - Working")
    
});