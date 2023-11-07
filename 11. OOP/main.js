var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    // Constructor
    function Animal(name, age) {
        this.name = name;
        this.age = age;
    }
    // Method
    Animal.prototype.makeSound = function () {
        console.log("Animal makes a sound.");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    // Constructor
    function Dog(name, age) {
        return _super.call(this, name, age) || this;
    }
    // Method
    Dog.prototype.makeSound = function () {
        console.log("Dog barks!");
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    // Constructor
    function Cat(name, age) {
        return _super.call(this, name, age) || this;
    }
    // Method
    Cat.prototype.makeSound = function () {
        console.log("Cat meows!");
    };
    return Cat;
}(Animal));
// Create instances of Animal, Dog, and Cat
var genericAnimal = new Animal("Generic Animal", 3);
var myDog = new Dog("Buddy", 5);
var myCat = new Cat("Whiskers", 2);
// Call the makeSound method on different objects
genericAnimal.makeSound(); // Outputs: Animal makes a sound.
myDog.makeSound(); // Outputs: Dog barks!
myCat.makeSound(); // Outputs: Cat meows.
