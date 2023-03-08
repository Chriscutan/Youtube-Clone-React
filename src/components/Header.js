import React, { useState } from "react";
import VideoCallSharpIcon from "@mui/icons-material/VideoCallSharp";
import NotificationsSharpIcon from "@mui/icons-material/NotificationsSharp";
import AppsSharpIcon from "@mui/icons-material/AppsSharp";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import KeyboardVoiceSharpIcon from "@mui/icons-material/KeyboardVoiceSharp";
import Avatar from "@mui/material/Avatar";
import "../components/Header.css";
import { Link } from "react-router-dom";

function Header() {
  const [inputSearch, setInputSearch] = useState("");
  return (
    <div className="header">
      <div className="header__left">
        <MenuSharpIcon />
        <Link to="/">
          <img
            className="header__logo"
            src="https://imgs.search.brave.com/7NyhlFMrGaYCK-tzEYqR75cF4kRy8sHpGjHu_DGFsEE/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDQvWW91VHViZS1M/b2dvLTIwMTMtMjAx/NS5wbmc"
            alt=""
          />
        </Link>
      </div>

      <div className="header__search">
        <div className="header__searchbar">
          <input
            type="text"
            placeholder="Search"
            value={inputSearch}
            onChange={(e) => setInputSearch(e.target.value)}
          />
          <Link to={`/search/${inputSearch}`}>
            <SearchSharpIcon className="header__searchButton" />
          </Link>
        </div>
        <KeyboardVoiceSharpIcon />
      </div>

      <div className="header__right">
        <VideoCallSharpIcon className="header__icon" />
        <NotificationsSharpIcon className="header__icon" />
        <AppsSharpIcon className="header__icon" />
        <Avatar
          className="header__icon"
          alt=""
          src="https://avatars.githubusercontent.com/u/97525332?v=4"
        />
      </div>
    </div>
  );
}

export default Header;
