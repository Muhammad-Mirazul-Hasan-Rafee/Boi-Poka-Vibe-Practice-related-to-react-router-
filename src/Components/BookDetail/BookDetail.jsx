import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetail = () => {
    const {bookId} = useParams();
    const id = parseInt(bookId);
    const data = useLoaderData();
    const book = data.find(book => book.bookId === id);
    // console.log(book);
    const {bookId:currentBookId , image} = book;
    return (
        <div className='m-8'>
            <h2>Book Details: {bookId}</h2>
            <img className='w-36' src={image} alt="" />
            <br />
            <button className="btn btn-accent">Read</button>
            <button className="btn btn-ghost">Wishlist</button>

        </div>
    );
};

export default BookDetail;