import PropTypes from "prop-types";
import Card from 'react-bootstrap/Card';

const WhyUsCard = ({ children, image, title }) => {
  return (
    <div className="why-us__card-container col-sm-12 col-md-12 col-lg-6 col-xl-3">
      <Card className="why-us__card h-100 rounded-3">
        <Card.Body className="why-us__card-body p-4">
          <Card.Img src={image} className="why-us__card-icon mb-3" alt={title} />
          <Card.Title className="why-us__card-title mb-3">
            {title}
          </Card.Title>
          <Card.Text className="why-us__card-text mb-0">
            {children}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

WhyUsCard.propTypes = {
  children: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
}

export default WhyUsCard;