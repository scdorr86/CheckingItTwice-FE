import React from 'react';
import { Image } from 'react-bootstrap';
import GifteeForm from '../../components/forms/GifteeForm';

export default function NewGiftee() {
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
        <GifteeForm />
      </div>
    </>
  );
}
