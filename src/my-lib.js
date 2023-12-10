// If custom code relies on the Webflow.js library, or jQuery loaded by Webflow,
// it should be wrapped in a function that is pushed to the Webflow global array.
// This ensures that the code will be run AFTER the Webflow provided libraries.
// --------
// window.Webflow ||= [];
// window.Webflow.push(printHelloWorld);

printHelloWorld();

function printHelloWorld() {
  console.log('Hello world!');
}
