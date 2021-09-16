//import {Socket} from "./common.js";
import {androidSocket} from './net2';

let counter = 0;

global.onmessage = function(msg) {
    counter = counter + 2;
    console.log(`${counter}. Received this message from the main thread:  ${msg.data}`);

    // perform some crazy cpu-intensive task here!

//the docs say this is needed for network debugging on android but then switches networking for http .. so not sure this is needed
    //if (global.__inspector && global.__inspector.isConnected) {
    //    let requestData;
        /*
        export interface RequestData {
        requestId: string;
        url: string;
        request: Request;
        timestamp: number;
        type: string;
    }
    */
    //    global.__inspector.requestWillBeSent(requestData);
    //}

    try {
        socket = new androidSocket('10.0.2.2', 4897);
       // socket.connect('127.0.0.1', '1025');
    }
    catch (e) {
        console.log(e);
    }
    
        console.log('created socket');
    let read = socket.writeData('test');
    console.log('read this');
    console.log(read);
    // send a message back to the main thread
    let message = `worker called ${counter}`;
    global.postMessage(message);

   // global.close();
}
