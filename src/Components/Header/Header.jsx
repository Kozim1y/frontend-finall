import "./Header.scss";
import { Link } from "react-router-dom";

//images
import burger from "../../Assets/Images/burger-button.png";
// import siteLogo from "../../Assets/Images/youtube-logo.png";
import search from "../../Assets/Images/search.png";
import icon1 from "../../Assets/Images/icon-1.png";
import icon2 from "../../Assets/Images/icon-2.png";
import icon3 from "../../Assets/Images/icon-3.png";
import icon4 from "../../Assets/Images/user-icon.png";
import Logo from "../Svgs/youtube";


function Header() {
  return (
    <>
      <header>
        <div className="header-left">
        <button className="burger-button">
          <img src={burger} alt="burger-button" width="20" height="15" />
        </button>


        <Link to="/">
          <Logo />
        </Link>
        
          <div className="search-form">
            <input type="search" placeholder="search"/>
            <button type="submit">
              <img src={search} />
            </button>
          </div>
        </div>

        <ul className="icon-list">
          <li>
            <img src={icon1} alt="videomaker icon" width="27" height="20" />
          </li>

          <li>
            <img src={icon2} alt="menu icon" width="21" height="21"/>
          </li>

          <li>
            <img src={icon3} alt="bell icon" width="22" height="26"/>
          </li>

          <li>
            <img src={icon4} alt="user img" width="40" height="40"/>
          </li>
        </ul>

      </header>
    </>
  )
}
export default Header;