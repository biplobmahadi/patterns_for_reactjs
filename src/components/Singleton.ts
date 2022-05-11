// Singletons are classes which can be instantiated once (only one instance of that class), and can be accessed globally.

// redux or react context is like singleton which works like global state.

let counter: number = 0;
let instance: Object;

class Counter {
    constructor() {
        if(instance) {
            throw new Error('Only one instance can be created!');
        }
        instance = this;
    }

    getInstance() {
        return this;
    }

    getCount() {
        return counter;
    }

    increment() {
        return ++counter;
    }

    decrement() {
        return --counter;
    }
}

const singletonCounter = Object.freeze(new Counter());
export default singletonCounter;
