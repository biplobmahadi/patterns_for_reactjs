// mixin is an object - Add functionality to objects or classes without inheritance
class Dog {
    private name;
    constructor(name: string) {
        this.name = name;
    }
  }
  
  const dogFunctionality = {
    bark: () => console.log("Woof!"),
    wagTail: () => console.log("Wagging my tail!"),
    play: () => console.log("Playing!")
  };
  
  Object.assign(Dog.prototype, dogFunctionality);

// one mixin can inherit another mixin