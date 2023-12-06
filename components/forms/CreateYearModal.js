import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FloatingLabel } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { useAuth } from '../../utils/context/authContext';
import { createYear, updateYear } from '../../api/yearData';

const initialState = {
  listYear: '',
  yearBudget: 0,
};
export default function NewYearForm({ year }) {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const { user } = useAuth();
  const router = useRouter();

  const handleClose = () => {
    window.location.reload();
  };

  useEffect(() => {
    if (year) setFormData(year);
  }, [year]);

  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const convertValue = (name === 'YearBudget') ? Number(value) : value;
    setFormData((prevState) => ({
      ...prevState,
      [name]: convertValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (year) {
      const updatePayload = { ...formData };

      console.log('this is the update year payload', updatePayload);

      updateYear(year.id, updatePayload)
        .then(() => router.push('/years/years'));
    } else {
      const payload = { ...formData, userId: user.id };

      console.log('this is the submit year payload', payload);

      createYear(payload)
        .then((data) => console.log('create gift data:', data))
        .then(() => handleClose());
    }
  };

  return (
    <>
      <Button
        variant="light"
        className="yrBtn border border-danger-subtle me-2"
        onClick={handleShow}
        style={{ minWidth: '125px', color: 'green' }}
      >
        {year ? 'Update ' : 'New '}List Year
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="bg-green" closeButton>
          <Modal.Title className="forms" style={{ color: 'green' }}>Christmas Year Details</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-light">
          <Form onSubmit={handleSubmit}>

            {/* List Year */}
            <FloatingLabel controlId="floatingInput1" label="List Year" className="formInput mb-3">
              <Form.Control
                type="text"
                placeholder="Enter Christmas Year"
                name="listYear"
                value={formData.listYear}
                onChange={handleChange}
                style={{ color: 'red' }}
                required
              />
            </FloatingLabel>

            {/* Year Budget  */}
            <FloatingLabel controlId="floatingInput1" label="YearBudget" className="formInput mb-3 p-1">
              <Form.Control
                type="number"
                style={{ color: 'red' }}
                placeholder="Christmas Year Total Budget"
                name="yearBudget"
                value={formData.yearBudget}
                onChange={handleChange}
                required
              />
            </FloatingLabel>

            <Button className="yrBtn btn btn-success" type="submit">{year ? 'Update ' : 'Create '}List Year</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer />
      </Modal>
    </>
  );
}

NewYearForm.propTypes = {
  year: PropTypes.shape({
    id: PropTypes.number,
    ListYear: PropTypes.string,
    YearBudget: PropTypes.number,
  }),
}.isRequired;
