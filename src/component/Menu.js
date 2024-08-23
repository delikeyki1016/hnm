import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCircleRight } from "@fortawesome/free-regular-svg-icons";
import { faXmarkCircle } from "@fortawesome/free-regular-svg-icons";

import { useNavigate } from "react-router-dom";

const Menu = ({ authenticate, setAuthenticate }) => {
    console.log("메뉴의로그인상태", authenticate);
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

    const navigate = useNavigate();
    const myMenuRef = useRef(null);

    const goToLogin = () => {
        navigate("/login");
    };

    const goToLogOut = () => {
        setAuthenticate(false);
        navigate("/");
    };

    const goToHome = () => {
        navigate("/");
    };

    const showMenu = () => {
        myMenuRef.current.style.display = "block";
    };

    const hiddenMenu = () => {
        myMenuRef.current.style.display = "none";
    };

    const search = (event) => {
        if (event.key === "Enter") {
            // console.log("press!", event.key);
            // 입력한 검색어를 읽어와서 url을 바꿔준다.
            let keyword = event.target.value;
            // console.log("키워드?", keyword);
            navigate(`/?q=${keyword}`);
        }
    };
    return (
        <div className="nav-wrap">
            <div className="login-button" onClick={goToLogin}>
                <FontAwesomeIcon icon={faUser} />
                {authenticate ? (
                    <span onClick={goToLogOut}>로그아웃</span>
                ) : (
                    <span onClick={goToLogin}>로그인</span>
                )}
            </div>
            <div className="logo">
                <img
                    src="/logo-hnm.png"
                    alt="HnM"
                    width="50"
                    onClick={goToHome}
                />
            </div>
            <div className="menu">
                <FontAwesomeIcon
                    icon={faCircleRight}
                    size="lg"
                    className="mobile-menu"
                    onClick={showMenu}
                />
                <div className="menu-list" ref={myMenuRef}>
                    <ul>
                        {menuList.map((menu) => (
                            <li>{menu}</li>
                        ))}
                    </ul>
                    <FontAwesomeIcon
                        icon={faXmarkCircle}
                        size="lg"
                        className="close-menu"
                        onClick={hiddenMenu}
                    />
                </div>
                <div className="search">
                    <FontAwesomeIcon icon={faSearch} />
                    <input type="text" onKeyPress={(event) => search(event)} />
                </div>
            </div>
        </div>
    );
};

export default Menu;
