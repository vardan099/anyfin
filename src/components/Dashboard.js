import React, {useState} from 'react';
import {Container} from "reactstrap"
import PropTypes from "prop-types";
import {connect} from "react-redux";
import SearchComponent from "./SearchComponent"

const handleSearchInputChange = (event) => {
    const query = event.target.value;
    console.log(query)
};

const Dashboard = () =>{
  return(
      <Container>
          <SearchComponent inputChangeCallback={handleSearchInputChange}/>
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