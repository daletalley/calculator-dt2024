function display(val) {
  document.getElementById("result").value += val;

  return val;
}

function solve() {
  let x = document.getElementById("result").value;

  let y = eval(x);

  document.getElementById("result").value = y;

  return y;
}

function clearScreen() {
  document.getElementById("result").value = "";
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        solve();
    }
});

function display(value) {
    document.getElementById('result').value += value;
}

function clearScreen() {
    document.getElementById('result').value = '';
}

function solve() {
    let equation = document.getElementById('result').value;
    let solved = eval(equation);
    document.getElementById('result').value = solved;
}
