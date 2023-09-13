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