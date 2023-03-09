// opgave10.1.js
class Person {
    constructor(navn) { this.navn = navn; }
    toString() { return this.navn; }
    equals(p) { return p instanceof Person && p.navn === this.navn;}
}
class Studerende extends Person {
    constructor(navn, id) { super(navn); this.id = id; }
    toString() { return super.toString() + ": " + this.id; };
    equals(s) { return s instanceof Studerende && s.navn === this.navn && s.id === this.id;}
}  

class Group { 
    constructor() {
        this.group = [];
    }

    add(p) {
        this.group.push(p);
    }

    has(p) {
        return this.group.includes(p);
    }
    delete(p) {
        let index = this.group.indexOf(p);
        if (index !== -1) {
            this.group.splice(index, 1);
        }
    }

    static from(iterable) {
        let group = new Group();
        for (let p of iterable) {
            group.add(p);
        }
        return group;
    }
}
class StringStack {
    constructor() {
        this.stack = [];
    }

    push(str) {
        this.stack.push(str);
    }

    pop() {
        return this.stack.pop();
    }

    peek() {
        return this.stack[this.stack.length - 1];
    }

    isEmpty() {
        return this.stack.length === 0;
    }
}

let p1 = new Person("Viggo");
let p2 = new Person("Børge");
let s1 = new Studerende("Ida", 123);
let s2 = new Studerende("Ole", 123);

let liste = [p1, p2, s1, s2];

class Kat {
    constructor(navn) { this.navn = navn; }
    toString() { return 'Kat: ' + this.navn; };
}

function compare(a, b) {
    if (a.toString() < b.toString()) return -1;
    if (a.toString() > b.toString()) return 1;
    return 0;
}


console.log("p1 = p2? " + p1.equals(p2));
console.log("p1 = p1? " + p1.equals(p1));
console.log("s1 = s2? " + s1.equals(s2));
console.log("s1 = s1? " + s1.equals(s1));

let sortliste = liste.sort(compare);
console.log("Sorteret liste: " + sortliste.toString());


let kat1 = new Kat("Bellyboi");
let kat2 = new Kat("Backboi");

liste.push(kat1);
liste.push(kat2);

let sortliste2 = liste.sort(compare);
console.log("Sorteret liste med kat: " + sortliste2.toString());

let Group1 = Group.from(liste);
console.log("Nuværende gruppe: " + Group1.group.toString());
console.log("Findes p1 i gruppen? " + Group1.has(p1));
Group1.delete(p1);
console.log("Findes p1 i gruppen? " + Group1.has(p1));
console.log("Nuværende gruppe: " + Group1.group.toString());
