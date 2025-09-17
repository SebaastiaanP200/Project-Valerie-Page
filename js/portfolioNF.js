const containerNF = document.querySelector(".portfolio__container");

const getImgNF = async () => {
    try {
        const res = await axios.get("../img.json");
        const data = res.data[6];
        const portfolioContainerNF = document.createDocumentFragment();

    for (let i = 0; i < data.portfolio_nf.length; i++) {
        const id = data.portfolio_nf[i].id;
        const imagen = data.portfolio_nf[i].url;

        const imgNF = document.createElement("IMG");
        imgNF.classList.add("portfolio__images");
        imgNF.src= imagen;
        imgNF.alt= id;
        imgNF.loading = "lazy";
        portfolioContainerNF.appendChild(imgNF);
    }
    containerNF.appendChild(portfolioContainerNF);
    } catch (e) {console.error("Error durante la carga: ", e);}
};

getImgNF();