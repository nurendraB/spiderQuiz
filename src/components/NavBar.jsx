import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // New state to detect mobile devices

  // Check window width to detect mobile device
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768); // You can adjust the breakpoint as needed
    };

    checkIfMobile(); // Check on initial render
    window.addEventListener("resize", checkIfMobile); // Update on window resize

    return () => {
      window.removeEventListener("resize", checkIfMobile); // Clean up event listener
    };
  }, []);

  // Handle the search input change
  const handleSearchChange = (e) => {
    setQuery(e.target.value);
    setShowResults(e.target.value.length > 0);
  };

  // Handle click on search result to hide results and clear the search query
  const handleResultClick = () => {
    setQuery("");
    setShowResults(false);
  };

  // Set up some example data to search through
  const data = ["C++ Quiz", "Python Quiz", "Cybersecurity Quiz"];

  // Filter the data based on the query
  const filteredData = data.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <header>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#e3f2fd" }}>
        <div className="container-fluid">
          {/* Use Link for brand */}
          <Link className="navbar-brand" to="/">
            spiderQuiz App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>

              {/* Dropdown Menu */}
              <li
                className="nav-item dropdown"
                onMouseEnter={!isMobile ? () => setDropdownOpen(true) : null} // Show the dropdown on hover for desktop
                onMouseLeave={!isMobile ? () => setDropdownOpen(false) : null} // Hide the dropdown on hover for desktop
                onClick={
                  isMobile ? () => setDropdownOpen((prev) => !prev) : null
                } // Toggle dropdown on click for mobile
              >
                <a
                  className={`nav-link dropdown-toggle ${
                    isDropdownOpen ? "show" : ""
                  }`}
                  href="#"
                  role="button"
                  aria-expanded={isDropdownOpen ? "true" : "false"}>
                  Quiz-List
                </a>
                <ul
                  className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}
                  aria-labelledby="navbarDropdown"
                  style={{ backgroundColor: "#e3f2fd" }}>
                  <li>
                    <Link className="dropdown-item" to="/Cpp">
                      Basics of C++
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/PythonQuiz">
                      Basic Python
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Cybersecurity">
                      Cybersecurity
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Developer: Nurendra Bhandarigal
                </a>
              </li>
            </ul>

            {/* Search Form */}
            <form
              className="d-flex ms-auto"
              onSubmit={(e) => e.preventDefault()}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={query}
                onChange={handleSearchChange}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* Display filtered search results */}
      {showResults && query && (
        <div className="container mt-3">
          <h5>Search Results:</h5>
          <ul className="list-group">
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <li key={index} className="list-group-item">
                  <Link
                    to={
                      item === "C++ Quiz"
                        ? "/Cpp"
                        : item === "Python Quiz"
                        ? "/PythonQuiz"
                        : item === "Cybersecurity Quiz"
                        ? "/Cybersecurity"
                        : "#"
                    }
                    className="stretched-link"
                    onClick={handleResultClick}>
                    {item}
                  </Link>
                </li>
              ))
            ) : (
              <li className="list-group-item">No results found</li>
            )}
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;
