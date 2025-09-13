/* XV - BIRTHDAY */

const containerXV = document.querySelector(".portfolio__container");

const getImgXV = async () => {
    try {
        const res = await axios.get("../img.json");
        const data = res.data[3];
        const portfolioContainerXV = document.createDocumentFragment();

    for (let i = 0; i < data.portfolio_xv.length; i++) {
        const id = data.portfolio_xv[i].id;
        const imagen = data.portfolio_xv[i].url;

        const imgXV = document.createElement("IMG");
        imgXV.classList.add("portfolio__images");
        imgXV.src= imagen;
        imgXV.alt= id;
        imgXV.loading = "lazy";
        portfolioContainerXV.appendChild(imgXV);
    }
    containerXV.appendChild(portfolioContainerXV);
    } catch (e) {console.error("Error durante la carga: ");}
};

getImgXV();