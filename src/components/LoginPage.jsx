import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useFormik } from 'formik';
import { Button, Form } from 'react-bootstrap';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../hooks/index.jsx';
import routes from '../routes.js';

const LoginPage = () => {
// BEGIN (write your solution here)
  const textInput = useRef();

  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      // localStorage.setItem('key', '123');
      // const host = 'http://localhost';
      const sessionUrl = routes.loginPath();
      console.log(sessionUrl);
      console.log(values.login, values.password);
      const auth = {
        login: values.login,
        password: values.passord,
      };

      axios.post(sessionUrl, {}, { auth })
        .then(() => {
          console.log('Authenticated');
        }).catch(() => {
          console.log('Error on Authentication');
        });
    },
  });

  useEffect(() => {
    textInput.current.focus();
  }, []);

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group controlId="login">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="username" ref={textInput} onChange={formik.handleChange} value={formik.values.login} />
      </Form.Group>
      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="password" onChange={formik.handleChange} value={formik.values.password} />
        <Form.Text className="invalid-feedback">
          the username or password is incorrect
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
// END
};

export default LoginPage;
