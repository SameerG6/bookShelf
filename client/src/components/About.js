import React from "react";
import "../App.css";
import "./About.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const About = () => {
  return (
    <div>
      <div className="about-container">
        <div className="about-content">
          <h1>Welcome to Bookshelf</h1>
          <p>
            At Bookshelf, our mission is to provide free access to a vast
            library of PDF books to everyone, regardless of their location,
            background, or financial status. We believe that knowledge should be
            freely accessible to all, and we're committed to making that a
            reality.
          </p>
          <p>
            Whether you're a student, a book lover, or someone passionate about
            learning, you'll find a wide range of books on Bookshelf covering
            various genres, topics, and interests. From classic literature to
            contemporary fiction, from academic textbooks to self-help guides,
            there's something for everyone.
          </p>
          <p>
            Our collection of PDF books is constantly growing, thanks to the
            contributions of authors, publishers, and volunteers who share our
            vision of making knowledge accessible to all. We also encourage our
            users to contribute by sharing their favorite books and resources,
            helping us expand our library and reach even more people.
          </p>
          <p>
            Start exploring our library today and embark on a journey of
            discovery, enlightenment, and personal growth. Join us in our
            mission to spread the joy of reading and empower individuals through
            knowledge.
          </p>
          <Link to="/shop" className="explore-btn">
            Explore Our Library
          </Link>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default About;
