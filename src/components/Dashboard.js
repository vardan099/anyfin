import React, {useState} from 'react';
import {Container} from "reactstrap"
import PropTypes from "prop-types";
import {connect} from "react-redux";

const Dashboard = () =>{
  return(
      <Container>
          <h1>Dashboard</h1>
      </Container>
  )
};

Dashboard.propTypes = {

};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    null
)(Dashboard);