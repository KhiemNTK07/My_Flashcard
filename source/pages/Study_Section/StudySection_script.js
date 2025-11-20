let describe = "";
let arrayFlashcard = [];
let queryString = window.location.search;
let paramSearch = new URLSearchParams(queryString);
let section = paramSearch.get("section");

function flipCard() {
    const card = document.querySelector('.flip_card');
    card.classList.toggle('flipped');
}

request.onsuccess = function(event){
    db = event.target.result;
    function getFlashcardsBySection(section) {
        const tx = db.transaction("flashcardStore", "readwrite");
        const store = tx.objectStore("flashcardStore");
        const index = store.index("SectionTitle");
        const range = IDBKeyRange.only(section);
        const cursorRequest = index.openCursor(range);
        cursorRequest.onsuccess = (event) => {
            const cursor = event.target.result;
            if (cursor) {
                if (cursor.value.flashcard_describe){
                    describe = cursor.value.flashcard_describe;
                    show_descrition();
                }
                else if (cursor.value.term && cursor.value.definition){
                    arrayFlashcard.push({
                        term: cursor.value.term,
                        definition: cursor.value.definition
                    });
                }
                cursor.continue();
            }
            else{
                FirstSet(
                    section, 
                    arrayFlashcard.length, 
                    arrayFlashcard[0].term, 
                    arrayFlashcard[0].definition
                );
                // console.log("Đã duyệt xong section:", section);
                // console.log(describe);
                // console.log(arrayFlashcard);
            }
        };
    }
    getFlashcardsBySection(section);
}

function FirstSet(section, count, term, definition){
    const index_card = document.getElementById("index_card");
    const title_content = document.getElementById("title_content");
    const side_front = document.querySelector(".front .card_content");
    const side_back = document.querySelector(".back .card_content");

    index_card.innerText = "1/" + count;
    title_content.innerText = section;
    side_front.innerText = term;
    side_back.innerText = definition;
}

function NextCard(){
    const index_card = document.getElementById("index_card");
    let TextIndex = index_card.innerText;
    let index = Number(TextIndex[0]);
    if (index == arrayFlashcard.length){
        return;
    }
    else if (index == arrayFlashcard.length - 1){
        let arrow = document.getElementById("arrow_right");
        arrow.classList.remove("arrow");
        arrow.classList.add("blur");
    }
    else if (index == 1){
        let arrow = document.getElementById("arrow_left");
        arrow.classList.remove("blur");
        arrow.classList.add("arrow");
    }

    const side_front = document.querySelector(".front .card_content");
    const side_back = document.querySelector(".back .card_content");
    index_card.innerText = (index + 1) + "/" + TextIndex[2];
    side_front.innerText = arrayFlashcard[index].term;
    side_back.innerText = arrayFlashcard[index].definition;
}

function BackCard(){
    const index_card = document.getElementById("index_card");
    let TextIndex = index_card.innerText;
    let index = Number(TextIndex[0]);
    if (index == 1){
        return;
    }
    else if (index == 2){
        let arrow = document.getElementById("arrow_left");
        arrow.classList.remove("arrow");
        arrow.classList.add("blur");
    }
    else if (index == arrayFlashcard.length){
        let arrow = document.getElementById("arrow_right");
        arrow.classList.remove("blur");
        arrow.classList.add("arrow");
    }
    const side_front = document.querySelector(".front .card_content");
    const side_back = document.querySelector(".back .card_content");
    index_card.innerText = (index - 1) + "/" + TextIndex[2];
    side_front.innerText = arrayFlashcard[index - 2].term;
    side_back.innerText = arrayFlashcard[index - 2].definition;
}

function CloseCard(){
    if (document.referrer != ""){
        history.back();
    }
    else{
        window.location.assign("/My_Flashcard/index.html");
    }
}

function show_descrition(){
    const title = document.getElementById("title_content");
    title.classList.add("show-describe");
    const button = document.querySelector(".button");
    const overplay = document.querySelector(".overplay");
    const section_title = document.querySelector(".section-title");
    const content_describe = document.querySelector(".describe");
    section_title.innerText = section;
    content_describe.innerText = describe;
    title.addEventListener("click", function(){
        overplay.classList.add("show");
    });

    button.addEventListener("click", function(){
        overplay.classList.remove("show");
    });
}