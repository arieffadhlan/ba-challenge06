import PropTypes from "prop-types";
import calendarIcon from "@/assets/icons/calendar.svg";
import gearIcon from "@/assets/icons/gear.svg";
import usersIcon from "@/assets/icons/users.svg";

const CarCard = (props) => {
  const splitImageUrl = props.cars.image.split("/");
  const imageUrl = `/src/assets/${splitImageUrl[1]}/cars/${splitImageUrl[2]}`;
  
  return (
    <div className="cars-card d-flex flex-column rounded-3 bg-white">
      <img src={imageUrl} alt={`${props.cars.manufacture}/${props.cars.model}`} className="cars-card__image" />
      <div className="cars-card__body d-flex flex-column">
        <div className="cars-card__bio d-flex flex-column gap-2">
          <span className="cars-card__model text-black">
            {props.cars.manufacture}/{props.cars.model}
          </span>
          <h1 className="cars-card__price mb-0 fs-6 lh-base fw-bold">
            Rp {props.cars.rentPerDay} / hari
          </h1>
          <p className="cars-card__description mb-0 fw-light">
            {props.cars.description}
          </p>
        </div>
        <div className="cars-card__detail d-flex flex-column">
          <div className="cars-card__detail-capacity d-flex align-items-center">
            <img className="cars-card__icon me-2" src={usersIcon} alt="Capacity" />
            <span className="cars-card__capacity fw-light">{props.cars.capacity} orang</span>
          </div>
          <div className="cars-card__detail-transmission d-flex align-items-center">
            <img className="cars-card__icon me-2" src={gearIcon} alt="Transmission" />
            <span className="cars-card__transmission fw-light">{props.cars.transmission}</span>
          </div>
          <div className="cars-card__detail-year d-flex align-items-center">
            <img className="cars-card__icon me-2" src={calendarIcon} alt="Year" />
            <span className="cars-card__year fw-light">Tahun {props.cars.year}</span>
          </div>
        </div>
        {props.cars.available ? 
          <button className="cars-card__button btn-cta">Pilih Mobil</button>
        : 
          <button className="cars-card__button btn-cta" disabled>Tidak Tersedia</button>
        }
      </div>
    </div>
  )
}

CarCard.propTypes = {
  available: PropTypes.string,
  capacity: PropTypes.number,
  cars: PropTypes.object,
  description: PropTypes.string,
  image: PropTypes.string,
  manufacture: PropTypes.string,
  model: PropTypes.string,
  rentPerDay: PropTypes.number,
  transmission: PropTypes.string,
  year: PropTypes.number,
}

export default CarCard;