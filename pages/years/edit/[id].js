import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getSingleYear } from '../../../api/yearData';
import NewYearForm from '../../../components/forms/CreateYearModal';

export default function EditYear() {
  const [editYear, setEditYear] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSingleYear(id)?.then(setEditYear);
  }, [id]);

  console.log('id and obj:', id, editYear);

  return (<NewYearForm year={editYear} />);
}
