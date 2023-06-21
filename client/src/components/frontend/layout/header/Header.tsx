import Input from "../../form_elements/Input";
import Button from "../../form_elements/Button";
import { Link } from "react-router-dom";
import { Menu as MenuList } from "./Menu";
import { SearchFormHandler } from "./SearchFormHandler";

const Header: React.FC<{}> = () => {
  // toggle the Menu
  function toggleNav() {
    let menu_toggler = document.querySelector("#menu_toggler");
    let mobile_menu = document.querySelector("#mobile_menu");

    // add active class
    menu_toggler.classList.toggle("open");
    mobile_menu.classList.toggle("open");

    // remove open class from menu item
    document.querySelectorAll(".menu-item").forEach((n) =>
      n.addEventListener("click", () => {
        menu_toggler.classList.remove("open");
        mobile_menu.classList.remove("open");
      })
    );
  }

  function searchPopup() {
    let search_popup = document.querySelector("#search-popup-form-wrapper");
    let body_overlay = document.querySelector("#body-overlay");

    // add active class
    search_popup.classList.add("active");
    body_overlay.classList.add("active");
  }

  function closeSearchPopup() {
    let search_popup = document.querySelector("#search-popup-form-wrapper");
    let body_overlay = document.querySelector("#body-overlay");

    // remove active class
    search_popup.classList.remove("active");
    body_overlay.classList.remove("active");
  }
  return (
    <>
      {/* search popup start*/}
      {/* ----------- Implementation will be next task --------- */}
      <div className="search-popup-form-wrapper" id="search-popup-form-wrapper">
        <form action="/search" className="search-form">
          <div className="form-group">
            <Input
              type="text"
              className="form-control"
              placeholder="Search....."
            />
          </div>
          <Button type="submit" className="submit-btn">
            <i className="fa fa-search" />
          </Button>
        </form>
      </div>
      {/* search popup end*/}
      <div
        className="body-overlay"
        id="body-overlay"
        onClick={closeSearchPopup}
      />
      <header className="header">
        {/* top-header */}
        <div className="top-header-wrapper">
          <div className="container top-menu">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <ul className="social-area social-area-top-header">
                  <li>
                    <a className="facebook-icon" href="#">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a className="twitter-icon" href="#">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a className="youtube-icon" href="#">
                      <i className="fa fa-youtube-play" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <a className="btn btn-secondary float-right" href="#">
                  <Link to="/login">Login</Link>
                </a>
              </div>
            </div>
          </div>

          {/* adbar end*/}
          <div className="adbar-area  d-none d-lg-block">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-5">
                  <a className="main-logo" href="index.html">
                    <img
                      src="./assets/images/erfan_logo.png"
                      alt="Erfan Logo"
                    />
                  </a>
                </div>
                <div className="col-xl-6 col-lg-7">
                  <a
                    target="_blank"
                    href="https://portfolio-abdullatif-erfan.vercel.app/"
                    className="adbar-right"
                  >
                    <img src="./assets/images/ads.png" alt="img" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* adbar end*/}

          {/* nave */}
          <nav className="navbar navbar-expand-lg">
            <div className="container nav-container">
              <div className="responsive-mobile-menu">
                <div className="logo d-lg-none d-block">
                  <a
                    className="main-logo d-flex alignt-items-center"
                    href="index.html"
                  >
                    <img src="./assets/images/logo.png" alt="img" />
                  </a>
                </div>
                <button
                  className="menu toggle-btn d-block d-lg-none "
                  onClick={toggleNav}
                  id="menu_toggler"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="icon-left" />
                  <span className="icon-right" />
                </button>
              </div>

              <div className="nav-right-part nav-right-part-mobile">
                <a className="search header-search" href="#">
                  <i onClick={searchPopup} className="fa fa-search" />
                </a>
              </div>
              <div className="collapse navbar-collapse" id="mobile_menu">
                <MenuList />
              </div>
              <SearchFormHandler />
            </div>
          </nav>
          {/* End nave */}
        </div>
        {/* End top-header */}
      </header>
    </>
  );
};

export default Header;
