//import { NetCommon } from './common';
//export declare class Net extends NetCommon {}
//import { androidSocket  } from './net.android';
import { androidSocket  } from './net';


export class Socket extends androidSocket {};
		
/*
public constructor(ip: string, port: number) {
        super(ip, port);
		this.readStream = new java.io.BufferedReader(new java.io.InputStreamReader(this.getInputStream()));
		this.writeStream = new java.io.BufferedWriter(new java.io.OutputStreamWriter(this.getOutputStream()));
	}
*/

//export { Socket } from './index.android';