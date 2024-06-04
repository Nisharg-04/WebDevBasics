let count = 0;
// let countDisp = document.getElementById("h3");
function increament() {
  count++;
  document.getElementById("h3").innerText = count;
  //   countDisp.innerText=count;
  // console.log(count)
}
function decreament() {
  count--;
  document.getElementById("h3").innerText = count;
  //   countDisp.innerText=count;
  // console.log(count)
}
let prevCount;
let text1 = "";
function save() {
  prevCount = count;

  text1 = text1 + "-" + prevCount;
  document.getElementById("greetText1").innerText =
    "Previous Enteries" + ": " + text1;
  count = 0;
  document.getElementById("h3").innerText = count;
}
function greet1() {
  let greet = " ";
  document.getElementById("greetText1").innerText = greet;
}
