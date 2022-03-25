import React, {useContext} from "react";
import {Context} from "../index";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import Button from 'react-bootstrap/Button'
import {observer} from "mobx-react-lite";
import { generatePath, useNavigate } from 'react-router-dom';


const NavBar = observer ( () => {
    const {user} = useContext(Context)
    const history = useNavigate();
    const pathAdmin = generatePath(ADMIN_ROUTE);
    const pathLogin = generatePath(LOGIN_ROUTE);
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: 'whitesmoke'}} to={SHOP_ROUTE}>KafelHoll</NavLink>
                    {user.isAuth ?
                        <Nav className="ml-auto" style={{color: 'whitesmoke'}}>
                            <Button 
                                variant={"outline-light"} 
                                onClick={() => history(pathAdmin)}
                            >
                                AdminPanel
                            </Button>{' '}
                            <Button 
                                variant={"outline-light"} 
                                onClick={() => history(pathLogin)}
                                className="ms-2" 
                            >
                                logout
                            </Button>{' '}
                        </Nav>
                        :
                        <Nav className="ml-auto" style={{color: 'whitesmoke'}}>
                            <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Authorization</Button>{' '}
                        </Nav>
                    }
            </Container>
        </Navbar>
    );
});

export default NavBar;