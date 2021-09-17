import React, { Fragment } from "react";
import spinner from "./spinner.gif";
const Spinner = () => (
  <Fragment>
      <p><h2 style={{textAlign:"center", color:"white"}}>Loading...</h2></p>
    <img
      src={spinner}
      alt="loading..."
      style={{ width: "1000px", height:"600px",margin: "auto", display: "block", backgroundColor:"gold" }}
    />
    
  </Fragment>
);
export default Spinner;