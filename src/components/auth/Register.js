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
import {register} from '../../actions/authActions';
import {clearErrors} from '../../actions/errorActions';

const INITIAL_USER = {
  name: "",
  email: "",
  password: ""
};

const Register = (props) => {
  const [user, setUser] = useState(INITIAL_USER);

  function handleChange(event) {
    const {name, value} = event.target;
    setUser(prevState => ({...prevState, [name]: value}));
  }

  const onSubmit = e => {
    e.preventDefault();
    const { register } = props;
    register(user);
  };

  return (
      <div className="login-form">
        <Form onSubmit={onSubmit}>
          <FormGroup>

            <Label for='name'>Name</Label>
            <Input
                type='name'
                name='name'
                id='name'
                placeholder='Name'
                className='mb-3'
                onChange={handleChange}
            />

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
              Register
            </Button>
          </FormGroup>
        </Form>
      </div>
  );
};

Register.propTypes = {
  isAuthenticated: PropTypes.bool,
  error: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

export default connect(
    mapStateToProps,
    { register, clearErrors }
)(Register);
