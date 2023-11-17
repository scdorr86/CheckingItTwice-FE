import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createList, updateList } from '../../api/listData';
import { getAllYears } from '../../api/yearData';
import { getAllGiftees } from '../../api/gifteeData';

const initialState = {
  listName: '',
  christmasYearId: 0,
  gifteeId: 0,
};

function ListForm({ listObj }) {
  const [formInput, setFormInput] = useState(initialState);
  const [years, setYears] = useState();
  const [giftees, setGiftees] = useState();
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (listObj.id) setFormInput(listObj);
  }, [listObj, user]);

  useEffect(() => {
    getAllYears().then((data) => setYears(data));
  }, []);

  useEffect(() => {
    getAllGiftees().then((data) => setGiftees(data));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const convertValue = (name === 'christmasYearId' || name === 'gifteeId') ? Number(value) : value;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: convertValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.warn(formInput);
    if (listObj.id) {
      updateList(formInput)
        .then(() => router.push('/lists/lists'));
    } else {
      const payload = { ...formInput, userId: user.id };
      // console.log('list payload:', payload);
      createList(payload)
        .then(() => {
          router.push('/lists/lists');
        });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="mem-form-text">
        <h2 className="mt-5">{listObj.id ? 'Update' : 'Create New'} List</h2>
      </div>

      {/* listName INPUT  */}
      <FloatingLabel controlId="floatingInput1" label="List Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="New List Title"
          name="listName"
          value={formInput.listName}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* Year Select */}
      <FloatingLabel controlId="floatingInput1" label="Christmas Year" className="mb-3" style={{ color: 'red' }}>
        <Form.Select
          type="text"
          placeholder="Christmas Year"
          name="christmasYearId"
          value={formInput.christmasYearId}
          onChange={handleChange}
          required
        >
          <option key="placeholder" value=""> Choose Your Christmas Year</option>
          {years?.map((y) => (
            <option style={{ color: 'red' }} key={y?.id} value={y?.id}>{y?.listYear}</option>
          ))}
        </Form.Select>
      </FloatingLabel>

      {/* Giftee Select */}
      <FloatingLabel controlId="floatingInput1" label="Giftee" className="mb-3" style={{ color: 'red' }}>
        <Form.Select
          type="text"
          placeholder="Who is this List for?"
          name="gifteeId"
          value={formInput.gifteeId}
          onChange={handleChange}
          required
        >
          <option key="placeholder" value=""> Who is this list for?</option>
          {giftees?.map((g) => (
            <option style={{ color: 'red' }} key={g?.id} value={g?.id}>{g?.firstName}</option>
          ))}
        </Form.Select>
      </FloatingLabel>

      <Button type="submit" className="btn btn-danger">{listObj.id ? 'Update' : 'Create New'} List</Button>
    </Form>
  );
}

ListForm.propTypes = {
  listObj: PropTypes.shape({
    firstName: PropTypes.string,
    christmasYearId: PropTypes.number,
    gifteeId: PropTypes.number,
    id: PropTypes.number,
  }),
};

ListForm.defaultProps = {
  listObj: initialState,
};

export default ListForm;
