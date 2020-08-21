let lastEvent = unixMillis();
let changed = false;
const timeout = 200;

function unixMillis() {
    return new Date().getTime()
}

function delay() {
    let now = unixMillis()
    if ((now - lastEvent) < timeout) {
        changed = true;
        return;
    }

    lastEvent = now;
    changed = false;
    render();
}

function render() {
    var inputdata = document.getElementById("inputdata").value;
    document.getElementById("render").innerHTML = inputdata;
}

function loop() {
    if (changed) {
        render();
        changed = true;
    }
    setTimeout(loop, timeout);
}


document.getElementById('inputdata').addEventListener('keyup', delay);
setTimeout(loop, timeout);