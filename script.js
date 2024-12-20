document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.querySelector(".cat-grid");

    // Обновлённые ссылки на котиков
    const cats = [
        "https://cdn2.thecatapi.com/images/MTY2ODc4MQ.jpg",
        "https://cdn2.thecatapi.com/images/MTY3MDg3OQ.jpg",
        "https://cdn2.thecatapi.com/images/b1t.jpg",
        "https://cdn2.thecatapi.com/images/MTYxODg0MQ.jpg",
        "https://cdn2.thecatapi.com/images/c2t.jpg"
    ];

    // Добавляем котиков в галерею
    cats.forEach((cat) => {
        const img = document.createElement("img");
        img.src = cat;
        img.alt = "Милый котик";
        gallery.appendChild(img);
    });
});
