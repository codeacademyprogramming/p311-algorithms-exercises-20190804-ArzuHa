let a = prompt("A ededini daxil edin");
let b = prompt("B ededini daxil edin");
let A = parseInt(a);
let B = parseInt(b);

if (A % 2 == 0 && A % 4 == 0 && A % 8 != 0) {
    alert("A ededi ikiye ve dorde bolunur amma sekkize yox")

}
else if (B % 2 == 0 && B % 4 == 0 && B % 8 != 0) {
    alert("B ededi ikiye ve dorde bolunur amma sekkize yox")

}
else if (A % 2 == 0 && A % 4 == 0 && A % 8 == 0) {
    alert("A ededi ikiye,dorde ve sekkize bolunur")
}
else if (B % 2 == 0 && B % 4 == 0 && B % 8 == 0) {
    alert("B ededi ikiye,dorde ve sekkize bolunur")
}
else {
    alert("Daxil etdiyiniz eded ikiye,dorde ve sekkize bolunmur!")
}