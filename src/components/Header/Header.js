import React, {useState} from "react";
//import { Link } from "react-router-dom";
//import { Icons } from "react-icons/all";
import "../../assets/css/Header.css"
import {Container} from "react-bootstrap";

function Header() {
    const [hiddenMenu, setHiddenMenu] = useState(true);
    return (
        <Container className={"cont"}>
                <div className={"hero"}>
                    <nav className={"main-nav"}>
                        {/*<div className={"a-logo"}>*/}
                        {/*    <a href="#" className={"logo"}>STYLEFAST.PRO</a>*/}
                        {/*</div>*/}
                        <div className={ "menu" + (hiddenMenu ? " myhidden" : "") }>
                            <ul>
                                <li><a href="#">Shops</a></li>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Blogs</a></li>
                                <li><a href="#">User Space</a></li>
                            </ul>
                        </div>
                        <span onClick={ () => setHiddenMenu(!hiddenMenu)}>|||</span>
                    </nav>
                </div>

        </Container>
    )
}

export default Header;