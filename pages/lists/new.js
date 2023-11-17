import React from 'react';
import { Image } from 'react-bootstrap';
import ListForm from '../../components/forms/ListForm';

export default function NewList() {
  return (
    <>
      <Image
        className=""
        src="/logo.png"
        style={{
          height: '50%',
          padding: '10px',
          maxWidth: '50%',
          margin: '0 auto',
        }}
      />
      <div className="meet-form">
        <ListForm />
      </div>
    </>
  );
}
