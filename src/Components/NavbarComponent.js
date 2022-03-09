import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import logo from '../Assets/images/logo.png';
import '../Assets/css/navbar.css';

const NavbarComponent = () => {
    return (
        <div className='header mt-2 border-bottom'>
            <div className='container logo-container'>
                <div className='row'>
                    <div className='col-xs-12 col-lg-4 text-lg-start text-sm-center logo align-self-center'>
                        <img className='img-fluid school-logo' src={logo} alt='Logo' loading='lazy' />
                    </div>
                    <div className='col-xs-12 col-lg-8 text-start'>
                        <Navbar expand="lg">
                            <div className='container navbar-container'>
                                <Navbar.Toggle aria-controls="navbarScroll" />
                                <Navbar.Collapse id="navbarScroll">
                                    <Nav
                                        className="mr-auto my-lg-0"
                                        style={{ textAlign: 'center' }}
                                    >
                                        <React.Fragment>
                                            <NavLink to='/' className='header-link' style={{ margin: '10px', textDecoration: 'none' }}>Home</NavLink>
                                            <NavLink to='/about' className='header-link ml-5' style={{ margin: '10px', textDecoration: 'none' }}>About</NavLink>
                                            <NavLink to='/syllabus' className='header-link ml-5' style={{ margin: '10px', textDecoration: 'none' }}>Syllabus</NavLink>
                                            <NavLink to='/programs' className='header-link ml-5' style={{ margin: '10px', textDecoration: 'none' }}>Programs</NavLink>
                                            <NavLink to='/gallery' className='header-link ml-5' style={{ margin: '10px', textDecoration: 'none' }}>Gallery</NavLink>
                                            <NavLink to='/contact' className='header-link ml-5' style={{ margin: '10px', textDecoration: 'none' }}>Contact</NavLink>
                                        </React.Fragment>
                                    </Nav>
                                </Navbar.Collapse>
                            </div>
                        </Navbar>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarComponent;
