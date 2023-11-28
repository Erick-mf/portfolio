window.onload = () => {
    let contenido_sobre_mi = document.querySelector(".contenido-sobre-mi");
    let parrafo = document.createElement("p");
    let btns = document.querySelector(".btns");

    parrafo.innerHTML = `
Lo que más me emociona de ser un desarrollador Fullstack es la capacidad de trabajar en todas las facetas de una
aplicación web, desde la base de datos hasta la interfaz de usuario. Creo que esta habilidad no solo me hará un
desarrollador más completo, sino que también me permitirá aportar una perspectiva única a cualquier proyecto en el
que trabaje.
`;
    btns.addEventListener("click", (e) => {
        e.preventDefault();
        contenido_sobre_mi.insertBefore(parrafo, btns);
    });

    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll("header nav a");

    window.onscroll = () => {
        sections.forEach((sec) => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 100;
            let height = sec.offsetHeight;
            let id = sec.getAttribute("id");

            if (top >= offset && top < offset + height) {
                navLinks.forEach((link) => {
                    link.classList.remove("active");
                    document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
                });
            }
        });

        let header = document.querySelector("header");

        header.classList.toggle("sticky", window.scrollY > 100);
    };
};
