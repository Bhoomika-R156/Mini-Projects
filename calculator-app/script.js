function display(value) {
    document.getElementById("result").value += value;
}

function clearResult() {
    document.getElementById("result").value = "";
}

function calculate() {
    let result = document.getElementById("result").value;

    try {
        document.getElementById("result").value = eval(result);
    } catch {
        alert("Invalid Expression");
    }
}
