import "../App.css";
import BannerCard from "../home/BannerCard";
import "swiper/css/effect-cards";


function Banner() {
  return (
    <div className="ban">
      <div className="inban">
        <div className="inband">
          <h2>
            Buy and Sell your books<span> for the best prices</span>
          </h2>
          <p>
            Welcome to bookShelf, your one-stop destination for all things
            books! Whether you're a bookworm, a casual reader, or someone in
            search of a literary adventure, we've got you covered. Dive into our
            extensive collection of bestsellers, classics, fiction, non-fiction,
            and much more. Discover captivating stories, embark on thrilling
            adventures, and explore new worlds within the pages of our books.
            From timeless classics to contemporary masterpieces, there's
            something for everyone at bookShelf.
          </p>
          <div>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search a book"
              className="bansearch"
            ></input>
            <button>Search</button>
          </div>
        </div>

        <div>
          {/* <img src=""></img> */}
          <BannerCard />
        </div>
      </div>
    </div>
  );
}

export default Banner;
