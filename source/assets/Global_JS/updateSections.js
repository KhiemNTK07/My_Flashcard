request.onsuccess = function(event){
    db = event.target.result;
    function listAllSections() {
        const tx = db.transaction("flashcardStore", "readonly");
        const store = tx.objectStore("flashcardStore");
        const index = store.index("SectionTitle");

        const cursorRequest = index.openKeyCursor();
        let SectionTitle = null;
        let count;
        cursorRequest.onsuccess = function(event){
            const cursor = event.target.result;
            if (cursor) {
                if (SectionTitle != cursor.key){
                    if (SectionTitle != null){
                        updateSection(SectionTitle, count - 1);
                    }
                    SectionTitle = cursor.key;
                    count = 1;
                }
                else{
                    count++;
                }
                cursor.continue();
            }
            else{
                updateSection(SectionTitle, count - 1);
            }
        };
    }
    listAllSections();
};

function updateSection(SectionTitle, count){
    const card = document.querySelector(".card");
    const container = document.querySelector(".cards-container");
    const template = card.cloneNode(true);
    template.style.display = "block";
    template.querySelector(".card-title").innerText = SectionTitle;
    template.querySelector(".card-meta").innerText = "Học phần · " + count + "thuật ngữ · Tác giả: bạn";
    container.appendChild(template);
}

