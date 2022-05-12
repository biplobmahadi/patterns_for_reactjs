const person = {
    name: "John Doe",
    age: 42,
};

const handler = {
    get: (obj: any, prop: any) => {
      if (!obj[prop]) {
        console.log(
          `Hmm.. this property doesn't seem to exist on the target object`
        );
      } else {
        console.log(`The value of ${prop} is ${obj[prop]}`);
      }
    },
    set: (obj: any, prop: any, value: any) => {
      if (prop === "age" && typeof value !== "number") {
        console.log(`Sorry, you can only pass numeric values for age.`);
      } else if (prop === "name" && value.length < 2) {
        console.log(`You need to provide a valid name.`);
      } else {
        console.log(`Changed ${prop} from ${obj[prop]} to ${value}.`);
        obj[prop] = value;
      }
      return true;
    }
}

export const personProxy = new Proxy(person, handler);

// eslint-disable-next-line @typescript-eslint/no-unused-expressions
personProxy.nonExistentProperty;
personProxy.age = "44";
personProxy.name = "";
