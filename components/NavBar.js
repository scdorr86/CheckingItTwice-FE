/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar,
  Container,
  Nav,
  Button,
  Image,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';

export default function NavBar() {
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
