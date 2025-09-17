/* CAROUSEL */
const carouselContainer = document.querySelector(".carousel__container");

const getImgC = async () => {
    try {
    const res = await axios.get("img.json");
    const data = res.data[0];
    const containerImgHTML = document.createDocumentFragment();
    for(let i = 0; i < 4; i++) {
        const image = data.carousel[i];
        if (!image) break;
        const img = document.createElement("IMG");
        img.alt = image.titulo;
        img.src = image.url;
        img.loading = "lazy";
        img.classList.add("image")
        containerImgHTML.appendChild(img);
    }
    carouselContainer.appendChild(containerImgHTML);
}catch(e) {console.error("Error durante la carga: ");}
}

getImgC();


/* TESTIMONIALS */
const container = document.querySelector(".flex");

const getImgT = async () => {
    try {
        const res = await axios.get("img.json");
        const data = res.data[1];
        const testimonyContainer = document.createDocumentFragment();

    for (let i = 0; i < data.testimony.length; i++) {
        const id = data.testimony[i].id;
        const name = data.testimony[i].name;
        const imagen = data.testimony[i].url;
        const description = data.testimony[i].description;

        const div = document.createElement("DIV");
        div.classList.add("testimony__container");
        div.id = `testimony${i + 1}`;
        div.innerHTML = `
                        <h3 class="name__testimony">${name}</h3>
                        <img src="${imagen}" alt="Testimony ${id}" id="testimony-${id}" loading="lazy">
                        <p class="description__testimony" >${description}</p>`;
      
        testimonyContainer.appendChild(div);
    }
    container.appendChild(testimonyContainer);
    } catch (e) {
        console.error(e);
    }
};

getImgT();