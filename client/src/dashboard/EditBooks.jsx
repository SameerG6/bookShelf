import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import "../App.css";


const EditBooks = () => {
  const { id } = useParams();
  const {
    bookTitle,
    authorName,
    imageURL,
    category,
    bookDescription,
    bookPDFURL,
  } = useLoaderData();
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

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.category.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;

    const updateBookObj = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPDFURL,
    };
    // console.log(bookObj);
    fetch(`http://localhost:5000/book/${id}`,{
      method:"PATCH",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updateBookObj)
    }).then(res => res.json()).then(data =>{
      alert("Book updated successfully")
    })
  };
  return (
    <div className="upbook">
      <h2>Update Book data</h2>

      <form onSubmit={handleUpdate} className="upform">
        <div className="upform-group">
          <label htmlFor="bookTitle">Book Title:</label>
          <input type="text" id="bookTitle" name="bookTitle" required defaultValue={bookTitle}/>
        </div>

        <div className="upform-group">
          <label htmlFor="authorName">Author Name:</label>
          <input type="text" id="authorName" name="authorName" required defaultValue={authorName}/>
        </div>

        <div className="upform-group">
          <label htmlFor="bookDescription">Book Description:</label>
          <textarea
            id="bookDescription"
            name="bookDescription"
            rows="4"
            required
            defaultValue={bookDescription}
          ></textarea>
        </div>

        <div className="upform-group">
          <label htmlFor="imageURL">Cover Image:</label>
          <input type="text" id="imageURL" name="imageURL" required defaultValue={imageURL}/>
        </div>

        <div className="upform-group">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            name="category"
            value={selectedCategory}
            onChange={handleChangeSelectedValue}
            required
            Value={category}
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
          <input type="text" id="bookPDFURL" name="bookPDFURL" required defaultValue={bookPDFURL}/>
        </div>

        <button type="submit">Update Book</button>
      </form>
    </div>
  );
};

export default EditBooks;
