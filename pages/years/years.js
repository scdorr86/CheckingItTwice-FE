import { useEffect, useState } from 'react';
import { Button, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import NewGiftForm from '../../components/forms/NewGiftModal';
import { deleteSingleGift } from '../../api/giftData';
import { useAuth } from '../../utils/context/authContext';
import { getYearsByUid } from '../../api/yearData';
import { getUserByUid } from '../../api/userData';

export default function Gifts() {
  const [years, setYears] = useState();
  const [regUser, setRegUser] = useState();
  const { user } = useAuth();

  useEffect(() => {
    getUserByUid(user?.uid).then(setRegUser);
  }, [user.uid]);

  useEffect(() => {
    getYearsByUid(user?.uid)?.then(setYears);
  }, []);

  console.log('regUser:', regUser, regUser?.id);
  console.log('Years:', years);

  // const filteredYears = years.filter((y) => y.userId === regUser.id);
  // console.log(filteredYears);

  return (
    <>
      <div>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h1>My Years</h1>
          </div>
          <div>
            <NewGiftForm />
          </div>
        </div>
      </div>

      <div className="mt-5">

        <table className="table table-borderless">
          <thead>
            <tr>
              <th colSpan="2" className="text-center">Christmas Year</th>
              <th scope="col">Budget</th>
              <th scope="col"># Lists in Year</th>
              <th scope="col">Total Spent</th>
            </tr>
          </thead>
          <tbody>
            {years ? (years?.map((y) => (
              <tr key={y.id}>

                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtoFHgLrBMH0_ruJZ87Pk9KH73Germ7IJuGw&usqp=CAU"
                  style={{ maxWidth: '60px' }}
                  className="rounded-circle"
                />

                <td>{y.listYear}</td>
                <td>${y.yearBudget}</td>
                <td>{y.christmasLists.length}</td>
                <td>
                  <Button
                    aria-label="Remove Gift"
                    className="bg-transparent btn-sm mx-2 border-0"
                    onClick={() => deleteSingleGift(y.id).then(window.location.reload())}
                  >
                    <FontAwesomeIcon style={{ color: 'red' }} className="pe-2" icon={faTrashAlt} />
                  </Button>
                </td>
              </tr>
            ))) : <div />}
          </tbody>
        </table>
      </div>

      <div className="mt-5 d-flex justify-content-between align-items-center">
        <h4>Number of Christmases: {years?.length}</h4>
      </div>
    </>
  );
}
