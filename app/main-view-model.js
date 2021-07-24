import { Observable } from '@nativescript/core';
import { WorkerService } from './workerservice';
//const worker = new Worker('./worker.js');
const worker = new WorkerService().initJsWorker();

function getMessage(counter) {
  if (counter <= 0) {
    return 'Hoorraaay! You unlocked the NativeScript clicker achievement!'
  } else {
    return `${counter} taps left`
  }
}

export function createViewModel() {
  const viewModel = new Observable()
  viewModel.counter = 42
  viewModel.message = getMessage(viewModel.counter)

  viewModel.onTap = () => {
    viewModel.counter--
    viewModel.set('message', getMessage(viewModel.counter))
  }

  viewModel.onWorkerTap = () => {
    console.log('tapped');
    worker.postMessage('test');
  }

  worker.onmessage =(eventMessage) => {
    console.log('received message from worker');
    viewModel.set('message', eventMessage.data);
  }

  return viewModel
}

