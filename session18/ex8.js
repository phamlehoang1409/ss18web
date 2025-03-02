let a = +prompt("nhap canh a : ");
let b = +prompt("nhap canh b : ");
let c = +prompt("nhap canh c : ");
if (a + b > c || a + c > b || b + c > a) {
    if (a == b == c) {
        alert("tam giac deu");
    } else if (a == b || b == c || a == c) {
        alert("tam giac can");
    } else if (a * a == b * b + c * c || b * b == a * a + c * c || c * c == a * a + b * b) {
        alert("tam giac vuong");
    } else {
        alert("tam giac deu");
    }
} else {
    alert("tam giac khong hop le");
}