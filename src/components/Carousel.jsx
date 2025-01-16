import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import reactImg from "../assets/Q3.png"; // Image for the desktop device carousel
import reactImg1 from "../assets/Q2.jpeg"; // Image for the desktop and all device carousel
import reactImg2 from "../assets/Q1.jpeg"; // Image for the desktop and all device carousel
import reactImg3 from "../assets/Q4.jpeg"; // Image for only mobile device carousel

const Carousel = () => {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="2000" // Set auto-slide interval to 2 seconds (2000ms)
    >
      <div className="carousel-inner">
        {/* Slide 1 */}
        <div className="carousel-item active">
          <picture>
            {/* Mobile-specific image */}
            <source
              media="(max-width: 768px)"
              srcSet={reactImg3} // For mobile devices, use reactImg3
            />
            {/* Default image for larger devices */}
            <img
              src={reactImg1} // For larger devices, use reactImg1
              className="d-block w-100"
              alt="Slide 1"
              style={{ objectFit: "cover", height: "auto" }}
            />
          </picture>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <picture>
            <source
              media="(max-width: 768px)"
              srcSet={reactImg1} // For mobile devices, use reactImg3
            />
            <img
              src={reactImg2} // For larger devices, use reactImg2
              className="d-block w-100"
              alt="Slide 2"
              style={{ objectFit: "cover", height: "auto" }}
            />
          </picture>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item">
          <picture>
            <source
              media="(max-width: 768px)"
              srcSet={reactImg2} // For mobile devices, use reactImg3
            />
            <img
              src={reactImg} // For larger devices, use reactImg (Q3.png)
              className="d-block w-100"
              alt="Slide 3"
              style={{ objectFit: "cover", height: "auto" }}
            />
          </picture>
        </div>
      </div>

      {/* Carousel Controls (Removed) */}
      {/* No previous & next buttons */}
    </div>
  );
};

export default Carousel;
