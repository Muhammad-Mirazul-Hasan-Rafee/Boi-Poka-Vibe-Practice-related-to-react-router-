const getStoredReadList = () =>{
    // read-list
    const storedListStr = localStorage.getItem('read-list');
    if(storedListStr){

        const storedList = JSON.parse(storedListStr);
        return storedList;
    }


    else{

        return[];
    }
};

const addToReadList = (id) =>{
    const storedList = getStoredReadList();
    if(storedList.includes(id)){
        // already in the list, do not add it
        console.log(id , 'already here!!');
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list' , storedListStr);
    }
    

};

const getStoredWishList = () => {
    // Wish-List
    const storedWishListStr = localStorage.getItem('Wish-List');
    if(storedWishListStr){
        const storedList = JSON.parse(storedWishListStr);
        return storedList;
    }
    else{
        return[];
    }
};

const addToWishList = (id) =>{
    const storedList = getStoredWishList();
    if(storedList.includes(id)){
        // Already in the wishlist . Do not add again
        console(id , 'Already in Wish list');
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('Wish-List' , storedListStr);
    }
};

export {addToReadList , addToWishList};