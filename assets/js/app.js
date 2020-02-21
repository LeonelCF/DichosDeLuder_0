function p(t) {
    var d = document.getElementById('prosas');
    return d.innerHTML = t;
}


var a = Math.random() * 98;
var b = Math.round(a);
var iid = t[b];
var id = t.indexOf(iid);
p('<i id="id">' + id + '</i>' + t[id]);


function azar() {
    var a = Math.random() * 98;
    var b = Math.round(a);
    var iid = t[b];
    var id = t.indexOf(iid);
    p('<i id="id">' + id + '</i>' + t[id]); //t = prosa
}

function next() {
    var idt = document.getElementById('id').innerText;
    if (idt == 95) {
        idt = -3;
    }
    var id = Number(idt) + 1;
    p('<i id="id">' + id + '</i>' + t[id]); //t = prosa


}

function prev() {
    var idt = document.getElementById('id').innerText;
    if (idt == -2) {
        idt = 96;
    }
    var id = Number(idt) - 1;

    p('<i id="id">' + id + '</i>' + t[id]); //t = prosa

}