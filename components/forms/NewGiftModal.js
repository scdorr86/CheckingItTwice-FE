import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FloatingLabel } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { createGift } from '../../api/giftData';
import { addGift } from '../../api/listData';
import { useAuth } from '../../utils/context/authContext';

const initialState = {
  giftName: '',
  price: 0,
  imageUrl: '',
  orderedFrom: '',
};
export default function NewGiftForm({ listId }) {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const { user } = useAuth();
  const router = useRouter();

  const handleClose = () => {
    window.location.reload();
  };

  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const convertValue = (name === 'price') ? Number(value) : value;
    setFormData((prevState) => ({
      ...prevState,
      [name]: convertValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (listId) {
      const payload = { ...formData, userId: user.id };

      // console.log('this is the submit gift payload', payload);

      createGift(payload)
        .then((data) => addGift(listId, data.id)).then(handleClose);
    } else {
      const payload = { ...formData, userId: user.id };

      // console.log('this is the submit gift payload', payload);

      createGift(payload)
        .then((data) => console.log('create gift data:', data))
        .then(() => router.push('/lists'));
    }
  };

  return (
    <>
      <Button
        variant="light"
        className="border border-danger"
        onClick={handleShow}
        style={{ minWidth: '125px', color: 'green' }}
      >
        {listId ? 'New ' : 'Create '}Gift
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="bg-green" closeButton>
          <Modal.Title style={{ color: 'green' }}>Add Item to Order</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-light">
          <Form onSubmit={handleSubmit}>

            {/* Gift Name  */}
            <FloatingLabel controlId="floatingInput1" label="Gift Name" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter Gift Name"
                name="giftName"
                value={formData.giftName}
                onChange={handleChange}
                style={{ color: 'red' }}
                required
              />
            </FloatingLabel>

            {/* IMAGE INPUT  */}
            <FloatingLabel controlId="floatingInput2" label="Gift Image" className="mb-3">
              <Form.Control
                type="url"
                style={{ color: 'red' }}
                placeholder="Enter an gift image url"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                required
              />
            </FloatingLabel>

            {/* Ordered From  */}
            <FloatingLabel controlId="floatingInput1" label="ordered from" className="mb-3">
              <Form.Control
                type="text"
                style={{ color: 'red' }}
                placeholder="Ordered From"
                name="orderedFrom"
                value={formData.orderedFrom}
                onChange={handleChange}
                required
              />
            </FloatingLabel>

            {/* Price  */}
            <FloatingLabel controlId="floatingInput1" label="Price" className="mb-3">
              <Form.Control
                type="number"
                style={{ color: 'red' }}
                placeholder="Gift Price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </FloatingLabel>

            <Button className="btn btn-success" type="submit">{listId ? 'Add New ' : 'Create '}Gift</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer />
      </Modal>
    </>
  );
}

NewGiftForm.propTypes = {
  listId: PropTypes.number,
}.isRequired;
