import React, {useState} from 'react';
import {Container} from "reactstrap"
import PropTypes from "prop-types";
import {connect} from "react-redux";
import SearchComponent from "./SearchComponent";
import { getCountriesByName } from '../actions/countryActions';



const Dashboard = (props) =>{
    const handleSearchInputChange = (event) => {
        const query = event.target.value;
        const { getCountriesByName } = props;
        if(query){
            getCountriesByName(query);
        }
    };
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
    {getCountriesByName}
)(Dashboard);