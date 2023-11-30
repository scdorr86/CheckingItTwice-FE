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
    <Card display="flex" className="m-2 justify-content-between align-items-center p-1" style={{ width: '18rem' }}>
      <Card.Title>{listObj?.listName}</Card.Title>
      <Card.Text>Christmas Year: {listObj?.christmasYear?.listYear}</Card.Text>
      <Card.Text>List Total: ${listObj?.listTotal}</Card.Text>
      <Card.Body className="d-flex">
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
