const modoDark = document.querySelector(".checkMode");

modoDark.addEventListener("click", () => {
    document.querySelectorAll("*").forEach(elemento => {
        elemento.classList.toggle("dark");
    });
});

document.querySelectorAll("li[data-target]").forEach(item => {
    item.addEventListener("click", function() {
        const sectionId = this.getAttribute("data-target"); 
        const targetSection = document.getElementById(sectionId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: "smooth" // Faz a rolagem suave
            });
        }
    });
});