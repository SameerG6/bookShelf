import React from "react";
import "../App.css";
import { useLoaderData } from "react-router-dom";
import "./sing.css";
const SingleBook = () => {
  const {
    _id,
    bookTitle,
    authorName,
    bookDescription,
    imageURL,
    category,
    bookPDFURL,
  } = useLoaderData();

  return (
    <div className="sbd">
      <div className="tile">
        <img src={imageURL} alt={bookTitle} className="image" />
        <div className="details">
          <h2 className="title">{bookTitle}</h2>
          <p className="author">{authorName}</p>
          <p className="description">{bookDescription}</p>
          <p className="price">Category: {category}</p>
          {bookPDFURL && (
            <a href={bookPDFURL} target="_blank" rel="noopener noreferrer">
              View PDF
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
