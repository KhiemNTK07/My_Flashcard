let db;
const dbName = "FlashcardDB";
const storeName = "flashcardStore";

const request = indexedDB.open(dbName, 2);
request.onupgradeneeded = (event) => {
    db = event.target.result;
    let store;

    if (!db.objectStoreNames.contains("flashcardStore")){
        store = db.createObjectStore("flashcardStore", { keyPath: "id", autoIncrement: true });
    } 
    else{
        store = event.target.transaction.objectStore("flashcardStore");
    }

    if (!store.indexNames.contains("SectionTitle")) {
        store.createIndex("SectionTitle", "SectionTitle", { unique: false });
    }
};

request.onsuccess = (event) => {
    db = event.target.result;
    console.log("Oke Yeahhhhhh");
};

request.onerror = () => {
    console.error("Let Fix Bug");
};