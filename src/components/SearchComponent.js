import React, {useState} from 'react';
import PropTypes from "prop-types";
import {Form, Input, Button, Row, Col} from "reactstrap";

const SearchComponent = ({buttonClickCallback}) => {
    const [query, setQuery] = useState('');

    const handleSearchInputChange = (event) => {
        setQuery(event.target.value)
    };

    const handleButtonClick = ()=>{
        if(query){
            buttonClickCallback(query)
        }
    }

    return (
        <Form>
            <Row>
                <Col xs="10">
                    <Input
                        type='text'
                        name='search'
                        id='search'
                        placeholder='Search for countries'
                        className='mb-3'
                        onChange={handleSearchInputChange}
                    />
                </Col>
                <Col xs="2">
                    <Button color='dark' block onClick={handleButtonClick}>
                        Search
                    </Button>
                </Col>
            </Row>
        </Form>
    );
};

SearchComponent.propTypes = {
    buttonClickCallback: PropTypes.func,
};

export default SearchComponent;