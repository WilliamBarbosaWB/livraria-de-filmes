// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

const NavBar = () => {
  return (
    <div>
      <nav id="navbar">
        <h2>
          <Link to="/">
            {" "}
            <BiCameraMovie />
            Livraria Filmes
          </Link>
        </h2>
        <form>
          <input type="text" placeholder="Busque um filme" />
          <button type="submit">
            <BiSearchAlt2 />
          </button>
        </form>
      </nav>
    </div>
  );
};

export default NavBar;
