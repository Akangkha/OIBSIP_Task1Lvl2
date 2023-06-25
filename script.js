var s = "";
let t = 0;

function d(val) {
  document.querySelector(".input").innerHTML += val;
  console.log(val);
  if (t == 1) t = 2;
  if (val == "x") s += "*";
  else if (val == "%") s += "/100";
  else if (val == "±") s += "-";
  else if (val == "√") {
    t = 1;
    s += "sqrt(";
  } else if (val == "÷") s += "/";
  else if (t != 1 && t != 2) {
    s += val;
  }
  if (t == 2) {
    s += val;
    s += ")";
    t = 0;
  }

  console.log("s=" + s);
}

function clr() {
  document.querySelector(".input").innerHTML = "";
  console.log("cleared");
  s = "";
}

function del() {
  document.querySelector(".input").innerHTML = "";
  console.log("cleared");
}

console.log("Hello");

function ans() {
  let y = Math.evaluate(s);
  document.querySelector(".output").innerHTML = y;
}
