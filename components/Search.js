import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import handleSearch from '../api/searchData';
import { useMyContextTest } from '../utils/context/useContext';

const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

export default function Search({ searchInput, setSearchInput }) {
  const { contextVariable, setContextVariable } = useMyContextTest();

  const [debouncedSearch] = useState(() => debounce(handleSearch, 1000));

  const handleChange = (e) => {
    const inputValue = e.target.value.toLowerCase();
    setSearchInput(inputValue);
    console.log('this is the input value:', inputValue); // Use inputValue instead of searchInput
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await debouncedSearch(searchInput);
        console.log('Search results:', data);
        setContextVariable(data);
      } catch (error) {
        console.error('Error fetching search results', error);
      }
    };

    fetchData();
  }, [searchInput, debouncedSearch, setContextVariable]);

  useEffect(() => {
    console.log('Context Variable Updated:', contextVariable);
  }, [contextVariable]);

  return (
    <Form className="search d-flex">
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        value={searchInput}
        onChange={handleChange}
      />
      <Button className="lstBtn" variant="">
        Search
      </Button>
    </Form>
  );
}

Search.propTypes = {
  searchInput: PropTypes.string,
  setSearchInput: PropTypes.func,
};

Search.defaultProps = {
  searchInput: '',
  setSearchInput: () => {},
};
