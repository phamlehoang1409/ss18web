
let hour = parseInt(prompt("Nhập giờ (0-23):"));
let minute = parseInt(prompt("Nhập phút (0-59):"));
let second = parseInt(prompt("Nhập giây (0-59):"));


let period = hour >= 12 ? "PM" : "AM";


hour = hour % 12;
hour = hour === 0 ? 12 : hour; 

let formattedTime = `${hour.toString().padStart(2, "0")}:${minute
  .toString()
  .padStart(2, "0")}:${second.toString().padStart(2, "0")} ${period}`;

console.log(formattedTime);
