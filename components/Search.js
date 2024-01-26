import React, { useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useDebounce } from '@uidotdev/usehooks';
import handleSearch from '../api/searchData';
import { useMyContextTest } from '../utils/context/useContext';

// const debounce = (func, delay) => {
//   let timeoutId;
//   return (...args) => {
//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(() => {
//       const result = func(...args);
//       console.log('debounced result:', result);
//     }, delay);
//   };
// };

// function debounce(func, timeout = 1000) {
//   let timer;
//   return (...args) => {
//     clearTimeout(timer);
//     timer = setTimeout(() => { func.apply(this, args); }, timeout);
//   };
// }

// export default function Search({ searchInput, setSearchInput }) {
//   const { contextVariable, setContextVariable } = useMyContextTest();

//   const [debouncedSearch] = useState(() => debounce(handleSearch, 1000));

//   const handleChange = (e) => {
//     const inputValue = e.target.value.toLowerCase();
//     setSearchInput(inputValue);
//     console.log('this is the input value:', inputValue);
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = debounce(handleSearch(searchInput), 1000);
//         console.log('data var for seth:', data);
//         setContextVariable({ ...contextVariable, ...{ test: true } });
//         console.log('testing context var after setting:', contextVariable);
//       } catch (error) {
//         console.error('Error fetching search results', error);
//       }
//     };

//     fetchData();
//   }, [searchInput, debouncedSearch, setContextVariable]);

//   useEffect(() => {
//     console.log('Context Variable Updated:', contextVariable);
//   }, [contextVariable]);

//   return (
//     <Form className="search d-flex">
//       <Form.Control
//         type="search"
//         placeholder="Search"
//         className="me-2"
//         aria-label="Search"
//         value={searchInput}
//         onChange={handleChange}
//       />
//       <Button className="lstBtn" variant="">
//         Search
//       </Button>
//     </Form>
//   );
// }

// Search.propTypes = {
//   searchInput: PropTypes.string,
//   setSearchInput: PropTypes.func,
// };

// Search.defaultProps = {
//   searchInput: '',
//   setSearchInput: () => {},
// };

export default function Search({ searchInput, setSearchInput }) {
  const { contextVariable, setContextVariable } = useMyContextTest();
  const debouncedSearchTerm = useDebounce(searchInput, 1000);

  const handleChange = (e) => {
    const inputValue = e.target.value.toLowerCase();
    setSearchInput(inputValue);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await handleSearch(debouncedSearchTerm);
        setContextVariable(data);
        console.log('this is the data:', data);
      } catch (error) {
        console.error('Error fetching search results', error);
      }
    };

    fetchData();
  }, [debouncedSearchTerm]);

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
