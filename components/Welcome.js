import { useEffect, useState } from 'react';
import { Button, Image } from 'react-bootstrap';
import Link from 'next/link';
import { useAuth } from '../utils/context/authContext';
import { getAllYears } from '../api/yearData';
import NewGiftForm from './forms/NewGiftModal';
import { getUserByUid } from '../api/userData';
import NewYearForm from './forms/CreateYearModal';

export default function Welcome() {
  const { user } = useAuth();
  const [years, setYears] = useState();
  const [regUser, setRegUser] = useState({});

  const getYears = () => {
    getAllYears()?.then(setYears);
  };

  useEffect(() => {
    getYears();
  }, []);

  const getRegisteredUser = () => {
    getUserByUid(user?.uid)?.then(setRegUser);
  };

  useEffect(() => {
    getRegisteredUser();
  }, [user?.uid]);

  console.log('user:', user);
  console.log('years:', years);
  console.log('regUser:', regUser);

  return (
    <>
      <div
        className="text-center d-flex flex-column justify-content-center align-content-center"
        style={{
          height: '50vh',
          padding: '30px',
          maxWidth: '400px',
          margin: '0 auto',
        }}
      >
        <Image className="mb-3" src="/logo.png" />
        <h1 style={{ color: 'green' }}>Welcome, {regUser.firstName}!</h1>
      </div>

      <div className="text-center mt-3">
        <NewGiftForm />
        <NewYearForm />
        <Link passHref href="/lists/new">
          <Button className="btn btn-light me-2 border border-danger-subtle" style={{ color: 'green' }}>New List</Button>
        </Link>
        <Link passHref href="/giftees/new">
          <Button className="btn btn-light border border-danger-subtle" style={{ color: 'green' }}>New Giftee</Button>
        </Link>
      </div>
    </>
  );
}
