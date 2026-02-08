 emailjs.init("ygrFG8gFQ-V75KKz0");
 document.getElementById("contact_form").addEventListener("submit", function (event){
    event.preventDefault();
    const formData ={
        name:  document.getElementById("name").value,
        email:  document.getElementById("email").value,
        message:  document.getElementById("message").value
    }
    const serviceID ="service_gbt39gl";
    const templateID ="template_cvx5yi7";
    const submitButton = document.getElementById("submit_button");
    submitButton.textContent ="Enviando...";
    submitButton.disabled = "true";

    emailjs.send(serviceID,templateID, formData)
        .then(() => {
            Toastify({
                text: "Email enviado com sucesso!",
                className: "info",
                style: {
                background: "linear-gradient(to right, #08aa16, #0a6801)",
                },
            }).showToast();
            document.getElementById("contact_form").reset();
        })
        .catch((error) => {
            Toastify({
                text: "Erro ao enviar Email",
                className: "info",
                style: {
                background: "linear-gradient(to right, #f80000, #790000)",
             }
    }).showToast();
            console.error("Erro no envio", error);
        })
        .finally(() => {
            submitButton.textContent = "Enviar mensagem";
            submitButton.disabled = false;
        })
 });