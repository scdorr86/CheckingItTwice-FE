import { useEffect, useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { getUserGiftees } from '../../api/gifteeData';

export default function Gifts() {
  const [giftees, setGiftees] = useState();
  const { user } = useAuth();

  const getGiftees = () => {
    getUserGiftees(user?.id)?.then(setGiftees);
  };

  useEffect(() => {
    getGiftees();
  }, []);

  const calculateGifteeTotal = (giftee) => {
    if (giftee.christmasLists) {
      return giftee.christmasLists.reduce((total, christmasList) => total + (christmasList.listTotal || 0), 0);
    }
    return 0;
  };

  console.log('Giftees:', giftees);

  return (
    <>
      <div>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h1 style={{ color: 'green' }}>My Giftees</h1>
          </div>
          <div>
            <Link passHref href="/giftees/new">
              <Button className="btn-light border border-danger" style={{ color: 'red' }}>New Giftee</Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-5">
        {/* <h4>Gifts on the List</h4> */}
        <table className="table table-borderless">
          <thead>
            <tr>
              <th scope="col" style={{ color: 'green' }}>Giftee</th>
              <th scope="col" style={{ color: 'green' }}>Total Lists</th>
              <th scope="col" style={{ color: 'green' }}>Total $ of All Lists</th>
            </tr>
          </thead>
          <tbody>
            {giftees ? (giftees?.map((giftee) => (
              <tr key={giftee.id}>
                <td>{giftee.firstName}</td>
                <td>{giftee.christmasLists.length}</td>
                <td>${calculateGifteeTotal(giftee)}</td>
                {/* <td>
                  <Button aria-label="Remove Gift" className="bg-transparent btn-sm mx-2 border-0" onClick={() => deleteSingleGift(gift.id).then(window.location.reload())}>
                    <FontAwesomeIcon style={{ color: 'red' }} className="pe-2" icon={faTrashAlt} />
                  </Button>
                </td> */}
              </tr>
            ))) : <div />}
          </tbody>
        </table>
      </div>

      <div className="mt-5 d-flex align-items-center">
        <h4 style={{ color: 'green', marginRight: '10px' }}>Number of Giftees:</h4>
        <h4 style={{ color: 'red' }}>{giftees?.length}</h4>
      </div>
    </>
  );
}
