// pages/HomePage.jsx
import "bootstrap/dist/css/bootstrap.min.css";
import reactImg from "../assets/cpp.jpeg";
import reactImg1 from "../assets/Log In.jpeg";
import reactImg2 from "../assets/security.jpeg";
import Carousel from "./Carousel";
import Card from "./Card";

const Home = () => {
  return (
    <div>
      <h4 className="text-center mt-3">
        <span className="badge rounded-pill text-bg-info">
          Welcome To spiderQuiz Web
        </span>
      </h4>

      <Carousel />

      {/* Use "row" to organize columns and "col" to stack them in a single column */}
      <div className="row g-4">
        <div className="col-12 col-md-4">
          <Card
            imgSrc={reactImg}
            SourceLink="/Cpp"
            title="Basics of C++"
            description="Some quick quiz on C++ basics. Click on the button below to start"
          />
        </div>
        <div className="col-12 col-md-4">
          <Card
            imgSrc={reactImg1}
            SourceLink="/PythonQuiz"
            title="Basics of Python"
            description="Some quick quiz on Python basics. Click on the button below to start"
          />
        </div>
        <div className="col-12 col-md-4">
          <Card
            imgSrc={reactImg2}
            SourceLink="/Cybersecurity"
            title="Basics of Cybersecurity"
            description="Quiz on Cybersecurity basics. Click on the button below to start"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
