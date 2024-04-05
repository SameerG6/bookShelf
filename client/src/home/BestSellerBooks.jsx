
import React, { useEffect, useState } from "react";
import BookCards from "../components/BookCards";

const BestSellerBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.slice(0,6)); // Log fetched data
        setBooks(data.slice(0,6));
      })
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  return (
    <div>
      {/* Pass both headline and books as properties of a single object */}
      <BookCards headline="Some of our Books" books={books} />
    </div>
  );
};

export default BestSellerBooks;
