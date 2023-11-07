class Animal {
    // Properties
    name: string;
    age: number;
  
    // Constructor
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    // Method
    makeSound() {
      console.log("Animal makes a sound.");
    }
  }
  
  class Dog extends Animal {
    // Constructor
    constructor(name: string, age: number) {
      super(name, age);
    }
  
    // Method
    makeSound() {
      console.log("Dog barks!");
    }
  }
  
  class Cat extends Animal {
    // Constructor
    constructor(name: string, age: number) {
      super(name, age);
    }
  
    // Method
    makeSound() {
      console.log("Cat meows!");
    }
  }
  
  // Create instances of Animal, Dog, and Cat
  const genericAnimal = new Animal("Generic Animal", 3);
  const myDog = new Dog("Buddy", 5);
  const myCat = new Cat("Whiskers", 2);
  
  // Call the makeSound method on different objects
  genericAnimal.makeSound(); // Outputs: Animal makes a sound.
  myDog.makeSound();         // Outputs: Dog barks!
  myCat.makeSound();         // Outputs: Cat meows.