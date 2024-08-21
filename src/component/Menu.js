import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Menu = () => {
    const menuList = [
        "여성",
        "남성",
        "아동",
        "신생아/유아",
        "셔츠",
        "바지",
        "스커트",
        "원피스",
        "Sale",
    ];
    return (
        <div className="nav-wrap">
            <div className="login-button">
                <FontAwesomeIcon icon={faUser} />
                <span>로그인</span>
            </div>
            <div className="logo">
                <img src="/logo-hnm.png" alt="HnM" width="50" />
            </div>
            <div className="menu">
                <ul>
                    {menuList.map((menu) => (
                        <li>{menu}</li>
                    ))}
                </ul>
                <div className="search">
                    <FontAwesomeIcon icon={faSearch} />
                    <input type="text" />
                </div>
            </div>
        </div>
    );
};

export default Menu;
