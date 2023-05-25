import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Button = (props) => {
  return (
    <Link to={props.path}>
      <button className='nav__btn'>
        {props.text}
      </button>
    </Link>
  );
};

export default Button;
