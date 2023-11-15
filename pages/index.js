import { useEffect, useState } from 'react';
import Welcome from '../components/Welcome';
import { useAuth } from '../utils/context/authContext';
import { checkUser } from '../utils/auth';

export default function Home() {
  const [member, setMember] = useState(null);

  const { user } = useAuth();
  useEffect(() => {
    checkUser(user.uid)
      .then((result) => setMember(result))
      .catch(() => setMember(null));
  }, [user.uid]);

  return member ? <Welcome /> : null;
}
