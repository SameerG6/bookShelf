import React, { useEffect, useState } from "react";
import "./shop.css";
import { Link } from "react-router-dom";

const Shop = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // Log fetched data
        setBooks(data);
      })
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  // Filter books based on search term and selected category
  const filteredBooks = books.filter(
    (book) =>
      book.bookTitle.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "" || book.category === selectedCategory)
  );

  // Function to handle category filter change
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="sp">
      {/* Search bar */}
      <input
        className="sear"
        type="text"
        placeholder="Search books..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Category filter */}
      <select
        value={selectedCategory}
        onChange={handleCategoryChange}
        className="category-filter"
      >
        <option value="">All Categories</option>
        {/* Add options for each unique category */}
        {Array.from(new Set(books.map((book) => book.category))).map(
          (category) => (
            <option key={category} value={category}>
              {category}
            </option>
          )
        )}
      </select>

      {/* Book container */}
      <div className="book-container">
        {filteredBooks.map((book) => (
          <div key={book._id} className="book-card">
            <img
              src={book.imageURL}
              alt={book.bookTitle}
              className="book-image"
            />
            <div className="book-details">
              <h3 className="book-title">{book.bookTitle}</h3>
              <p className="book-description">{book.authorName}</p>
              <p className="book-description">{book.category}</p>

              {/* <p className="book-description">{book.bookDescription}</p> */}
              <div className="book-footer">
                {/* <p className="book-price">${book.price}</p> */}
                <Link to={`/book/${book._id}`} key={book._id}>
                  <button className="buy-now-btn">More info</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
