import { Link } from "react-router-dom";
import bookPic from "../assets/awardbooks.png";
function Promobanner() {
  return (
    <div className="pbd">
      <div className="pbd2">
        <div>
          <h2>2023 National Book Award For Fiction</h2>
          <Link to="/shop">
            <button>Explore More</button>
          </Link>
        </div>
        <div>
            <img src={bookPic}></img>
        </div>
      </div>
    </div>
  );
}

export default Promobanner;
