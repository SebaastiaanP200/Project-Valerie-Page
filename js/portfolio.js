/* PORTFOLIO */

const containerOpNf = document.querySelector(".portfolio__container");

const getOpNf = async () => {
    try {
        const res = await axios.get("../img.json");
        const data = res.data;
        const oPfragment = document.createDocumentFragment();
        
        for (let i = 0; i < data.length; i++) {
            const portfolioObject = Object.values(data[i])[0];
            
            if (!portfolioObject || !portfolioObject.link || !Array.isArray(portfolioObject.images)) {continue;}
            
            const link = portfolioObject.link;
            const images = portfolioObject.images;
            
            const ulContainer = images.map((imageObject) => {
                const alt = imageObject.name;
                const src = imageObject.url;
                const id = imageObject.id;
                
                return `<li><img src="${src}" alt="${alt}" id="${id}"></li>`
            }).join("");
            
            const div = document.createElement("DIV");
            div.classList.add("portfolio__slider");
            div.innerHTML = 
                            `<a href="${link}" class="link__portfolio">Open Portfolio</a>
                            <ul>${ulContainer}</ul>`;
            oPfragment.appendChild(div);
        }
        containerOpNf.appendChild(oPfragment);
    } catch (e) {console.error("Error durante la carga: ", e);}
};

getOpNf();





