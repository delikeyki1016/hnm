import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
// 2. dispatch import
import { useDispatch } from "react-redux";
import { authenticateAction } from "../redux/actions/authenticateAction";

const Login = () => {
    // 4. id,password 세팅
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const dispatch = useDispatch();

    // 1. 로그인을 하면, 아이디,패쓰워드,authenticate 정보를 저장한다고 가정한다면
    const loginUser = (e) => {
        e.preventDefault();
        // console.log("login user!");
        // 3. setAuthenticate(true); 미들웨어 함수를 콜해줌
        dispatch(authenticateAction.login(id, password));
        navigate("/");
    };
    return (
        <Container className="mt-5 d-flex" style={{ justifyContent: "center" }}>
            <div className="login-box">
                <h2>Login</h2>
                {/* form의 submit버튼이 있을 때는 onSubmit으로! 
                submit이 되면 리프레시가 되기때문에 event을 매개변수로 넣어서 이벤트를 막아줌 */}
                <Form className="mb-3 mt-3" onSubmit={(e) => loginUser(e)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            onChange={(event) => setId(event.target.value)}
                        />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="danger" type="submit">
                        Login
                    </Button>
                </Form>
            </div>
        </Container>
    );
};

export default Login;
