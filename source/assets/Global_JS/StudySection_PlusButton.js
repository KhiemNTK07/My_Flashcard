document.addEventListener('DOMContentLoaded', function(){
    const button = document.getElementById("plus-button");
    const popup = document.getElementById("popup");

    button.addEventListener("click", function(){
        event.stopPropagation();
        if (popup.style.display == "flex"){
            popup.style.display = "none";
        }
        else{
            popup.style.display = "flex";
        }
    });
    document.addEventListener("click", function(){
        if (popup.style.display == "flex"){
            popup.style.display = "none";
        }
    });
});

function NewFlashCard(){
    window.location.assign("../../pages/New_Study_Section/NewStudySection.html");
}