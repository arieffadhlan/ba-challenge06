import { Link } from "react-router-dom";
import facebook from "../../assets/icons/social-media/facebook.svg";
import instagram from "../../assets/icons/social-media/instagram.svg";
import twitter from "../../assets/icons/social-media/twitter.svg";
import mail from "../../assets/icons/social-media/mail.svg";
import twitch from "../../assets/icons/social-media/twitch.svg";

const Footer = () => {
  return (
    <footer className="footer global-container container">
      <div className="footer__container row">
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="footer__address">
            <ul className="footer__address__list d-flex flex-column justify-content-start align-items-start p-0 m-0">
              <li className="footer__address__item">
                Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
              </li>
              <li className="footer__address__item">
                binarcarrental@gmail.com
              </li>
              <li className="footer__address__item">
                081-233-334-808
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="footer__navigation">
            <ul className="footer__navigation__list d-flex flex-column justify-content-start align-items-start p-0 m-0">
              <li className="footer__navigation__item">
                <a className="footer__navigation__link" href="#ourService">Our Service</a>
              </li>
              <li className="footer__navigation__item">
                <a className="footer__navigation__link" href="#whyUs">Why Us</a>
              </li>
              <li className="footer__navigation__item">
                <a className="footer__navigation__link" href="#testimonialSection">Testimonial</a>
              </li>
              <li className="footer__navigation__item">
                <a className="footer__navigation__link" href="#faqSection">FAQ</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="footer__sosmed">
            <h4 className="footer__connect mb-3">
              Connect with us
            </h4>
            <ul className="footer__sosmed__list d-flex justify-content-start align-items-start p-0 m-0">
              <li className="footer__sosmed__item">
                <a href="#">
                  <img src={facebook} alt="Facebook" />
                </a>
              </li>
              <li className="footer__sosmed__item">
                <a href="#">
                  <img src={instagram} alt="Instagram" />
                </a>
              </li>
              <li className="footer__sosmed__item">
                <a href="#">
                  <img src={twitter} alt="Twitter" />
                </a>
              </li>
              <li className="footer__sosmed__item">
                <a href="#">
                  <img src={mail} alt="mail" />
                </a>
              </li>
              <li className="footer__sosmed__item">
                <a href="#">
                  <img src={twitch} alt="Twitch" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="footer__copyright d-flex flex-column justify-content-start align-items-start">
            <span className="footer__copyright__cr mb-3">Copyright Binar 2022</span>
            <Link to="/" className="footer__logo"></Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;