let arr = [
  "a",
  "b",
  "c",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "@",
  "#",
  "!",
  "$",
  "%",
  "&",
  "*",
  "-",
  "_",
  "(",
  ")",
];

let func = document.addEventListener(
  "click",
  (generator = (v) => {
    let lngth = document.getElementById("Int").value;
    if (v.target.id != "Int" && v.target.id != "lab1") {
      lngt = Math.floor(lngth);
      document.getElementById("Int").value = lngth;
      if (lngth > 7) {
        Int.style.borderColor = "blue";
        Text.style.fontSize = 500 / lngth + "px";
        let a = 0;
        let password = "";
        while (a < lngth) {
          a++;
          let b = Math.floor(Math.random() * (arr.length - 1));
          let c = arr[b];
          password += c;
        }
        document.getElementById("txt").value = password;
      } else {
        Int.style.borderColor = "red";
      }
    }
  })
);
