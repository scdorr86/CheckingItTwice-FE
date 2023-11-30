import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getSingleGiftee } from '../../../api/gifteeData';
import GifteeForm from '../../../components/forms/GifteeForm';

export default function EditGiftee() {
  const [editGiftee, setEditGiftee] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSingleGiftee(id)?.then(setEditGiftee);
  }, [id]);

  console.log('id and obj:', id, editGiftee);

  return (<GifteeForm gifteeObj={editGiftee} />);
}
