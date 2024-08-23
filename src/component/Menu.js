import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

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

    const navigate = useNavigate();

    const goToLogin = () => {
        navigate("/login");
    };

    const goToHome = () => {
        navigate("/");
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
                <span>로그인</span>
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
                <ul>
                    {menuList.map((menu) => (
                        <li>{menu}</li>
                    ))}
                </ul>
                <div className="search">
                    <FontAwesomeIcon icon={faSearch} />
                    <input type="text" onKeyPress={(event) => search(event)} />
                </div>
            </div>
        </div>
    );
};

export default Menu;
