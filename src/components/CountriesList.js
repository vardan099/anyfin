import React from 'react';
import {connect} from "react-redux";
import { Table } from 'reactstrap';

const CountriesList = (props) => {
    const {countries} = props;

    return (
        <div>
            {
                countries.length > 0 &&
                <Table>
                    <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Population</th>
                        <th>Currencies</th>
                        <th>Exchange to SEK</th>
                    </tr>
                    </thead>
                    <tbody>
                    {countries.map((country) => (
                        <tr key={country.id}>
                            <td>{country.name}</td>
                            <td>{country.population}</td>
                            <td>{country.currencies.map((currency)=>(
                                <span key={currency.code}>{ currency.code }</span>
                            ))}</td>
                            <td>0</td>
                        </tr>
                    ))}

                    </tbody>
                </Table>
            }
        </div>
    )
};

const mapStateToProps = state => ({
    countries: state.country.countries
});

export default connect(
    mapStateToProps,
    null
)(CountriesList);