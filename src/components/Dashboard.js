import React from 'react';
import {Container} from "reactstrap"
import PropTypes from "prop-types";
import {connect} from "react-redux";
import SearchComponent from "./SearchComponent";
import CountriesList from "./CountriesList";
import {getCountriesByName} from '../actions/countryActions';


const Dashboard = (props) => {
    const {getCountriesByName} = props;
    return (
        <Container>
            <SearchComponent buttonClickCallback={getCountriesByName}/>
            <CountriesList/>
        </Container>
    )
};

Dashboard.propTypes = {};

const mapStateToProps = state => ({
    auth: state.auth,
});

export default connect(
    mapStateToProps,
    {getCountriesByName}
)(Dashboard);