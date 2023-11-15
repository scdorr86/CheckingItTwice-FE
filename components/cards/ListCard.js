import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { Button, Card } from 'react-bootstrap';
import { deleteSingleList } from '../../api/listData';

function ListCard({ listObj }) {
  const router = useRouter();

  const deleteOrder = () => {
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
    <Card display="flex" className="m-2" style={{ width: '18rem' }}>
      <Card.Title>{listObj?.listName}</Card.Title>
      <Card.Text>Christmas Year: {listObj?.christmasYear?.listYear}</Card.Text>
      <Card.Text>List Total: ${listObj?.listTotal}</Card.Text>
      {/* <Card.Text>
        <strong>Customer Info:</strong> {singlePost?.tags?.[0]?.label}
      </Card.Text> */}
      <Button variant="primary" onClick={viewListDetails}>
        View List
      </Button>
      <Button variant="danger" onClick={deleteOrder}>
        Delete List
      </Button>
      {/* <OrderForm orderObj={orderObj} /> */}
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
