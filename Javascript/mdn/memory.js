function leakMemory() {
    var el = document.getElementById('el');
    var o = { 'el': el };
    el.o = o;
}

console.log(leakMemory());