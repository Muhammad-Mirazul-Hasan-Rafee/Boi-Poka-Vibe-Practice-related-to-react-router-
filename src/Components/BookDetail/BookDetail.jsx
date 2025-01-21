import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToReadList, addToWishList } from '../Utility/addToDb';

const BookDetail = () => {
    const {bookId} = useParams();
    const id = parseInt(bookId);
    const data = useLoaderData();
    const book = data.find(book => book.bookId === id);
    // console.log(book);
    const {bookId:currentBookId , image} = book;

    const handleMarkAsRead= (id)=>{
        addToReadList(id);
    };

    const handleWishList = (id) =>{
        addToWishList(id);
    };
    return (
        <div className='m-8'>
            <h2>Book Details: {bookId}</h2>
            <img className='w-36' src={image} alt="" />
            <br />
            <button onClick={()=>handleMarkAsRead(bookId)} className="btn btn-accent">Mark As Read</button>
            <button onClick={()=>handleWishList(bookId)} className="btn btn-ghost">Add to Wishlist</button>

        </div>
    );
};

export default BookDetail;