// import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
// import { useFormik } from 'formik';
import { Button, Form } from 'react-bootstrap';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../hooks/index.jsx';
import routes from '../routes.js';

const LoginPage = () => {
// BEGIN (write your solution here)
  const handleSubmit = () => {
    localStorage.setItem('key', '123');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="username" />
      </Form.Group>
      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="password" />
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
