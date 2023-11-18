import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { createUser, updateUser } from '../api/userData';

const initialState = {
  firstName: '',
  LastName: '',
};

function RegisterForm({ userObj }) {
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();
  const { user } = useAuth();

  console.log('uid:', user.uid);

  useEffect(() => {
    if (userObj.id) setFormInput(userObj);
  }, [userObj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.warn(formInput);
    if (userObj.id) {
      updateUser(formInput)
        .then(() => router.push('/'));
    } else {
      const payload = { ...formInput, userId: user.id, imageUrl: user.photoUrl };
      console.log('user payload:', payload);
      createUser(payload)
        .then(() => {
          router.push('/');
        });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="mem-form-text">
        <h2 className="mt-5">{userObj.id ? 'Update' : 'Register'} User</h2>
      </div>

      {/* firstName INPUT  */}
      <FloatingLabel controlId="floatingInput1" label="first Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Giftee First Name"
          name="firstName"
          value={formInput.firstName}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* lastName INPUT  */}
      <FloatingLabel controlId="floatingInput1" label="last Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Giftee Last Name"
          name="lastName"
          value={formInput.lastName}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <Button type="submit" className="btn-danger">{userObj.id ? 'Update' : 'Register'} User</Button>
    </Form>
  );
}

RegisterForm.propTypes = {
  userObj: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    id: PropTypes.number,
  }),
};

RegisterForm.defaultProps = {
  userObj: initialState,
};

export default RegisterForm;
