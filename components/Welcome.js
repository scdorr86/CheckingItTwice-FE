import { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
import { getAllYears } from '../api/yearData';

export default function Welcome() {
  const { user } = useAuth();
  const [years, setYears] = useState();

  const getYears = () => {
    getAllYears()?.then(setYears);
  };

  useEffect(() => {
    getYears();
  }, []);

  console.log('user:', user);
  console.log('years:', years);

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Hello {user.firstName}! </h1>
    </div>
  );
}
