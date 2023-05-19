import { useState } from 'react';
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import hambugerMenu from "../../assets/icons/menu-hamburger.svg";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <header className="bg-grey">
      <nav className="navbar__contents navbar__container container d-flex justify-content-between align-items-center">
				<Link to="/" className="navbar__logo"></Link>
				<ul className="navbar__items d-none d-lg-flex justify-content-lg-center align-items-lg-center p-0 m-0">
					<li><a className="navbar__link" href="#ourService">Our Services</a></li>
					<li><a className="navbar__link" href="#whyUs">Why Us</a></li>
					<li><a className="navbar__link" href="#testimonialSection">Testimonial</a></li>
					<li><a className="navbar__link" href="#faqSection">FAQ</a></li>
					<li><button className="btn-cta">Register</button></li>
				</ul>
				<button onClick={handleShow} id="sidebar-menu" className="d-block d-lg-none border-0 bg-transparent" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu" aria-controls="offcanvasRight">
						<img src={hambugerMenu} alt="icon menu" width="24" height="24" />
				</button>    
      </nav>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton className="p-0 mb-3">
          <h5 className="offcanvas__label mb-0 fw-bold">BCR</h5>
        </Offcanvas.Header>
        <Offcanvas.Body className="p-0">
          <ul className="offcanvas__items d-flex flex-column justify-content-center m-0 p-0">
            <li><a className="offcanvas__link text-decoration-none text-black" href="#ourService">Our Services</a></li>
            <li><a className="offcanvas__link text-decoration-none text-black" href="#whyUs">Why Us</a></li>
            <li><a className="offcanvas__link text-decoration-none text-black" href="#testimonialSection">Testimonial</a></li>
            <li><a className="offcanvas__link text-decoration-none text-black" href="#faqSection">FAQ</a></li>
            <li><button className="btn-cta">Register</button></li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  )
}

export default Header;