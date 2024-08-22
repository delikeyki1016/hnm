import React from "react";
import { Button, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const Login = ({ setAuthenticate }) => {
    const navigate = useNavigate();

    const loginUser = (e) => {
        e.preventDefault();
        console.log("login user!");
        setAuthenticate(true);
        navigate("/");
    };
    return (
        <Container className="w-25 mt-5">
            <h2>Login</h2>
            {/* form의 submit버튼이 있을 때는 onSubmit으로! 
            submit이 되면 리프레시가 되기때문에 event을 매개변수로 넣어서 이벤트를 막아줌 */}
            <Form className="mb-3 mt-3" onSubmit={(e) => loginUser(e)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="danger" type="submit">
                    Login
                </Button>
            </Form>
        </Container>
    );
};

export default Login;
