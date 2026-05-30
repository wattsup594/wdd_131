const container = document.querySelector("#articles-container");

articles.forEach(article => {

    const articleElement = document.createElement("article");

    articleElement.innerHTML = `
        <div class="details">
            <p>${article.date}</p>
            <p>${article.ages}</p>
            <p>${article.genre}</p>
            <p>${article.stars}</p>
        </div>

        <div class="content">
            <h2>${article.title}</h2>

            <img
                src="${article.imgSrc}"
                alt="${article.imgAlt}"
            >

            <p>${article.description}</p>
        </div>
    `;

    container.appendChild(articleElement);
});