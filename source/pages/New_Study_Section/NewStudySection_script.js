function add_card(){
    const flashcard_container = document.getElementById("flashcard-container");
    const template = document.querySelector(".flashcard");
    const newcard = template.cloneNode(true);

    newcard.querySelector(".flashcard-terminology .flashcard-text").value = "";
    newcard.querySelector(".flashcard-define .flashcard-text").value = "";
    let NewIndex = flashcard_container.querySelectorAll(".flashcard").length + 1;
    newcard.querySelector(".index").innerText = NewIndex;
    flashcard_container.appendChild(newcard);
    
    const delete_button = newcard.querySelector(".delete_button");
    delete_button.addEventListener("click", function(){
        newcard.remove();
        updateCardNumbers();
    });
}

function updateCardNumbers(){
    const CardArray = document.querySelectorAll("#flashcard-container .flashcard");
    for (let i = 0; i < CardArray.length; i++){
        CardArray[i].querySelector(".index").innerText = i + 1;
    }
}

function delete_AllCard(){
    const CardArray = document.querySelectorAll("#flashcard-container .flashcard");
    for (let i = 0; i < CardArray.length; i++){
        if (i == 0){
            CardArray[i].querySelector(".flashcard-terminology .flashcard-text").value = "";
            CardArray[i].querySelector(".flashcard-define .flashcard-text").value = "";
        }
        else{
            CardArray[i].remove();
        }
    }
}

function SaveFlashcard(){
    const SectionTitle = document.querySelector(".flashcard-title").value;
    if (SectionTitle == ""){
        alert("Bạn chưa viết tiêu đề");
        return;
    }
    const flashcard_describe = document.querySelector(".flashcard-describe").value;
    const CardArray = document.querySelectorAll("#flashcard-container .flashcard");
    for (let card of CardArray){
        const term = card.querySelector(".flashcard-terminology .flashcard-text").value;
        const definition = card.querySelector(".flashcard-define .flashcard-text").value;
        if(term == "" || definition == ""){
            alert("Hãy viết đầy đủ trước khi tạo học phần");
            return;
        }
    }

    const tx = db.transaction("flashcardStore", "readwrite");
    const store = tx.objectStore("flashcardStore");
    store.add({SectionTitle, flashcard_describe});
    for (let card of CardArray){
        const term = card.querySelector(".flashcard-terminology .flashcard-text").value;
        const definition = card.querySelector(".flashcard-define .flashcard-text").value;
        store.add({SectionTitle, term, definition});
    }
    window.location.assign("../../../../index.html");
}