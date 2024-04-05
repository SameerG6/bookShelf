
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../App.css";
import { Link } from "react-router-dom";
import { FaCartShopping } from 'react-icons/fa6';

const BookCards = ({ headline, books }) => {
  console.log(books);
  return (
    <div className="bddiv">
      <h2 className="bcdh2">{headline}</h2>
      <div className="book-grid">
        {books.map((book) => (
          <Link to={`/book/${book._id}`} key={book._id} className="book">
            <div>
              <img
                src={book.imageURL}
                alt="Book Cover"
                className="book-image"
              />
              <div className="logs">
                <FaCartShopping />
              </div>
              
            </div>
            <div>
              <h3 className="book-title">{book.bookTitle}</h3>
              <p className="book-author">{book.authorName}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );


};

export default BookCards;
