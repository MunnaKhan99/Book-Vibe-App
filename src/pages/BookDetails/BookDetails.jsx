import React from 'react';
import { useLoaderData } from 'react-router';
import './bookDetails.css'
import { addToStoreDB } from '../../Utility/addToDB';
const BookDetails = () => {
    const book = useLoaderData();
    // console.log(book);
    const {bookName,bookId,author,category,image,publisher,rating,review,tags,totalPages,yearOfPublishing} = book
  
    const handleMarkAsRead = id =>{
        //store with id
        //store bookstore
        // arry or collection 
        //if book already have then show a alert
        //if book not exists push the collection or
        addToStoreDB(id); 

    }
  return (
    <div className="book-details-container">
      {/* left side */}
      <div className="book-image-section">
        <img src={image} alt={bookName} />
      </div>

      {/* right side */}
      <div className="book-info-section">
        <h1 className="book-title">{bookName}</h1>
        <p className="book-author">By: {author}</p>
        <p className="book-category">{category}</p>
        <hr />

        <p className="book-review">
          <span className="review-label">Review: </span>
          {review}
        </p>
        <hr />
        <div className="book-tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <hr />

        <p>Number of Pages: {totalPages}</p>
        <p>Publisher:  {publisher}</p>
        <p>Year Of Publishing: {yearOfPublishing}</p>
        <p>Rating: ⭐ {rating}</p>
        
        <div className="book-buttons">
          <button onClick={()=>handleMarkAsRead(bookId)} className="btn-read">Mark as Read</button>
          <button className="btn-wishlist">Add to Wishlist</button>
        </div>
      </div>
    </div>
  );
};


export default BookDetails;