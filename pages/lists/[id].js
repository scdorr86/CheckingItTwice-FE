import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
// import Table from 'react-bootstrap/Table';
// import { Image } from 'react-bootstrap';
import { getSingleList } from '../../api/listData';

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
    <div>
      <h1>{list.listName}s List</h1>
    </div>
  );
}
