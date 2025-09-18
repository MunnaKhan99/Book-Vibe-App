const getStoredBook = ()=>{
    const storedBookSTR = localStorage.getItem("readList");

    if(storedBookSTR){
        const storedBookData = JSON.parse(storedBookSTR);
        return storedBookData;
    }
    else{
        return [];
    }
}



const addToStoreDB = (bookId) =>{
    const storedBookData = getStoredBook();
    if(storedBookData.includes(bookId)){
        alert("already exists!");
    }
    else{
        storedBookData.push(bookId);
        const data = JSON.stringify(storedBookData);
        localStorage.setItem("readList",data);
    }
}
export {addToStoreDB,getStoredBook}