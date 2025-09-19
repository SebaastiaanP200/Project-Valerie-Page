const containerWD = document.querySelector(".portfolio__container");

const getImgWD = async () => {
    try {
        const res = await axios.get("../img.json");
        const data = res.data[8];
        const portfolioContainerWD = document.createDocumentFragment();

    for (let i = 0; i < data.portfolio_wd.length; i++) {
        const id = data.portfolio_wd[i].id;
        const imagen = data.portfolio_wd[i].url;
        const name = data.portfolio_wd[i].name;

        const imgWD = document.createElement("IMG");
        imgWD.classList.add("portfolio__images");
        imgWD.src = imagen;
        imgWD.alt = name;
        imgWD.id = id;
        imgWD.loading = "lazy";
        portfolioContainerWD.appendChild(imgWD);
    }
    containerWD.appendChild(portfolioContainerWD);
    } catch (e) {console.error("Error durante la carga: ", e);}
};

getImgWD();