import PropTypes from "prop-types";

const Card = ({ imgSrc, SourceLink, title, description }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        className="card"
        style={{
          maxWidth: "30rem",
          marginBottom: "1rem",
          alignContent: "center",
        }}>
        <img src={imgSrc} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={SourceLink} className="btn btn-primary">
            Go To Quiz
          </a>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  SourceLink: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
