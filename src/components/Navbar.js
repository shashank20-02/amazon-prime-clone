import { React, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import amazonlogo from "../assets/prime-logo.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

function Navbar() {
  return (
    <div className="__navbar">
      <div className="__left">
        <img className="__primelogo" src={amazonlogo} alt="" />
        <div className="__ulleft">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/store">Store</Link>
            </li>
            <li>
              <Link to="/channel">Channels</Link>
            </li>
            <li>
              <Link to="/" className="__arrow_icon">
                Categories
                <ArrowDropDownIcon />
              </Link>
            </li>
            <li>
              <Link to="/">My Stuff</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="__right">
        <button className="__costum">Try for free</button>
        <div className="__ulright">
          <div className="__btnc1">
            <SearchOutlinedIcon className="__btncust __btncn" />
          </div>
          <div className="__btnc2">
            <LanguageOutlinedIcon className="__btncust __common" />
            <ArrowDropDownIcon className="__btncust " />
          </div>
          <div className="__btnc3">
            <PersonOutlinedIcon className="__btncust __common" />
            <ArrowDropDownIcon className="__btncust" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
