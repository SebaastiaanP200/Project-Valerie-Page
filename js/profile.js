const containerIMG = document.querySelector(".profile__container");

const getImgPF = async () => {
    try {
        const res = await axios.get("../img.json");
        const data = res.data[2];
        const profileContainer = document.createDocumentFragment();
        
        for (let i = 0; i < data.profile.length; i++) {
            const id = data.profile[i].id;
            const image = data.profile[i].url;
            const name = data.profile[i].name;

            const img = document.createElement("IMG");
            img.classList.add("profile__image");
            img.src= image;
            img.alt= name;
            img.id = id;
            profileContainer.appendChild(img);
        }
        containerIMG.appendChild(profileContainer);
    } catch (e) {console.error("Error durante la carga: ");}
};

getImgPF();

const containerTxtP = document.querySelector(".profile__description");

const getTxtP = async () => {
    try {
        const res = await axios.get("../txt.json");
        const data = res.data[0];
        const profileContainerTxt = document.createDocumentFragment();

    for (let i = 0; i < data.profile.length; i++) {
        const description = data.profile[i].description;
        const id = data.profile[i].id;

        const div = document.createElement("DIV");
        div.classList.add("profile__text");
        div.innerHTML = `<p id=${id}>${description}</p></div>`;
        profileContainerTxt.appendChild(div);
    }
    containerTxtP.appendChild(profileContainerTxt);
    } catch (e) {console.error("Error durante la carga: ");}
};

getTxtP();
