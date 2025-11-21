function HelloWRLD() {
document.getElementById("output1").innerHTML = "Hello World!";
console.log("HELLO YOU!");
}
  
let text
{ if (Math.random() < 0.5) {
text = "Hello there!";
} else {
text = "Good Day to You!";
}
document.getElementById("output2").innerHTML = text; }

//var stat1 = 1
Number(document.getElementById("FirstINT").innerHTML)
/* let stat1.globalThis = 0*/
// stat1 += FirstINT.value 
stat1 = FirstINT.value 
function firstChange() { let stat1 = FirstINT.value;
//document.getElementById("FirstINT").innerHTML.value;
document.getElementById("FirstResult").innerHTML = stat1;

}

function oneadd1() { let stat1 = Number(FirstINT.value);
console.log(stat1);
stat1 = stat1 + 1;
console.log("+1");
console.log(stat1);
document.getElementById("FirstResult").innerHTML = stat1;
FirstINT.value = stat1;
console.log(FirstINT.value);
console.log(stat1);

}

function oneminus1() { let stat1 = Number(FirstINT.value);
console.log(stat1);
stat1 = stat1 - 1;
console.log("-1");
console.log(stat1);
document.getElementById("FirstResult").innerHTML = stat1;
FirstINT.value = stat1;
console.log(FirstINT.value);
console.log(stat1);

}