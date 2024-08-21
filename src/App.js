import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ProductList from "./page/ProductList";
import Login from "./page/Login";
import ProductDetail from "./page/ProductDetail";
import Menu from "./component/Menu";

// 1. 상품리스트(전체), 상품 디테일, 로그인 페이지
// 2. 상품을 클릭하면 로그인상태라면 상품디테일페이지로, 로그아웃 상태라면 로그인 페이지로 이동한다.

function App() {
    return (
        <div>
            <Menu />
            <Routes>
                <Route path="/" element={<ProductList />} />
                <Route path="/login" element={<Login />} />
                <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
        </div>
    );
}

export default App;
