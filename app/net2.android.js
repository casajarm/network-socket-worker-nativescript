function read(readStream) {
	let readOutput = [];
	let line = readStream.readLine();
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

	socket.writeStream.write(data);
	socket.writeStream.newLine();
	socket.writeStream.flush();

	//return the read
	return socket.readData;
}

// not sure which is the right one to pick
/* androidx.core.net.DatagramSocketWrapper or java.net.Socket */

/*@NativeClass() */
export 
class androidSocket extends java.net.Socket {
	static constructorCalled = false;
	// constructor
	//constructor(ip: string, port: number) {
	//	super(ip, port);
	constructor() {
		super();
		this.readStream = new java.io.BufferedReader(new java.io.InputStreamReader(this.getInputStream()));
		this.writeStream = new java.io.BufferedWriter(new java.io.OutputStreamWriter(this.getOutputStream()));

		androidSocket.constructorCalled = true;
		return global.__native(this);
	}
    address;//: java.net.SocketAddress;
	readStream;//: java.io.BufferedReader;
	writeStream;//: java.io.BufferedWriter;
	readData() {
		read(this.readStream);
	}
	writeData(data) {
		write(this, data);
	}
}