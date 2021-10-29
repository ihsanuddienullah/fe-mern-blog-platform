import { useState } from "react";
import { signout, isAuth } from "../actions/auth";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
} from "reactstrap";
import { APP_NAME } from "../config";
import Link from "next/link";
import Router from "next/router";

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <Link href="/">
                    <NavLink className="font-weight-bold" href="/">
                        {APP_NAME}
                    </NavLink>
                </Link>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        {!isAuth() && (
                            <>
                                <NavItem>
                                    <Link href="/signin">
                                        <NavLink>Signin</NavLink>
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link href="/signup">
                                        <NavLink>Signup</NavLink>
                                    </Link>
                                </NavItem>
                            </>
                        )}
                        {isAuth() && (
                            <NavItem>
                                <NavLink
                                    style={{ cursor: "pointer" }}
                                    onClick={() =>
                                        signout(() => Router.replace("/signin"))
                                    }
                                >
                                    Signout
                                </NavLink>
                            </NavItem>
                        )}
                    </Nav>
                    <NavbarText>Simple Text</NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default Header;
