import { useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Col, Container, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { whyUsContents, faqs, testimonials } from "@/constants/homepage";
import WhyUsCard from "@/components/WhyUsCard";
import TestimonialCard from "@/components/TestimonialCard";

import checkIcon from "@/assets/icons/check.svg";
import chevronLeftIcon from "@/assets/icons/chevron-left.svg";
import chevronRightIcon from "@/assets/icons/chevron-right.svg";
import heroCar from "@/assets/images/hero.png";
import ourService from "@/assets/images/homepage/our-service.png";

const Homepage = () => {
  const sliderRef = useRef(null);
  const sliderSettings = {
    arrows: false,
    centerMode: true,
    centerPadding: "40px",
    initialSlide: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };

  const handlePrevious = () => sliderRef?.current?.slickPrev();
  const handleNext = () => sliderRef?.current?.slickNext();
  
  return (
    <>
      <section className="hero bg-grey">
        <Container className="hero__container global-container overflow-hidden d-flex flex-column flex-xl-row justify-content-between align-items-center mt-0">
          <Col sm={12} xl={5} className="hero__contents d-flex flex-column justify-content-start align-items-start">
            <h1 className="hero__headline mb-3">Sewa & Rental Mobil Terbaik di kawasan Medan</h1>
            <p className="hero__description mb-3">
              Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
            <Link to="/find-car" className="hero__button btn-cta d-flex justify-content-center align-items-center text-decoration-none">
              Mulai Sewa Mobil
            </Link>
          </Col>
          <img src={heroCar} className="hero__image img-fluid" alt="Mercedes Benz" />
        </Container>
      </section>
      <Container className="our-service global-container">
        <div className="our-service__container d-flex flex-column flex-xl-row justify-content-center align-items-center">
          <img src={ourService} className="our-service__image img-fluid" alt="Our Service" />
          <div className="our-service__contents">
            <h2 id="ourService" className="our-service__headline mb-3 mb-sm-4">Best Car Rental for any kind of trip in Medan!</h2>
            <p className="our-service__description mb-3">
              Sewa mobil di Medan bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi 
              mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
            </p>
            <ul className="our-service__list">
              <li className="our-service__item">
                <img src={checkIcon} className="our-service__item__icon" alt="Check" />
                Sewa Mobil Dengan Supir di Bali 12 Jam
              </li>
              <li className="our-service__item">
                <img src={checkIcon} className="our-service__item__icon" alt="Check" />
                Sewa Mobil Lepas Kunci di Bali 24 Jam
              </li>
              <li className="our-service__item">
                <img src={checkIcon} className="our-service__item__icon" alt="Check" />
                Sewa Mobil Jangka Panjang Bulanan
              </li>
              <li className="our-service__item">
                <img src={checkIcon} className="our-service__item__icon" alt="Check" />
                Gratis Antar - Jemput Mobil di Bandara
              </li>
              <li className="our-service__item">
                <img src={checkIcon} className="our-service__item__icon" alt="Check" />
                Layanan Airport Transfer / Drop In Out
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <Container className="why-us global-container">
        <div className="why-us__container d-flex flex-column justify-content-start align-items-start">
          <hgroup className="why-us__heading-group d-flex flex-column justify-content-center align-items-center justify-content-sm-start align-items-sm-start w-100">
            <h2 id="whyUs" className="why-us__headline mb-3">Why Us</h2>
            <p className="why-us__description mb-0">Mengapa harus pilih Binar Car Rental?</p>
          </hgroup>
          <Row className="why-us__cards">
            {whyUsContents.map((whyUsContent) => (
              <WhyUsCard 
                key={whyUsContent.id}
                image={whyUsContent.image}
                title={whyUsContent.title}
              >
                {whyUsContent.description}
              </WhyUsCard>
            ))}
          </Row>
        </div>
      </Container>
      <section className="testimonial">
        <div className="testimonial__container">
          <hgroup className="testimonial__heading-group d-flex flex-column justify-content-center align-items-center">
            <h2 id="testimonialSection" className="testimonial__headline mb-3 fs-4 fw-bold text-black">Testimonial</h2>
            <p className="testimonial__description mb-0 fw-light text-black">Berbagai review positif dari para pelanggan kami</p>
          </hgroup>
          <div className="testimonial__slider d-flex flex-column justify-content-center align-items-center">
            <Slider ref={sliderRef} {...sliderSettings}>
              {testimonials.map((testimonial) => (
                <TestimonialCard 
                  key={testimonial.id}
                  image={testimonial.image}
                  reviewer={testimonial.reviewer}
                >
                  {testimonial.review}
                </TestimonialCard>
              ))}
            </Slider>
            <div className="testimonial__slider__nav d-flex justify-content-center align-items-center">
              <button onClick={handlePrevious} className="testimonial__slider__nav-button">
                <img src={chevronLeftIcon} alt="Previous" />
              </button>
              <button onClick={handleNext} className="testimonial__slider__nav-button">
                <img src={chevronRightIcon} alt="Next" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <Container className="getting-started global-container">
        <div className="getting-started__contents d-flex flex-column justify-content-center align-items-center text-center">
          <span className="getting-started__headline mb-3">Sewa Mobil di Medan Sekarang</span>
          <p className="getting-started__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="getting-started__cta btn-cta d-flex justify-content-center align-items-center fw-bold">
            Mulai Sewa Mobil
          </button>
        </div>
      </Container>
      <Container className="faq global-container">
        <div className="faq__container d-flex flex-column flex-lg-row justify-content-between align-items-start">
          <hgroup className="faq__heading-group d-flex flex-column justify-content-center align-items-center justify-content-sm-start align-items-sm-start w-100">
            <h2 id="faqSection" className="faq__headline mb-3">Frequently Asked Question</h2>
            <p className="faq__description mb-xl-0">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
          </hgroup>
          <Col xs={12} lg={6}>
            <Accordion alwaysOpen className="d-flex flex-column w-100">
              {faqs.map((faq) => (
                <Accordion.Item key={faq.id} eventKey={faq.id} className="overflow-hidden rounded-1">
                  <Accordion.Header>
                    {faq.question}
                  </Accordion.Header>
                  <Accordion.Body>
                    {faq.answer}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </div>
      </Container>
    </>
  )
}

export default Homepage;