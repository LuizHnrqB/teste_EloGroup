
import logo from '../img/logo.png'
import user from '../img/user.png'
import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from 'reactstrap';

const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar className="navbar" light expand="md" style={{ display: 'flex', width: '100%', backgroundColor: '#14222b', fill: '#14222b', height: '60px', justifyContent: 'space-between' }}>
                <NavbarBrand ><img className="logo-image" style={{ marginLeft: '60px', height: '11px', width: '105px' }} src={logo}></img></NavbarBrand>

                <NavbarToggler onClick={toggle} />

                <Nav>

                </Nav>
                <NavbarBrand> <div>  <img style={{ height: '42px', width: '42px', marginRight: '60px' }} className="user-image" src={user} /></div></NavbarBrand>


            </Navbar>
        </div >
    );
}

export default Example;