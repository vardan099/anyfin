import React, {useState, useEffect} from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input, Alert
} from 'reactstrap';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {register} from '../../actions/authActions';
import {clearErrors} from '../../actions/errorActions';
import {useHistory} from "react-router";

const INITIAL_USER = {
  name: "",
  email: "",
  password: ""
};

const Register = (props) => {
  const [user, setUser] = useState(INITIAL_USER);
  const [msg, setMsg] = useState(null);
  const { error , isAuthenticated} = props;
  const history = useHistory();

  useEffect(() => {
    if(error){
      if (error.id === 'REGISTER_FAIL') {
        setMsg(error.msg.msg);
      } else {
        setMsg(null);
      }
    }
    if(isAuthenticated){
      history.push("/")
    }
  },[error, isAuthenticated, history]);

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
        {msg ? (
            <Alert color='danger'>{msg}</Alert>
        ) : null}
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
