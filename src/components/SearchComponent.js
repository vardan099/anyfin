import React from 'react';
import PropTypes from "prop-types";
import {Form,FormGroup, Input} from "reactstrap";

const SearchComponent = ({inputChangeCallback}) => {
    return (
        <Form>
            <FormGroup>
                <Input
                    type='text'
                    name='search'
                    id='search'
                    placeholder='Search for countries'
                    className='mb-3'
                    onChange={inputChangeCallback}
                />
            </FormGroup>
        </Form>
    );
};

SearchComponent.propTypes = {
    inputChangeCallback: PropTypes.func,
};

export default SearchComponent;