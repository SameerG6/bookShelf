import "../App.css";
import Banner from '../components/Banner';
import BestSellerBooks from "./BestSellerBooks";
import FavBook from "./FavBook";
import Promobanner from "./PromoBanner";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Banner />
    <BestSellerBooks/>
    <FavBook />
    <Promobanner/>
    <Footer/></div>
  );
}
export default Home;
