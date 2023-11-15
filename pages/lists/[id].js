import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
// import Table from 'react-bootstrap/Table';
import { Button, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { getSingleList, removeGift } from '../../api/listData';
import AddGiftForm from '../../components/forms/AddGiftModal';

export default function ListDetails() {
  const [list, setList] = useState({});
  const router = useRouter();
  const { id } = router.query;

  const getList = () => {
    getSingleList(id)?.then(setList);
  };

  useEffect(() => {
    getList();
  }, [id]);

  console.log('route:', id);
  console.log('singleList:', list);

  return (
    <>
      <div>
        <h1>{list.listName}s List</h1>
        <h3>For: {list?.giftee?.firstName}</h3>
      </div>

      <div>
        <h4>Gifts on the List</h4>
        <table className="table table-borderless">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Gift Name</th>
              <th scope="col">Price</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            {list.gifts?.map((gift) => (
              <tr key={gift.id}>
                <td>
                  <Image src={gift.imageUrl} alt={gift.giftName} style={{ maxWidth: '50px' }} />
                </td>
                <td>{gift.giftName}</td>
                <td>${gift.price}</td>
                <td>
                  <Button aria-label="Remove Gift" className="bg-transparent btn-sm mx-2 border-0" onClick={() => removeGift(id, gift.id).then(getList())}>
                    <FontAwesomeIcon style={{ color: 'red' }} className="pe-2" icon={faTrashAlt} />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <AddGiftForm listId={id} />
      </div>
    </>
  );
}
