// pages/HomePage.jsx
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <div style={{ maxWidth: "100%" }}>
      <footer
        className="footer mt-auto py-3 bg-light"
        style={{ width: "100%" }}>
        <div className="container">
          <span className="text-muted center">
            &copy; 2021 spiderQuiz App. All rights reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
