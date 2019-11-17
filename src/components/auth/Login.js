import React, {useState} from 'react';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {login} from '../../actions/authActions';
import {clearErrors} from '../../actions/errorActions';

const INITIAL_USER = {
    email: "",
    password: ""
};

const Login = (props) => {
    const [user, setUser] = useState(INITIAL_USER);

    function handleChange(event) {
        const {name, value} = event.target;
        setUser(prevState => ({...prevState, [name]: value}));
    }

    const onSubmit = e => {
        e.preventDefault();
        const { login } = props;
        login(user);
        window.location.href = "/dashboard"
    };

    return (
        <div className="login-form">
            <Form onSubmit={onSubmit}>
                <FormGroup>
                    <Label for='email'>Email</Label>
                    <Input
                        type='email'
                        name='email'
                        id='email'
                        placeholder='Email'
                        className='mb-3'
                        onChange={handleChange}
                    />

                    <Label for='password'>Password</Label>
                    <Input
                        type='password'
                        name='password'
                        id='password'
                        placeholder='Password'
                        className='mb-3'
                        onChange={handleChange}
                    />
                    <Button color='dark' style={{marginTop: '2rem'}} block>
                        Login
                    </Button>
                </FormGroup>
            </Form>
        </div>
    );
};

Login.propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

export default connect(
    mapStateToProps,
    { login, clearErrors }
)(Login);
