import React, { useState } from "react";
import "../App.css";

const UploadBook = () => {
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mystery",
    "Romance",
    "Horror",
    "Studies",
    "Programming",
    "Romantasy",
    "Fantasy",
    "Science Fiction",
    "Bibliography",
    "Autobiography",
    "Self-help",
    "Science",
    "Business",
    "Children Books",
    "Travel",
    "Religion",
    "Art and Design",
  ];

  const [selectedCategory, setSelectedCategory] = useState(bookCategories[0]);

  const handleChangeSelectedValue = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleBookSubmit = (event) =>{
    event.preventDefault();
    const form = event.target;
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.category.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;

    const bookObj = {
      bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL
    }
    console.log(bookObj);
    fetch("http://localhost:5000/upload-book",{
      method: "POST",
      headers:{
        "Content-type": "application/json",
      },
      body: JSON.stringify(bookObj)
    }).then(res => res.json()).then(data =>{
      alert("Book uploaded successfully!!!")
      form.reset();
    })
  }
  return (
    <div className="upbook">
      <h2>Upload a Book</h2>

      <form onSubmit={handleBookSubmit} className="upform">
        <div className="upform-group">
          <label htmlFor="bookTitle">Book Title:</label>
          <input type="text" id="bookTitle" name="bookTitle" required />
        </div>

        <div className="upform-group">
          <label htmlFor="authorName">Author Name:</label>
          <input type="text" id="authorName" name="authorName" required />
        </div>

        <div className="upform-group">
          <label htmlFor="bookDescription">Book Description:</label>
          <textarea
            id="bookDescription"
            name="bookDescription"
            rows="4"
            required
          ></textarea>
        </div>

        <div className="upform-group">
          <label htmlFor="imageURL">Cover Image:</label>
          <input type="text" id="imageURL" name="imageURL" required />
        </div>

        <div className="upform-group">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            name="category"
            value={selectedCategory}
            onChange={handleChangeSelectedValue}
            required
          >
            {bookCategories.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="upform-group">
          <label htmlFor="bookPDFURL">Book PDF URL:</label>
          <input type="text" id="bookPDFURL" name="bookPDFURL" required />
        </div>

        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default UploadBook;
