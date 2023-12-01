import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { deleteSingleList } from '../../api/listData';

function ListCard({ listObj }) {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const [hovered, setHovered] = useState(false);

  const deleteList = () => {
    if (window.confirm(`Delete Order ${listObj?.listName}?`)) {
      deleteSingleList(listObj?.id).then(() => window.location.reload());
    }
  };

  const viewListDetails = () => {
    console.log('Navigating to post details for post ID:', listObj.id);
    router.push(`/lists/${listObj?.id}`);
  };

  console.log('this is the list obj:', listObj);
  console.log('this is the year:', listObj?.christmasYear?.listYear);

  return (
    <Card className="m-2 p-1" style={{ width: '25rem' }}>
      <Card.Body className="p-0">
        <div className="row g-0">
          {/* Centered: Image */}
          <div className="col d-flex justify-content-center align-items-center">
            <Card.Img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtoFHgLrBMH0_ruJZ87Pk9KH73Germ7IJuGw&usqp=CAU"
              style={{ width: '145px', height: '190px', marginRight: '20px' }}
              className="rounded-circle p-.5"
            />
          </div>

          {/* Centered: Attributes and Buttons */}
          <div className="col d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column justify-content-between">
              <div>
                <div className="cardTitleWrapper">
                  <div className="cardTitle mb-3">{listObj?.listName}</div>
                </div>
                <Card.Text className="d-flex cardText">Christmas Year: <p className="ms-2 cardP">{listObj?.christmasYear?.listYear}</p></Card.Text>
                <Card.Text className="d-flex cardText">List Total: <p className="ms-2 cardP">{listObj?.listTotal?.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p></Card.Text>
              </div>
              <div className="d-flex mt-3">
                <Button
                  className="mb-1 me-1"
                  style={{ maxWidth: '10rem', maxHeight: '2.25rem' }}
                  variant="success"
                  onClick={viewListDetails}
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  {hovered ? 'View List' : <FontAwesomeIcon style={{ color: 'white' }} className="pe-0" icon={faList} />}
                </Button>
                <Button
                  variant="danger"
                  style={{ maxWidth: '10rem', maxHeight: '2.25rem' }}
                  onClick={deleteList}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {isHovered ? 'Delete List' : <FontAwesomeIcon style={{ color: 'white' }} className="pe-0" icon={faTrashAlt} />}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

ListCard.propTypes = {
  listObj: PropTypes.shape({
    id: PropTypes.number,
    listName: PropTypes.string,
    christmasYear: PropTypes.shape({
      listYear: PropTypes.string,
    }),
    listTotal: PropTypes.number,
  }).isRequired,
};

export default ListCard;
