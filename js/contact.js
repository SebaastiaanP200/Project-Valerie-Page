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


const serviciosNiños = document.getElementById("serviciosNiños");
const servicios15 = document.getElementById("servicios15");
const serviciosBodas = document.getElementById("serviciosBodas");

const disclaimerTitulo = document.querySelector(".disclaimer");
const disclaimerContenido = document.getElementById("pagos");

const tipoEvento = document.getElementById("tipoEvento");
const lugar = document.getElementById("lugar");
const fecha = document.getElementById("fecha");

const checkbox = document.querySelectorAll('input[name="servicios[]"]');

const validarCheckbox = ()=>{
    return Array.from(checkbox).some(checkbox => checkbox.checked);
}

const validarCampos = () => {
    if (tipoEvento.value && lugar.value && fecha.value && validarCheckbox())  {
        disclaimerContenido.style.display = "block";
        disclaimerTitulo.style.border = "1px solid #eee";
        disclaimerTitulo.style.color = "#fff";
    } else {
        disclaimerContenido.style.display = "none";
        disclaimerTitulo.style.color = "#444";
    }
}

const mostrarServicios = () => {
    const valor = tipoEvento.value;
    
    serviciosNiños.style.display = "none";
    servicios15.style.display = "none";
    serviciosBodas.style.display = "none";
    disclaimerContenido.style.display = "none";
        
    if (valor === "niños") {
        serviciosNiños.style.display = "block";  
    } else if (valor === "15") {
        servicios15.style.display = "block";        
    } else if (valor === "bodas") {
        serviciosBodas.style.display = "block";
    }
}

tipoEvento.addEventListener("change", () => {
    mostrarServicios();
    validarCampos();
});

lugar.addEventListener("input", validarCampos);
fecha.addEventListener("input", validarCampos);
checkbox.forEach(checkbox => checkbox.addEventListener("change", validarCampos));

const enviarFormulario = document.getElementById("form");
enviarFormulario.addEventListener("submit", (e) => {
    e.preventDefault(); 
    try {
        if (!validarCheckbox()) {
            throw "Debe completar todos los campos requeridos incluyendo el tipo de servicio antes de poder enviar."
        }
        alert("Formulario enviado correctamente.");
        enviarFormulario.submit();
    } catch (e) {alert(e);
    }
});