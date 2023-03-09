function Animal(name, age){
    this.name = name;
    this.age = age;
}

let dumbassSquarrel = new Animal('Krølle', 1);
console.log(dumbassSquarrel.name);
console.log(dumbassSquarrel.age);

let dog = new Animal('Gewir the dawg', 2);
console.log(dog.name);
console.log(dog.age);

let baldeagle = new Animal('Eagle', 3);
console.log(baldeagle.name);
console.log(baldeagle.age);

Animal.prototype.canRun = function(){
    console.log(this.name + " can run");
};
dog.canRun();
dumbassSquarrel.canRun();
baldeagle.canRun();



function Human(name, age, money){
    //this.name = name;
    //this.age = age;
    Animal.call(this, name, age);
    this.money = money;
}
Human.prototype.CanEarnMoney = function(){
    console.log(this.name + " can earn money");
};

let human1 = new Human('Gehwir', 20, 100);
console.log("Navn: " + human1.name);
console.log("Alder: " + human1.age);
console.log("Skrilla: " + human1.money);

let human2 = new Human('Krølle', 20, 50);
console.log("Navn: " + human2.name);
console.log("Alder: " + human2.age);
console.log("Skrilla: " + human2.money);



human1.CanEarnMoney();
human2.CanEarnMoney();

//Linker human2 til Animal.prototype
Human.prototype.__proto__ = Animal.prototype;
//Tester om human2 kan run
human2.canRun();

//human1.canRun();