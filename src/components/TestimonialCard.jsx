import PropTypes from "prop-types";
import Card from 'react-bootstrap/Card';
import rating from "@/assets/icons/rate.svg";

const TestimonialCard = ({ children, image, reviewer }) => {
  return (
    <Card className="testimonial__card d-flex flex-column flex-lg-row justify-content-center align-items-center rounded-3">
      <Card.Header className="testimonial__card__header">
        <Card.Img src={image} className="testimonial__card__image" alt={reviewer} />
      </Card.Header>
      <Card.Body className="testimonial__card__body d-flex flex-column justify-content-center align-items-center justify-content-lg-start align-items-lg-start">
        <img src={rating} className="testimonial__card__rating" alt="Rating" />
        <div className="d-flex flex-column justify-content-start align-items-start">
          <p className="testimonial__card__review mb-2 fw-light">
            {children}
          </p>
          <h3 className="testimonial__card__bio fw-normal">
            {reviewer}
          </h3>
        </div>
      </Card.Body>
    </Card>
  )
}

TestimonialCard.propTypes = {
  children: PropTypes.string,
  image: PropTypes.string,
  reviewer: PropTypes.string,
}

export default TestimonialCard;