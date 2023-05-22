import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container } from "react-bootstrap";

import fetchCars from "@/store/actions/carAction";
import { getCars, getFilteredCars, getFilteredCarsStatus } from "@/store/reducers/carReducer";

import CarCard from "@/components/CarCard";
import FindCarForm from "@/pages/FindCar/FindCarForm";

import heroCar from "@/assets/images/hero.png";

const FindCar = () => {
  const dispatch = useDispatch();
  const cars = useSelector(getCars);
  const filteredCars = useSelector(getFilteredCars);
  const filteredCarsStatus = useSelector(getFilteredCarsStatus);
  const [data, setData] = useState([]);
  const [backdrop, setBackdrop] = useState(false);
  const backdropRef = useRef(null);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  useEffect(() => {
    setData(cars);
  }, [cars]);

  useEffect(() => {
    const handler = (event) => {
      if (backdropRef.current && !backdropRef.current.contains(event.target)) {
        setBackdrop(false);
      }
    }
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, []);

  useEffect(() => {
    if (filteredCarsStatus === "succeeded") {
      setData(filteredCars);
      backdropRef.current = null;
    } else {
      // console.log("error");
    }
  }, [data, filteredCars, filteredCarsStatus]);

  const handleBackdrop = () => setBackdrop(!backdrop);

  return (
    <>
      {backdrop && <div className="filter-backdrop"></div>}
      <section className="hero bg-grey">
        <Container className="hero__container global-container overflow-hidden d-flex flex-column flex-xl-row justify-content-between align-items-center mt-0">
          <Col sm={12} xl={5} className="hero__contents d-flex flex-column justify-content-start align-items-start">
            <h1 className="hero__headline mb-3">
              Sewa & Rental Mobil Terbaik di kawasan Medan
            </h1>
            <p className="hero__description mb-3">
              Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
          </Col>
          <img src={heroCar} className="hero__image img-fluid" alt="Mercedes Benz" />
        </Container>
      </section>
      <Container onClick={handleBackdrop} className="car-search global-container">
        <div ref={backdropRef} className="car-search__container">
          <FindCarForm />
        </div>
      </Container>
      <Container className="cars-container global-container">
        <div className="cars-cards">
          {data.map((item) => <CarCard key={item.id} cars={item} /> )}
        </div>
      </Container>
    </>
  )
}

export default FindCar;