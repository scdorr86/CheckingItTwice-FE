import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
// import { Image } from 'react-bootstrap';
// import { Button, Image } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { getYearsByUid } from '../../api/yearData';
import { getUserByUid } from '../../api/userData';
import NewYearForm from '../../components/forms/CreateYearModal';
import SideBar from '../../components/Sidebar';

export default function Years() {
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
        <SideBar />
      </div>
      <div>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h1 className="pgHeaders">My Years</h1>
          </div>
          <div>
            <NewYearForm />
          </div>
        </div>
      </div>

      <div className="mt-5">

        <table className="table table-borderless">
          <thead>
            <tr>
              <th style={{ color: '' }} scope="col">Christmas Year</th>
              <th className="text-center" style={{ color: '' }} scope="col">Budget</th>
              <th className="text-center" style={{ color: '' }} scope="col"># Lists in Year</th>
              <th className="text-center" style={{ color: '' }} scope="col">Total Spent</th>
              <th className="text-center" style={{ color: '' }} scope="col">Budget Remaining</th>
            </tr>
          </thead>
          <tbody>
            {years ? (years?.map((y) => (
              <tr key={y.id}>

                {/* 🎅🏻<Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtoFHgLrBMH0_ruJZ87Pk9KH73Germ7IJuGw&usqp=CAU"
                  style={{ maxWidth: '45px' }}
                  className="rounded-circle p-.5"
                /> */}

                <td> 🎄 {y.listYear}
                </td>
                <td className="text-center tableRowHover">{y.yearBudget.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}

                  <Link passHref href={`/years/edit/${y.id}`}>
                    <FontAwesomeIcon style={{ color: 'red' }} className="ms-3 pe-2" icon={faPencil} aria-label={`Edit year with ID ${y.id}`} />
                  </Link>

                </td>
                <td className="text-center">{y.christmasLists.length}</td>
                <td className="text-center">
                  {y?.listsTotal.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                </td>
                {y?.budgetVar > 0 ? <td className="text-center" style={{ color: 'green', fontWeight: 'bolder' }}>{y?.budgetVar.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td> : <td className="text-center" style={{ color: 'red', fontWeight: 'bolder' }}>{y?.budgetVar.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>}
              </tr>
            ))) : null}
          </tbody>
        </table>
      </div>

      <div className="mt-5 d-flex justify-content-between align-items-center">
        <h4 className="pgFooters d-flex" style={{ color: 'red' }}>Number of Christmases: <h4 className="pgFooters ms-2" style={{ color: 'green' }}>{years?.length}</h4></h4>
      </div>
    </>
  );
}
