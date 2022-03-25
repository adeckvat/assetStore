import React from "react";
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    return (
        <Container 
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
            >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Sign in' : "LOGIN"}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control 
                    className="mt-3"
                    placeholder="email" 
                    />
                    <Form.Control 
                    className="mt-3"
                    placeholder="password" 
                    />
                    <Row md={"auto"} className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        {isLogin ? 
                            <div>
                                No Sign in, yet? 
                                    <NavLink to={REGISTRATION_ROUTE} className={"ms-2"}>Sign in!</NavLink>
                            </div>
                        :
                        <div>
                            Do you have account? 
                                <NavLink to={LOGIN_ROUTE} className={"ms-2"}>Login!</NavLink>
                        </div>
                        }
                        <Button
                            variant={"outline-success"}
                        >
                            {isLogin ? 'LOGIN' : 'SIGN UP'}
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;