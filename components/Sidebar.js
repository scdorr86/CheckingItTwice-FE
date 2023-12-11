import { useRouter } from 'next/router';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowDown, faClapperboard, faClock, faClockRotateLeft, faFilm, faHouse, faPlayCircle, faThumbsUp, faVideoCamera,
} from '@fortawesome/free-solid-svg-icons';

export default function SideBar() {
  const router = useRouter();
  return (
    <>
      <div className="side-bar">
        <br />
        <FontAwesomeIcon icon={faHouse} />
        <Button
          className="bt bg-transparent border-0"
          variant="light"
          onClick={() => {
            router.push('/');
          }}
        >Home
        </Button> <br />
        <br />
        <FontAwesomeIcon icon={faFilm} /> <Link passHref href="/" className="links"> Home </Link> <br />
        <br />
        <FontAwesomeIcon icon={faVideoCamera} /> <Link passHref href="/"> Home </Link> <br />
        <hr className="seperator" />
        <FontAwesomeIcon icon={faPlayCircle} /> <Link passHref href="/" className="links"> Home</Link> <br />
        <br />
        <FontAwesomeIcon icon={faClockRotateLeft} /><Link passHref href="/" className="links"> Home </Link> <br />
        <br />
        <FontAwesomeIcon icon={faClapperboard} /><Link passHref href="/" className="links"> My Home </Link> <br />
        <br />
        <FontAwesomeIcon icon={faClock} /><Link passHref href="/" className="links"> Home </Link> <br />
        <br />
        <FontAwesomeIcon icon={faThumbsUp} /><Link passHref href="/" className="links"> Home </Link> <br />  <br />
        <FontAwesomeIcon icon={faArrowDown} /><Link passHref href="/" className="links"> Home</Link> <br />
      </div>
    </>
  );
}
