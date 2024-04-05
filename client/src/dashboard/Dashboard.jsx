import React, { useState, useEffect } from "react";
import "./Dashboard.css";

const Dashboard = () => {
  // Sample data (replace with your actual data fetching logic)
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch your books data
    // Replace this fetch logic with your actual data fetching logic
    fetch("http://localhost:5000/all-books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      })
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  // Calculate total number of books
  const totalBooks = books.length;

  // Calculate total number of categories
  const categories = books.map((book) => book.category);
  const uniqueCategories = [...new Set(categories)];
  const totalCategories = uniqueCategories.length;

  // Calculate total number of books in each category
  const booksInEachCategory = {};
  categories.forEach((category) => {
    booksInEachCategory[category] = booksInEachCategory[category]
      ? booksInEachCategory[category] + 1
      : 1;
  });

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-heading">Dashboard</h1>
      <div className="dashboard-stats">
        <div className="dashboard-stat">Total Books: {totalBooks}</div>
        <div className="dashboard-stat">
          Total Categories: {totalCategories}
        </div>
      </div>
      <h2>Books in Each Category:</h2>
      <ul className="category-list">
        {Object.entries(booksInEachCategory).map(([category, count]) => (
          <li key={category} className="category-item">
            {category}: {count}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
