import React from 'react';
import Link from 'next/link';
import {
  Navbar,
  Container,
  Nav,
  // Image,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

export default function NavFooter() {
  return (
    <Navbar fixed="bottom" collapseOnSelect expand="lg" className="Nav" variant="">
      <Container>
        {/* <Link passHref href="/">
          <Navbar.Brand><Image className="logo" src="/logo.png" /></Navbar.Brand>
        </Link> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="d-flex me-auto">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            {/* <h5 className="footer mb-1 me-sm-0">Navigation</h5> */}
            <Nav.Link className="footer mb-1 me-sm-0 align-content-center justify-content-center">Navigation:</Nav.Link>
            <Link passHref href="/years/years">
              <Nav.Link className="footer mb-0">My Years</Nav.Link>
            </Link>
            <Link passHref href="/gifts/gifts">
              <Nav.Link className="footer mb-0">My Gifts</Nav.Link>
            </Link>
            <Link passHref href="/giftees/giftees">
              <Nav.Link className="footer mb-0">My Giftees</Nav.Link>
            </Link>
            <Link passHref href="/lists/lists">
              <Nav.Link className="footer mb-0">My Lists</Nav.Link>
            </Link>
          </Nav>
          <div className="d-flex ms-auto copyright">
            <FontAwesomeIcon className="mt-2 pe-1" icon={faCopyright} /><p>2023</p>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
