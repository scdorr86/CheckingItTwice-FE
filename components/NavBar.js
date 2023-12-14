/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar,
  Container,
  Nav,
  Button,
  Image,
  Form,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { signOut } from '../utils/auth';

export default function NavBar({ searchInput, setSearchInput }) {
  const handleChange = (e) => {
    console.log(e.target.value);
    setSearchInput(e.target.value.toLowerCase());
    console.log('this is search input', searchInput);
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="Nav" variant="">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand><Image className="logo" src="/logo.png" /></Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link passHref href="/years/years">
              <Nav.Link className="tryFont m-1">My Years</Nav.Link>
            </Link>
            <Link passHref href="/gifts/gifts">
              <Nav.Link className="tryFont m-1">My Gifts</Nav.Link>
            </Link>
            <Link passHref href="/giftees/giftees">
              <Nav.Link className="tryFont m-1">My Giftees</Nav.Link>
            </Link>
            <Link passHref href="/lists/lists">
              <Nav.Link className="tryFont m-1">My Lists</Nav.Link>
            </Link>
          </Nav>

          <Form className="search d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchInput}
              onChange={handleChange}
            />
            <Button className="lstBtn" variant="">Search</Button>
          </Form>

          <Nav className="ms-auto">
            <Button variant="danger" className="signOut border border-light" onClick={signOut}>
              Sign Out
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

NavBar.propTypes = {
  searchInput: PropTypes.string,
  setSearchInput: PropTypes.func,
};

NavBar.defaultProps = {
  searchInput: '',
  setSearchInput: () => {},
};
