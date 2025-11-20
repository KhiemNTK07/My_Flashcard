function deleteFlashcardsBySection(section) {
    const tx = db.transaction("flashcardStore", "readwrite");
    const store = tx.objectStore("flashcardStore");
    const index = store.index("SectionTitle");
    const range = IDBKeyRange.only(section);
    const cursorRequest = index.openCursor(range);
    cursorRequest.onsuccess = (event) => {
        const cursor = event.target.result;
        if (cursor) {
            cursor.delete();
            cursor.continue();
        }
        // else{
        //     
        // }
    };
}

document.addEventListener("click", function(event){
    const button = event.target.closest(".delete-section");
    if (!button) return;
    event.preventDefault();
    event.stopPropagation();
    const card = event.target.closest(".card");
    const section = card.querySelector(".card-title").innerText;
    deleteFlashcardsBySection(section);
    card.remove();
});

document.addEventListener("click", function(event){
    if (event.target.closest(".delete-section")) return;
    const card = event.target.closest(".card");
    if (!card) return;
    const section = card.querySelector(".card-title").innerText;
    const link = "../Study_Section/StudySection.html?section=" + section;
    window.location.assign(link);
});

function NewFlashCard(){
    window.location.assign("../New_Study_Section/NewStudySection.html");
}