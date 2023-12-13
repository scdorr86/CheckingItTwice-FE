import { useEffect, useState } from 'react';
import { Button, Image } from 'react-bootstrap';
import Link from 'next/link';
import { useAuth } from '../../utils/context/authContext';
import { getAllLists } from '../../api/listData';
import ListCard from '../../components/cards/ListCard';
import SideBar from '../../components/Sidebar';

function ListsPage() {
  const [lists, setLists] = useState();
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
      <div>
        <SideBar />
      </div>
      <div className="d-flex flex-column align-items-center">
        <div className="d-flex align-items-center">
          <Image
            className="me-3"
            src="/logo.png"
            style={{
              height: '55px',
              margin: '0',
            }}
          />
          <h1 className="pgHeaders m-4" style={{ color: 'green' }}>My Lists</h1>
        </div>

        {filteredLists?.length === 0 ? (
          <>
            <h5 className="mt-3 mb-5" style={{ color: 'green' }}>Its Christmas! Start a New List and Check it Twice</h5>
            <div className="d-flex">
              <Link passHref href="/lists/new">
                <Button className="btn btn-light me-2" style={{ color: 'red' }}>New List</Button>
              </Link>
              <Link passHref href="/giftees/new">
                <Button className="btn btn-light" style={{ color: 'red' }}>New Giftee</Button>
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="d-flex">
              <Link passHref href="/lists/new">
                <Button className="lstBtn btn btn-light me-2 border border-danger-subtle" style={{ color: 'red' }}>New List</Button>
              </Link>
              <Link passHref href="/giftees/new">
                <Button className="giftBtn btn btn-light border border-danger-subtle" style={{ color: 'red' }}>New Giftee</Button>
              </Link>
            </div>
            <div className="d-flex flex-wrap">
              {filteredLists?.map((list) => (
                <ListCard key={list.id} listObj={list} />
              ))}
            </div>
            {/* <div className="d-flex">
              <Link passHref href="/lists/new">
                <Button className="lstBtn btn btn-light me-2 border border-danger-subtle" style={{ color: 'red' }}>New List</Button>
              </Link>
              <Link passHref href="/giftees/new">
                <Button className="giftBtn btn btn-light border border-danger-subtle" style={{ color: 'red' }}>New Giftee</Button>
              </Link>
            </div> */}
          </>
        )}
      </div>
    </>
  );
}

export default ListsPage;
