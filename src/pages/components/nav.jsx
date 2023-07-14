import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { BsList } from 'react-icons/bs';
import Link from 'next/link'; 
import Image from 'next/image';
import Logo from '../../../public/logo.png'
function Navlink() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow} className='nav-links btn btn-light'>
        <BsList className='list' />
      </Button>

      <Offcanvas show={show} onHide={handleClose} className='canvas'>
        <Offcanvas.Header closeButton>
          {/* <Offcanvas.Title>Offcanvas</Offcanvas.Title> */}
          <Image src={Logo} width={90} height={30} className='img-fluid' />
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="minLinks">
            <li> <Link className='Navbarlist' href="#hero">Home</Link></li>
            <li> <Link className='Navbarlist' href="#about">About</Link></li>
            <li> <Link className='Navbarlist' href="#team">Team</Link></li>
            <li> <Link className='Navbarlist' href="#work">Works</Link></li>
            <li> <Link className='Navbarlist' href="#pricing">Pricing</Link></li>
            <li> <Link className='Navbarlist' href="#product">Products</Link></li>
            <li> <Link className='Navbarlist' href="#contact">Contact</Link></li>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Navlink;