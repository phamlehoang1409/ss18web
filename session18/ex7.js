let a = +prompt("nhap so a : ");
let b = +prompt("nhap so b : ");
let choose = prompt("* , / , + , -");
let ketQua;
if (a == null || b == null) {
    alert("nhap sai");
} else {
    switch (choose) {
    case "+":
        ketQua = a + b;
        alert(`${ketQua}`);
        break;
    case "/":
        ketQua = a / b;
        alert(`${ketQua}`);
        break;
    case "-":
        ketQua = a - b;
        alert(`${ketQua}`);
        break;
    case "*":
        ketQua = a * b;
        alert(`${ketQua}`);
        break;
    }
}