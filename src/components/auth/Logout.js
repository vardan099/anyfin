import React from 'react';
import { NavLink } from 'reactstrap';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";

const Logout = (props) => {
    const history = useHistory();
    const handleLogout = () =>{
      const {logout} = props;
      logout();
      history.push('/login')
    };
    return (
        <>
          <NavLink onClick={handleLogout} href='#'>
            Logout
          </NavLink>
        </>
    );
};

Logout.propTypes = {
  logout: PropTypes.func.isRequired
};

export default connect(
    null,
    { logout }
)(Logout);
