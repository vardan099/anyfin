import React, {useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';
import Logout from './auth/Logout';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const authLinks = (user) => {
    return (
        <>
            <NavItem>
          <span className='navbar-text mr-3'>
            <strong>{user ? `Welcome ${user.name}` : ''}</strong>
          </span>
            </NavItem>
            <NavItem>
                <Logout/>
            </NavItem>
        </>
    )
};

const guestLinks = () => {
    return (
        <>
            <NavItem>
                <NavLink href="/register">Register</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/login">Login</NavLink>
            </NavItem>
        </>
    )
};


const AppNavBar = (props) => {
    const {isAuthenticated, user} = props.auth;
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };
    return (
        <div>
            <Navbar color='dark' dark expand='sm' className='mb-5'>
                <Container>
                    <NavbarBrand href='/'>Anyfin</NavbarBrand>
                    <NavbarToggler onClick={toggle}/>
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className='ml-auto' navbar>
                            {isAuthenticated ? authLinks(user) : guestLinks()}
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

AppNavBar.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    null
)(AppNavBar);
