//conto da 1000 a 0
const num = document.getElementById("number")
for (let i = 1000; i >= 0; i--) {
    console.log(i);
    num.innerHTML += i;
}