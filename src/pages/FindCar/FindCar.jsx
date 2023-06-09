import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container } from "react-bootstrap";

import fetchCars from "@/store/actions/carAction";
import { getCars, getCarsStatus, getFilteredCars, getFilteredCarsStatus } from "@/store/reducers/carReducer";

import CarCard from "@/components/CarCard";
import SkeletonCard from "@/components/SkeletonCard";
import FindCarForm from "@/pages/FindCar/FindCarForm";

import heroCar from "@/assets/images/hero.png";

const FindCar = () => {
  const dispatch = useDispatch();
  const cars = useSelector(getCars);
  const fetchCarsStatus = useSelector(getCarsStatus);
  const filteredCars = useSelector(getFilteredCars);
  const fetchFilteredCarsStatus = useSelector(getFilteredCarsStatus);
  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  useEffect(() => {
    setData(cars);
  }, [cars]);

  useEffect(() => {
    if (fetchFilteredCarsStatus === "succeeded") {
      setData(filteredCars);
    }
  }, [filteredCars, fetchFilteredCarsStatus]);

  return (
    <>
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
      <Container className="car-search global-container">
        <FindCarForm />
      </Container>
      <Container className="cars-container global-container">
        <div className="cars-cards">
          {fetchCarsStatus === "loading" 
            ? Array(25).fill().map((_, index) => <SkeletonCard key={index+1} />)
            : data.map((item) => <CarCard key={item.id} cars={item} /> )
          }
        </div>
      </Container>
    </>
  )
}

export default FindCar;