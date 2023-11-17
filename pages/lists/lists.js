import { useEffect, useState } from 'react';
// import { Button } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { useAuth } from '../../utils/context/authContext';
import { getAllLists } from '../../api/listData';
import ListCard from '../../components/cards/ListCard';

function ListsPage() {
  const [lists, setLists] = useState();
  // const [filteredOrders, setFilteredOrders] = useState([]);
  const { user } = useAuth();

  const getLists = () => {
    getAllLists()?.then(setLists);
  };

  useEffect(() => {
    getLists();
  }, []);

  const filteredLists = lists?.filter((l) => l.userId === user.id);

  console.log('these are Lists and single user:', lists, user);
  console.log('filtered lists:', filteredLists);

  return (
    <>
      <div
        className="text-center d-flex flex-column justify-content-center align-content-center"
        style={{
          height: '22vh',
          padding: '7px',
          maxWidth: '100px',
          margin: '0 auto',
        }}
      >
        <h1>My Lists</h1>

      </div>

      <div className="d-flex justify-content-between">
        {filteredLists?.length === 0 ? (
          lists?.map((list) => (
            <ListCard key={list.id} listObj={list} />
          ))
        ) : (
          filteredLists?.map((list) => (
            <ListCard key={list.id} listObj={list} />
          ))
        )}
      </div>
      <Link passHref href="/lists/new">
        <Button>New List</Button>
      </Link>
      <Link passHref href="/giftees/new">
        <Button>New Giftee</Button>
      </Link>
    </>
  );
}

export default ListsPage;
