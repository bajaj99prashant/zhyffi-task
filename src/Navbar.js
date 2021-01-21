import { Link } from "@reach/router";
import React, { useState } from "react";
import "./css/navbar.css";

function Navbar({ name }) {
  const [clicked, setClicked] = useState(false);
  const handleMenu = () => {
    setClicked(!clicked);
  };
  return (
    <div className="navbar">
      <div className="upper-navbar">
        <div className="container flex">
          <div className="upper-nav-left">
            <Link to="#">Mobiles</Link>
            <Link to="#">Laptops</Link>
            <Link to="#">Video Games</Link>
            <Link to="#">Watches</Link>
            <Link to="#">Tablets</Link>
            <Link to="#">More</Link>
          </div>
          <div className="upper-nav-right">
            <span>
              <img src="icons/pin.svg" className="location" alt="location" />{" "}
              Hyderabad
            </span>
            {name !== null ? (
              <span>
                <img
                  src="icons/profile.jpg"
                  className="location"
                  alt="profile"
                />
                {name}
              </span>
            ) : (
              <img src="icons/profile.jpg" className="profile" alt="profile" />
            )}
            <img src="icons/like.svg" alt="like" />
            <img src="icons/chat.svg" alt="chat" />
          </div>
        </div>
      </div>

      <div
        className={`lower-navbar ${clicked ? "lower-navbar-clicked" : null}`}
      >
        <div className="container flex lower-container">
          <div className="flex lower-left">
            <Link to="/login">
              <img src="icons/zifi.png" alt="zifi-logo" />
            </Link>
            <input type="text" placeholder="search" />
            <div
              className="menu-icon"
              onClick={() => handleMenu()}
              role="button"
              tabIndex={0}
              onKeyDown={(f) => f}
            >
              {clicked ? (
                <img src="icons/close.svg" alt="close" />
              ) : (
                <img src="icons/menu.svg" className="icon-menu" alt="menu" />
              )}
            </div>
          </div>
          <div className="flex left-right">
            <div className="lower-right-icons flex">
              <span>
                <img src="icons/wallet.svg" alt="wallet" /> Balance
              </span>
            </div>
            <img src="icons/cart.svg" alt="cart" className="cart-image" />
            <button>Sell</button>
          </div>
        </div>
      </div>

      <div className={clicked ? "show" : "hidden"}>
        <ul className="list-res">
          <li className="flex list-item-flex">
            <img src="icons/profile.jpg" className="profile" alt="profile" />
            <span>{name ? name : "profile"}</span>
          </li>
          <li>
            <span className="flex list-item-flex">
              <img src="icons/pin.svg" alt="location" /> Hyderabad
            </span>
          </li>

          <li>
            <Link to="#">Mobiles</Link>
          </li>

          <li>
            <Link to="#">Laptops</Link>
          </li>

          <li>
            <Link to="#">Video Games</Link>
          </li>

          <li>
            <Link to="#">Watches</Link>
          </li>

          <li>
            <Link to="#">Tablets</Link>
          </li>

          <li>
            <Link to="#">More</Link>
          </li>

          <li>
            <button>Sell</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
