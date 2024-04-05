import {Link} from "react-router-dom";
import { FaBarsStaggered, FaBlog } from "react-icons/fa6";
import "../App.css";
import {useContext, useEffect} from "react";
import { AuthContext } from "../contacts/AuthProvider";

function Navbar() {
  let isMenuOpen = false;
  let isSticky = false;

  const {user} = useContext(AuthContext);
  console.log(user);

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
    // console.log("Menu is now", isMenuOpen ? "open" : "closed");
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      isSticky = true;
    } else {
      isSticky = false;
    }
  };

  const navItems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Books", path: "/shop" },
    { link: "Admin", path: "/admin/dashboard" },
    // { link: "Blog", path: "/blog" }
  ];

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="navhead">
      <nav className="navba">
        <div className="navdiv">
          <Link to="/" className="abc">
            <FaBlog className="blogo" />
            bookShelf
          </Link>

          <h3>{user ? user.email : ""}</h3>
          <ul className="ulnav">
            {navItems.map(({ link, path }) => (
              <Link key={path} to={path} className="ulnavit">
                {link}
              </Link>
            ))}
          </ul>
          {/* <div className="navb">
            <button><FaBarsStaggered className="navbut"/></button>
          </div> */}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
