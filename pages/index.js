import { useEffect, useState } from 'react';
import Welcome from '../components/Welcome';
import { useAuth } from '../utils/context/authContext';
import { checkUser } from '../utils/auth';
import RegisterForm from '../components/RegisterForm';

export default function Home() {
  const [member, setMember] = useState({});

  const { user } = useAuth();
  useEffect(() => {
    checkUser(user.uid)
      .then((result) => setMember(result));
  }, [user.uid]);

  console.log('user:', user, 'member:', member);
  // console.log('FBuser:', user.fbUser);

  return member.uid === user.uid ? <Welcome /> : <RegisterForm />;
}
