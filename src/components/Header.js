import { useState } from "react";
import {LOGO_URL} from "./utils/constants";
const Header = () => {
  const[btnName, setbtnName] = useState("Login");
  console.log("Header Called");
    return (
      <div className="header">
        <div>
          <img
            className="logo"
            src={LOGO_URL}
          />
        </div>
        <div className="nav-container">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact US</li>
            <li>Cart</li>
            <button className="login" onClick={() => {
              btnName === "Login" ? setbtnName("Logout"): setbtnName("Login");
              console.log(btnName);
            }}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;


