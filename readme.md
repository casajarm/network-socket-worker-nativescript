## native device sockets in nativescript
Requires NativeScript (see https://docs.nativescript.org/start/quick-setup for instructions on setting up the CLI)

Abandoning and archiving this repo

I was trying to get raw sockets that are exposed from core Nativescript and use them in JS
Starting with Android you cannot run networking on main thread so this requires workers
Workers are relatively new in NativeScript
I eventually gave up for several reasons
First there is no way to connect to the worker thread to inspect what it is doing and it errors out somewhat ambiguously
Digging deeper I cannot see how the android socket coming from NativeScript has ever been tested
Testing would require workers which is new and I see nothing to indicate this test exists. I can be wrong but after countless hours trying to work with NativeScript I just don't find it a match for me.


* git clone https://github.com/casajarm/Handbill
* cd Handbill
* npm run ios
* npm run android