//Stampo tutti i numeri da 0 a 1000
const num = document.getElementById("number")
for (let i = 0; i <= 1000; i++) {
    console.log(i);
    num.innerHTML += i;
}