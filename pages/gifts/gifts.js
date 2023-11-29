import { useEffect, useState } from 'react';
import { Button, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import NewGiftForm from '../../components/forms/NewGiftModal';
import { deleteSingleGift, getUserGifts } from '../../api/giftData';
import { useAuth } from '../../utils/context/authContext';

export default function Gifts() {
  const [gifts, setGifts] = useState();
  const { user } = useAuth();

  const getGifts = () => {
    getUserGifts(user?.id)?.then(setGifts);
  };

  useEffect(() => {
    getGifts()?.then(setGifts);
  }, []);

  console.log('Gifts:', gifts);

  return (
    <>
      <div>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h1 className="pgHeaders">My Gifts</h1>
          </div>
          <div>
            <NewGiftForm />
          </div>
        </div>
      </div>

      <div className="mt-5">
        {/* <h4>Gifts on the List</h4> */}
        <table className="table table-borderless">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th className="text-left" scope="col">Gift Name</th>
              <th className="text-center" scope="col">Price</th>
              <th className="text-center" scope="col">Ordered From</th>
              <th className="text-center" scope="col">Delete Gift</th>
            </tr>
          </thead>
          <tbody>
            {gifts ? (gifts?.map((gift) => (
              <tr key={gift.id}>
                <td>
                  <Image src={gift.imageUrl} alt={gift.giftName} style={{ maxWidth: '80px', maxHeight: '80px' }} />
                </td>
                <td className="text-left">{gift.giftName}</td>
                <td className="text-center">${gift.price}</td>
                <td className="text-center">{gift.orderedFrom}</td>
                <td className="text-center">
                  <Button aria-label="Remove Gift" className="bg-transparent btn-sm mx-2 border-0" onClick={() => deleteSingleGift(gift.id).then(window.location.reload())}>
                    <FontAwesomeIcon style={{ color: 'red' }} className="pe-2" icon={faTrashAlt} />
                  </Button>
                </td>
              </tr>
            ))) : <div />}
          </tbody>
        </table>
      </div>

      <div className="mt-5 d-flex justify-content-between align-items-center">
        <h4 className="pgFooters d-flex" style={{ color: 'red' }}>Number of Gifts: <h4 className="pgFooters ms-2" style={{ color: 'green' }}>{gifts?.length}</h4></h4>
      </div>
    </>
  );
}
