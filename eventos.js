const cont = document.getElementById("btn-container");
const greet = document.getElementById("greet-btn");


cont.addEventListener("click", (event) => {
    alert("Hola! Soy el div.");
});

greet.addEventListener("click", (event) => {
    event.stopPropagation();
    alert("Hola!");
});