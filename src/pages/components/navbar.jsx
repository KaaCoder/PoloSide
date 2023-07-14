import Container from 'react-bootstrap/Container';
import Navlink from './nav'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'next/image'
import Logo from '../../../public/logo.png'
import { BsCloudDownload } from 'react-icons/bs';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Link from 'next/link';
function Headnav() {
    return (
        
        <div className="All ">

            <Image src={Logo} width={90} height={30} className='img-fluid' />
            <ul className="linkes">
                <li> <Link className='link' href="#hero">Home</Link></li>
                <li> <Link className='link' href="#about">About</Link></li>
                <li> <Link className='link' href="#team">Team</Link></li>
                <li> <Link className='link' href="#work">Works</Link></li>
                <li> <Link className='link' href="#pricing">Pricing</Link></li>
                <li> <Link className='link' href="#product">Products</Link></li>
                <li> <Link className='link' href="#contact">Contact</Link></li>
            </ul>
            <button className='download'><BsCloudDownload id='down' />Download</button>
            <Navlink />
        </div>
    )

}
export default Headnav