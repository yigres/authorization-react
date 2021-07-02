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
      username: '',
      password: '',
    },
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      // const host = 'http://localhost';
      const sessionUrl = routes.loginPath();
      // console.log(sessionUrl);
      // console.log(values.login, values.password);
      const auth = {
        username: values.username,
        password: values.password,
      };

      axios.post(sessionUrl, auth)
        .then((response) => {
          console.log('Authenticated');
          const { token } = response.data;
          localStorage.setItem('token', token);
          console.log(token);

          const errorMsg = document.querySelector('.invalid-feedback');
          errorMsg.classList.remove('d-block');
        }).catch(() => {
          console.log('Error on Authentication');

          const errorMsg = document.querySelector('.invalid-feedback');
          errorMsg.classList.add('d-block');
        });
    },
  });

  useEffect(() => {
    textInput.current.focus();
  }, []);

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="username" ref={textInput} onChange={formik.handleChange} value={formik.values.username} />
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
