import { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { getAllYears } from '../api/yearData';
import NewGiftForm from './forms/NewGiftModal';

export default function Welcome() {
  const { user } = useAuth();
  const [years, setYears] = useState();

  const getYears = () => {
    getAllYears()?.then(setYears);
  };

  useEffect(() => {
    getYears();
  }, []);

  // console.log('user:', user);
  console.log('years:', years);

  return (
    <>
      <div
        className="text-center d-flex flex-column justify-content-center align-content-center"
        style={{
          height: '90vh',
          padding: '30px',
          maxWidth: '400px',
          margin: '0 auto',
        }}
      >
        <Image className="" src="/logo.png" />
        <h1 style={{ color: 'green' }}>Welcome, {user.firstName}!</h1>
      </div>

      <div><NewGiftForm /></div>
    </>
  );
}
