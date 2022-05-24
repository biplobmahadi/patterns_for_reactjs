// subcribe something
// notify with one function call to all subcriber

class Observable {
    observers: any[];
    constructor() {
      this.observers = [];
    }
  
    subscribe(func: any) {
      this.observers.push(func);
    }
  
    unsubscribe(func: any) {
      this.observers = this.observers.filter((observer: any) => observer !== func);
    }
  
    notify(data: any) {
      this.observers.forEach((observer: any) => observer(data));
    }
  }

function logger(data: any) {
  console.log(`${Date.now()} ${data}`);
}

function toastify(data: any) {
  alert(data);
}

let observable = new Observable()
observable.subscribe(logger);
observable.subscribe(toastify);

export default function AppMain() {
  function handleClick() {
    observable.notify("User clicked button!");
  }

  function handleToggle() {
    observable.notify("User toggled switch!");
  }

  return (
    <div className="App">
      <button onClick={handleClick}>click</button>
      <button onClick={handleToggle}>toggle</button>
    </div>
  );
}