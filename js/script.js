document.getElementById("donar-btn").addEventListener("click", function() {
    alert("¡Gracias por donar a AdoptaTuÁrbol!");
});
function toggleAdopt(button) {
    if (button.innerText === "Adoptar") {
      button.innerText = "Adoptado";
      button.style.backgroundColor = "#d1d1d1";
    } else {
      button.innerText = "Adoptar";
      button.style.backgroundColor = "#6abf69";
    }
}