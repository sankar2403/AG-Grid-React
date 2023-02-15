import React from "react";
import { Link} from "react-router-dom";
import "../Signup.css";
const About = () => {
  return (
    <aside>
      <ul>
        <li>
          <Link to="/about/kannadaMovies">Kannada Movies</Link>
        </li>
        <li>
          <Link to="/about/TamilMovies">Tamil Movies</Link>
        </li>
        <li>
           <Link to="/about/MalayalamMovies">Malayalam Movies</Link>
        </li>
      </ul>
     
    </aside>
  );
};

export default About;
