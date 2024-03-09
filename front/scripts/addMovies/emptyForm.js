export function emptyForm(){
    Array.from(document.getElementsByClassName("form-control")).forEach(input => {
        input.value = "";
    });
}