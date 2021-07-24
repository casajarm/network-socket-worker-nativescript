// add if building with webpack
const workers = [];


export class WorkerService {
    jsWorker;
    constructor() {}
    initJsWorker() {
        if (this.jsWorker) {
            return this.jsWorker;
        }

        //const JsWorker = require("./worker.js");
        //this.jsWorker = new JsWorker();
        this.jsWorker = new Worker('./worker.js');
        workers.push(this.jsWorker);

        return this.jsWorker;
    }
}

if ((module).hot) {
    (module).hot.dispose(() => {
        workers.forEach(w => {
            w.terminate();
        })
    })
}