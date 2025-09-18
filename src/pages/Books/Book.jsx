import React from 'react';
import { FaRegStar } from "react-icons/fa";
import './books.css'
import { Link } from 'react-router';
const Book = ({ singleBook }) => {
    const { bookName, author,bookId,category, image, rating, tags } = singleBook
    console.log(singleBook);
    return (
        <Link to={`bookDetails/${bookId}`}>
            <div className='book-card'>
            {/* upper div */}
            <div className='book-image-container'>
                <img className='book-image' src={image} alt="" />
            </div>

            {/* lower div */}
            <div>
                {/* for tags */}
                <div className='book-tags'>
                    {
                        tags.map((tag, index) => (
                            <button key={index}>{tag}</button>
                        ))
                    }
                </div>
                <h1 className='book-title'>{bookName}</h1>
                <p className='book-author'>By : {author}</p>

                <div className='book-footer'>
                    <p className='book-category'>{category}</p>
                    <p className='book-rating'>{rating}<FaRegStar /></p>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default Book;