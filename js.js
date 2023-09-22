let log = "log";
let globVar = 5;

//1
console.log("outerVar is block-scoped and innerVar is a nested block-scope.");

hoistDraft();
//2
function hoistDraft() {
    console.log("this is weird");
}



//3
function jsFunc() {
    return hoistDraft();
}
jsFunc();


//4
function modLog() {
    log = "big log";
}
function locLog() {
    let log = "log";
}
modLog();
locLog();



//5
function peram(a) {
     a = 1
    retrn(a+2,3);
}

peram();

function retrn(a, b) {
    console.log(a+b);
}



//6
function testHoist() {
    console.log(z);
    var z = 1;
}

testHoist();

//7
function sevenCount() {
    let number = 1;
    function sevenCountP2() {
        number++;
        console.log(number);
        
    }
    sevenCountP2();
}
sevenCount();

//8
function countFunc() {
    let count = 1;
     function innerFunc() {
        for (var i = 1; i < 10; i++) {
        count++
        console.log(count);

        }
        if (i = 10){
            i = 0
            console.log(i);
        }
    }
    innerFunc();
}
countFunc();



//9
function modGlobeVar() {
    globVar = 4;
    return modGlobeInnerFunc();
    function modGlobeInnerFunc() {

    }

}
function modLocalVar() {
    let locVar = 5;
    locVar = 4;
}









//week 4 exercises
const global2 = function global2() {
    console.log(this);
}
global2();
const user = {
    object1: 1,
    object2: function objmeth() {
        console.log(this);
        const arrow = () => {
            console.log(this);
        }
        arrow();
    }

}
user.object2();


//2 & 3
class Person {
    
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet(greeting) {
        console.log(`${greeting} ${this.name}!`);
    }
    //4
    info() {
        return("this is a Person class")
    }
    //info();
    //writing info(); normally would call on the function but in a class it makes the function/method
    //5
    get newAge() {
        return age;
    }
    set newAge(x) {
        if (x < 0) {
            console.log("that's not how age work you silly");
        } else {
            this.age = x;
            console.log(this.age);
        }
        
    }
}
const person1 = new Person("american", 33);
person1.greet("hello");
const person2 = new Person("mexican", 69);
person2.greet("hola");
person2.info();

person2.newAge = -69;
class Student {
    constructor(name, grades) {
        this.name = name;
        this.grades = grades;
    }
    
}




