import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Menu from "./component/Menu";
import ProductList from "./page/ProductList";
import Login from "./page/Login";
import PrivateRoute from "./route/PrivateRoute";

// 1. 상품리스트(전체), 상품 디테일, 로그인 페이지
// 2. 상품을 클릭하면 로그인상태라면 상품디테일페이지로, 로그아웃 상태라면 로그인 페이지로 이동한다.
// 3. 로그인을 클릭하면 로그인 페이지로 이동한다. 이동 후 로그아웃으로 상태변환
// 4. 로그아웃을 클릭하면 로그아웃이 되고, 로그인 페이지로 이동한다.
// 5. 상품을 검색할 수 있다.

function App() {
    const [authenticate, setAuthenticate] = useState(false); // true이면 로그인이 된 상태(로그아웃을 보여줘야함), false면 로그인이 안된상태(로그인을 보여줘야함)

    useEffect(() => {
        console.log("authenticate?", authenticate);
    }, [authenticate]);

    return (
        <div className="body-wrap">
            <Menu
                authenticate={authenticate}
                setAuthenticate={setAuthenticate}
            />
            <div className="content-wrap">
                <Routes>
                    <Route path="/" element={<ProductList />} />
                    <Route
                        path="/login"
                        element={<Login setAuthenticate={setAuthenticate} />}
                    />
                    <Route
                        path="/product/:id"
                        element={<PrivateRoute authenticate={authenticate} />}
                    />
                </Routes>
            </div>
        </div>
    );
}

export default App;
