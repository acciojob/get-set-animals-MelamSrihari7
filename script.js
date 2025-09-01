class Animal {
    constructor(species) {
        this._species = species
    }
    get species() {
        return this._species;
    }
    makeSound() {
        console.log(`The ${this._species} makes a sound.`);
    }
}

class Cat extends Animal {
    constructor(species) {
        super(species);
    }
    purr() {
        console.log("purr");
    }
}

class Dog extends Animal {
    constructor(species) {
        super(species);
    }
    bark() {
        console.log("woof");
    }
}
const myCat = new Cat("Siamese");
myCat.makeSound();
// Expected Output: The Siamese makes a sound

myCat.purr();
// Expected Output: purr

// Creating an instance of Dog
const myDog = new Dog("Golden Retriever");
myDog.makeSound();
// Expected Output: The Golden Retriever makes a sound

myDog.bark();

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
