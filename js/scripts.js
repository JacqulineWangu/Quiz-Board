function calc() {
  var a = parseInt(document.querySelector("#sideA").value);
  var b = parseInt(document.querySelector("#sideB").value);
  var c = parseInt(document.querySelector("#sideC").value);

  var respond = document.querySelector("#Answer");

  if (a + b > c && b + c > a && a + c > b) {
    if (a === b && b === c && a > 0 && b > 0 && c > 0) {

      respond.innerHTML = 'EQUILATERAL TRIANGLE';
    } else if (a === b && b !== c || a !== b && b === c && a > 0 && b > 0 && c > 0) {

      respond.innerHTML = 'ISOSCELES TRIANGLE';
    } else if (a !== b && b !== c && c !== a) {

      respond.innerHTML = 'SCALENE TRIANGLE';
    }
  }
  else if (isNaN(a) || isNaN(b) || isNaN(c)){
    respond.innerHTML = 'Not a number';
  }else {
    respond.innerHTML = 'NOT A TRIANGLE';
  }
}

function scrolldown() {
  window.scrollBy(0, 900);
}
