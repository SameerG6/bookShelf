import React, { useEffect, useState } from "react";
import "./ManageBooks.css"; // Import CSS file for table styling
import { Link } from "react-router-dom";
const ManageBooks = () => {
  // Sample data for demonstration
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((res) => res.json())
      .then((data) => setAllBooks(data));
  }, []);

  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/book/${id}`, {
      // Correct interpolation syntax
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Book is deleted successfully");
        window.location.reload();
      });
  };

  return (
    <div>
      <h2>Manage Books</h2>
      <table className="book-table">
        {" "}
        {/* Apply CSS class for table styling */}
        <thead>
          <tr>
            {/* <th>ID</th> */}
            <th>Title</th>
            <th>Author</th>
            <th>Image</th>
            <th>Category</th>
            <th>Description</th>
            <th>PDF URL</th>
            <th>Actions</th>
          </tr>
        </thead>
        {/* {
          allBooks.map((book, index) => <tbody key={book._id}></tbody>)
        } */}
        <tbody>
          {allBooks.map((book) => (
            <tr key={book.id}>
              {/* <td>{book.id}</td> */}
              <td>{book.bookTitle}</td>
              <td>{book.authorName}</td>
              <td>
                <img src={book.imageURL} alt={book.bookTitle} />
              </td>{" "}
              {/* Render image */}
              <td>{book.category}</td>
              <td>{book.bookDescription}</td>
              <td>{book.bookPDFURL}</td>
              <td>
                <Link to={`/admin/dashboard/edit-books/${book._id}`}>
                  <button>Edit</button>
                </Link>
                <button className="del" onClick={() => handleDelete(book._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageBooks;
