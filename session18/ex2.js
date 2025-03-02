let toan = +prompt("môn toán : ");
let van = +prompt("môn văn : ");
let anh = +prompt("môn anh : ");

let trungBinh = (toan + van + anh) / 3;

if (trungBinh >= 8) {
    alert("học lực giỏi");
} else if (trungBinh >= 6.5 && trungBinh <= 7.9) {
    alert("học lực khá");
} else if (trungBinh >= 5 && trungBinh <= 6.4) {
    alert("học lực trung bình");
} else {
    alert("học lực yếu");
}