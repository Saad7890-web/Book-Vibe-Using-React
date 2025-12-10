const getStoredBook = () => {
    const storedBookStr = localStorage.getItem("readList");

    if(storedBookStr){
        const storeBookData = JSON.parse(storedBookStr);
        return storeBookData;
    }
    return [];
}

const addToStoredDb = (id) => {
    const storedBookData = getStoredBook();

    if(storedBookData.includes(id)){
        alert("Book Already exist");
    }

    storedBookData.push(id);
   const data = JSON.stringify(storedBookData);
   localStorage.setItem("readList", data);
}

export { addToStoredDb };
