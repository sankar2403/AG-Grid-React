import React from "react";
import { Link } from "react-router-dom";
import { styles } from "./Navbar.js";
import '../Bars/Signup.css'
const Navbar = () => {
  return (
    <nav style={styles.Nav}>
      <div className="Heading" style={styles.logo}>
        <span style={{ color: "orange", fontSize: "25px" }}>
          <b>D</b>
        </span>
        evelopers
  
      </div>
      <div className="Menu">
        <ul style={styles.Menuul}>
          <li >
            <Link to="/" style={styles.Menuli}>
              <span style={{ color: "orange", fontSize: "25px" }}>
                <b>H</b>
              </span>
              ome
            </Link>
          </li>
          <li>
            <Link to="/contact" style={styles.Menuli}>
              <span style={{ color: "orange", fontSize: "25px" }}>
                <b>C</b>
              </span>
              ontact
            </Link>
          </li>
          <li>
            <Link to="/about" style={styles.Menuli}>
              <span style={{ color: "orange", fontSize: "25px" }}>
                <b>A</b>
              </span>
              bout
            </Link>
          </li>
          <li>
            <Link to="/login" style={styles.Menuli}>
              <span style={{ color: "orange", fontSize: "25px" }}>
                <b>L</b>
              </span>
              ogin
            </Link>
          </li>
          <li>
            <Link to="/signup" style={styles.Menuli}>
              <span style={{ color: "orange", fontSize: "25px" }}>
                <b>S</b>
              </span>
              ignUp
            </Link>
          </li>
       </ul>
      </div>
    </nav>
  );
};

export default Navbar;
