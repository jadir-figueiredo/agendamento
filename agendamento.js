const fields = document.querySelectorAll("[required]");

function customValidation(event) {
    const field = event.target

    // logica para verificar se existem erros
    function verifyErrors() {
        let foundError = false;

        for (let error in field.validity) {
            // se não for customError
            // então verifica se tem error se
            if (error != "customError" && field.validity[error]) {
                foundError = error;
            }
        }

        return foundError;
    }

    const error = verifyErrors()
    if (error) {
        //trocar mensagem de required
        field.setCustomValidity("Esse campo é obrigatório");
    } else {
        field.setCustomValidity("");
    }

}



for (field of fields) {
    field.addEventListener("invalid", customValidation)
}

document.querySelector("form")
addEventListener("submit", event => {
    console.log("enviar o formulário")

    // não enviar o formulário 
    event.preventDefault()
})