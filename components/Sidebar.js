import { useRouter } from 'next/router';
import ListGroup from 'react-bootstrap/ListGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator, faHouse } from '@fortawesome/free-solid-svg-icons';
import {
  faAmazon, faEbay, faShopify, faEtsy as fabEtsy, faGoogle as fabGoogle,
} from '@fortawesome/free-brands-svg-icons';

export default function SideBar() {
  const router = useRouter();

  const navigateTo = (route) => {
    router.push(route);
  };

  return (
    <div className="side-bar">
      <h4 className="list-header">Quick Links</h4>
      <ListGroup className="center-list">
        <ListGroup.Item action onClick={() => navigateTo('/')}><FontAwesomeIcon icon={faHouse} /> Home</ListGroup.Item>
        <ListGroup.Item action onClick={() => navigateTo('https://www.google.com')}><FontAwesomeIcon icon={fabGoogle} /> Google</ListGroup.Item>
        <ListGroup.Item action onClick={() => navigateTo('https://www.etsy.com')}><FontAwesomeIcon icon={fabEtsy} /> Etsy</ListGroup.Item>
        <hr className="seperator" />
        <ListGroup.Item action onClick={() => navigateTo('https://www.shopify.com')}><FontAwesomeIcon icon={faShopify} /> Shopify</ListGroup.Item>
        <ListGroup.Item action onClick={() => navigateTo('https://www.amazon.com')}><FontAwesomeIcon icon={faAmazon} /> Amazon</ListGroup.Item>
        <ListGroup.Item action onClick={() => navigateTo('https://www.ebay.com')}><FontAwesomeIcon icon={faEbay} /> Ebay</ListGroup.Item>
        <ListGroup.Item action onClick={() => navigateTo('https://calculator.apps.chrome/')}><FontAwesomeIcon icon={faCalculator} /> Calculator</ListGroup.Item>
      </ListGroup>
    </div>
  );
}
