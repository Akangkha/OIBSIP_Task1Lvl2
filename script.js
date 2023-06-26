var s = "";
let t = 0;

function d(val) {
  document.querySelector(".input").innerHTML += val;
  console.log(val);
  if (t == 1) t = 2;
  if (val == "x") s += "*";
  else if (val == "%") s += "/100*";
  else if (val == "±") s += "-";
  else if (val == "√") {
    t = 1;
  } else if (val == "÷") s += "/";
  else if (t != 1 && t != 2) {
    s += val;
  }
  if (t == 2) {
    var sqr = Math.sqrt(val);
    s += sqr;
    t = 0;
  }

  console.log("s=" + s);
}

function clr() {
  document.querySelector(".input").innerHTML = "";
  document.querySelector(".output").innerHTML = "0";
  console.log("cleared");
  s = "";
}

function del() {
  s = s.substring(0, s.length - 1);

  document.querySelector(".input").innerHTML = s;
  document.querySelector(".output").innerHTML = "0";

  console.log(s);
}

console.log("Hello");

function ans() {
  try {
    let y = eval(s);
    document.querySelector(".output").innerHTML = y;
  } catch {
    document.querySelector(".output").innerHTML = "ERROR";
  }
}
