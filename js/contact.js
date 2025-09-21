const containerTxtC = document.querySelector(".disclaimer__container");

const getTxtC = async () => {
    try {
        const res = await axios.get("../txt.json");
       
        const disclaimerEntry = res.data.find(info => info.disclaimer); 
        const disclaimerArray = disclaimerEntry ? disclaimerEntry.disclaimer : [];
        
        const contactContainerTxt = document.createDocumentFragment();
        disclaimerArray.forEach (info => {
        const li = document.createElement("LI");
        li.classList.add("disclaimer__text");
        li.innerHTML = info.disclaimer;
        contactContainerTxt.appendChild(li);
    });
    containerTxtC.appendChild(contactContainerTxt);
    } catch (e) {console.error("Error durante la carga: ", e);}
};

getTxtC();


const EventDetails = document.getElementById()