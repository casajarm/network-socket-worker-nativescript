// worker.js
//require("tns-core-modules/globals");

//import global from 'globals'

/* worker thing fails on "path". cannot find the file. Github has lots of compaints and no answers. everything in this nativescript world is hidden knowledge

so lets try to find what is the current path
import { knownFolders, Folder, File } from "@nativescript/core"; // even the docs tell me to find this package somewhere other than where it really is
let appPath = knownFolders.currentApp().path;
console.log('app/worker file is here: ' + appPath);
*/
let counter = 0;

global.onmessage = function(msg) {
    counter = counter + 10;
    console.log(`${counter}. Received this message from the main thread:  ${msg.data}`);

    // perform some crazy cpu-intensive task here!
   
    // send a message back to the main thread
    let message = `worker called ${counter}`;
    global.postMessage(message);

   // global.close();
}
