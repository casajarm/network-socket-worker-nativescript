"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.androidSocket = void 0;
// java lets us use these buffering stack things
//let writeStream = new java.io.BufferedWriter(new java.io.OutputStreamWriter(nxsocket.getOutputStream()));
//let readStream = new java.io.BufferedReader(new java.io.InputStreamReader(nxsocket.getInputStream()));
function read(readStream) {
    var readOutput = [];
    var line = readStream.readLine();
    readOutput.push(line);
    while (line) {
        line = readStream.readLine();
        readOutput.push(line);
    }
    readStream.close();
    return readOutput;
}
//write  always returns a read
function write(socket, data) {
    //do the write
    //let writeStream = new java.io.BufferedWriter(new java.io.OutputStreamWriter(socket.getOutputStream()));
    //let readStream = new java.io.BufferedReader(new java.io.InputStreamReader(socket.getInputStream()));
    socket.writeStream.write(data);
    socket.writeStream.newLine();
    socket.writeStream.flush();
    //return the read
    return socket.readData;
}
//const androidSocket = androidx.core.net.DatagramSocketWrapper.DatagramSocketImplWrapper;
//const nxsocket2 = new androidx.core.net.DatagramSocketWrapper;
// not sure which is the right one to pick
/* androidx.core.net.DatagramSocketWrapper */
var androidSocket = /** @class */ (function (_super) {
    __extends(java.net.Socket , _super);
    function androidSocket(ip, port) {
        var _this = _super.call(this, ip, port) || this;
        _this.readStream = new java.io.BufferedReader(new java.io.InputStreamReader(_this.getInputStream()));
        _this.writeStream = new java.io.BufferedWriter(new java.io.OutputStreamWriter(_this.getOutputStream()));
        return _this;
    }
    androidSocket.prototype.readData = function () {
        read(this.readStream);
    };
    androidSocket.prototype.writeData = function (data) {
        write(this, data);
    };
    androidSocket = __decorate([
        NativeClass()
    ], androidSocket);
    return androidSocket;
}(java.net.Socket));
exports.androidSocket = androidSocket;
