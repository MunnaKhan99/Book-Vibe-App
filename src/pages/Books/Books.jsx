import React, { Suspense } from 'react';
import Book from './Book';
import "./books.css"
const Books = ({data}) => {
    // console.log(data);
    return (
        <div>
            <Suspense fallback = {<span>Loading....</span>}>
            <div className='Books-title'>Books</div>
                   <div className='books-container'>
                     {
                        data.map((singleBook)=><Book singleBook={singleBook} key={singleBook.bookId}></Book>)
                    }
                   </div>
            </Suspense>
        </div>
    );
};

export default Books;