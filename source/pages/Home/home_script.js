document.addEventListener("click", function(event){
    if (event.target.closest(".delete-section")) return;
    const card = event.target.closest(".card");
    if (!card) return;
    const section = card.querySelector(".card-title").innerText;
    const link = "source/pages/Study_Section/StudySection.html?section=" + section;
    window.location.assign(link);
});

function NewFlashCard(){
    window.location.assign("source/pages/New_Study_Section/NewStudySection.html");
}