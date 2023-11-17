import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FloatingLabel } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { getAllGifts } from '../../api/giftData';
import { addGift } from '../../api/listData';
import { useAuth } from '../../utils/context/authContext';

const giftId = 0;

export default function NewGiftForm({ listId }) {
  const [show, setShow] = useState(false);
  const [giftID, setGiftID] = useState(giftId);
  const [gifts, setGifts] = useState();
  const { user } = useAuth();

  const handleClose = () => {
    window.location.reload();
  };

  const handleShow = () => setShow(true);

  useEffect(() => {
    getAllGifts().then((data) => setGifts(data));
  }, []);

  const filteredGifts = gifts?.filter(((l) => l?.userId === user?.id));
  console.log('filtered:', filteredGifts);

  console.log('all gifts and listId:', listId, gifts);

  const handleChange = (e) => {
    const { value } = e.target;
    setGiftID(value);
  };

  console.log('check giftID:', giftID);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('on submit:', listId, giftID);
    addGift(listId, giftID).then(handleClose);
  };

  return (
    <>
      <Button
        variant="light"
        className="border border-danger"
        onClick={handleShow}
        style={{ minWidth: '125px', color: 'green' }}
      >
        New Gift
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="bg-green" closeButton>
          <Modal.Title style={{ color: 'green' }}>Add Item to Order</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-light">
          <Form onSubmit={handleSubmit}>

            {/* Add Item  */}
            <FloatingLabel controlId="floatingInput1" label="Gift" className="mb-3" style={{ color: 'red' }}>
              <Form.Select
                type="text"
                placeholder="Your Current Gifts"
                name="giftId"
                value={giftID}
                onChange={handleChange}
                required
              >
                <option key="placeholder" value=""> Choose a Gift</option>
                {filteredGifts?.map((gift) => (
                  <option style={{ color: 'red' }} key={gift?.id} value={gift?.id}>{gift?.giftName}.....${gift?.price}</option>
                ))}
              </Form.Select>
            </FloatingLabel>

            <Button className="btn btn-dark" type="submit">Add Gift</Button>
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
