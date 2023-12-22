import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createGiftee, updateGiftee } from '../../api/gifteeData';

const initialState = {
  firstName: '',
  LastName: '',
};

function GifteeForm({ gifteeObj }) {
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (gifteeObj.id) setFormInput(gifteeObj);
  }, [gifteeObj, user]);

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
    if (gifteeObj.id) {
      updateGiftee(gifteeObj.id, formInput)
        .then(() => router.push('/giftees/giftees'));
    } else {
      const payload = { ...formInput, userId: user.id };
      // console.log('list payload:', payload);
      createGiftee(payload)
        .then(() => {
          router.push('/giftees/giftees');
        });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="mem-form-text">
        <h2 className="forms mt-5">{gifteeObj.id ? 'Update' : 'Create New'} Giftee</h2>
      </div>

      {/* firstName INPUT  */}
      <FloatingLabel controlId="floatingInput1" label="first Name" className="formInput mb-3">
        <Form.Control
          type="text"
          placeholder="Giftee First Name"
          name="firstName"
          style={{ color: 'green' }}
          value={formInput.firstName}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* lastName INPUT  */}
      <FloatingLabel controlId="floatingInput1" label="last Name" className="formInput mb-3">
        <Form.Control
          type="text"
          placeholder="Giftee Last Name"
          name="lastName"
          style={{ color: 'red' }}
          value={formInput.lastName}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <Button type="submit" className="giftBtn btn-danger">{gifteeObj.id ? 'Update' : 'Create New'} Giftee</Button>
    </Form>
  );
}

GifteeForm.propTypes = {
  gifteeObj: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    id: PropTypes.number,
  }),
};

GifteeForm.defaultProps = {
  gifteeObj: initialState,
};

export default GifteeForm;
