import React, { useState } from "react";
import "../css/Header.css";
import { SlBasket } from "react-icons/sl";
import { IoSunny } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { useDispatch, useSelector } from 'react-redux';
import { setDrawer } from '../redux/slices/basketSlice';


const Header = () => {
  const [theme, setTheme] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { products } = useSelector((store) => store.basket);

  const changeTheme = () => {
    const root = document.getElementById("root");
    if (theme) {
      root.style.backgroundColor = "white";
      root.style.color = "black";
    } else {
      root.style.backgroundColor = "black";
      root.style.color = "white";
    }
    setTheme(!theme);
  };

  
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
        <img className="logo" src="/Gsb-Logo.png" alt="GSB Logo" />
      </div>
      <div className="flex-row">
        <input className="search-input" placeholder="Search" type="text" />
        <div>
          {theme ? (
            <FaMoon className="icon" onClick={changeTheme} />
          ) : (
            <IoSunny className="icon" onClick={changeTheme} />
          )}
          <Badge onClick={() => dispatch(setDrawer())} badgeContent={products.length} color="error">
            <SlBasket style={{ marginRight: "6px" }} className="icon" />
          </Badge>
        </div>
 
      </div>
    </div>
  );
};

export default Header;
