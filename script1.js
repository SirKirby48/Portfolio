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
let stat1 = document.getElementById("FirstINT").innerHTML.valueAsNumber;
function firstChange() { 
document.getElementById("FirstResult").innerHTML = stat1;
}
function oneadd1() {
console.log(stat1);
stat1 += 1;
console.log("+1");
console.log(stat1);
document.getElementById("FirstResult").innerHTML.valueAsNumber = stat1;
console.log(document.getElementById("FirstResult").innerHTML.valueAsNumber);
}