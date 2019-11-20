import React from 'react';
import {connect} from "react-redux";
import { Table } from 'reactstrap';

const CountriesList = (props) => {
    const {countries} = props;
    return (
        <div>
            {
                countries.length > 0 ?
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
                                <>
                                <span key={currency.code}> { currency.code }</span><br/>
                                </>
                            ))}</td>
                            <td>
                                {country.exchange.map((rate) => (
                                    <>
                                    <span key={rate.code}> 1 SEK = {`${rate.exchange} ${rate.code}`} </span><br/>
                                    </>
                                ))}
                            </td>
                        </tr>
                    ))}

                    </tbody>
                </Table>: <p className="text-info text-center">There is no results to show</p>

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