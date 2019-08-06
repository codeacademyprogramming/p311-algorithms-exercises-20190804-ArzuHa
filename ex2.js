let a = prompt("Olcu daxil edin");
let b = prompt("Olcu daxil edin");
let c = prompt("Olcu daxil edin");

let A = parseInt(a);
let B = parseInt(b);
let C = parseInt(c);


if (A == B && B == C && A == C) {
    alert("Beraber terefli ucbucaq");
}
else if (A == B > C && A == C > B && B == C > A) {
    alert("Beraber yanli ucbucaq");
}
else if (A + B > C && A + C > B && B + C > A) {
    alert("Muxtelif terefli ucbucaq");
}
else {
    alert("Ucbucaq sertlerin uygun deyil");
}