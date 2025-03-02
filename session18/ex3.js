let name = "ADMIN";
let inputName = prompt("nhập tên đăng nhập(ABC)");
let pass;

if (inputName == null) {
    alert("cancelled");
} else if(inputName == "ADMIN"){
    pass = prompt("nhập pass : ");
    if (pass === "TheMaster") {
        alert("Wellcom");
    } else if (pass == null) {
        alert("Cancelled");
    } else {
        alert("Wrong password");
    }
} else {
    alert("I DON'T KNOW YOU!!!");
}