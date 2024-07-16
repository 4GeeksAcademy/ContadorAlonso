import React from "react";
import Digit from "./digit";


//create your first component
const Home = ({ digit }) => {
  return (
    <div className="container">
      <h1 className="text-center mt-5">{digit}</h1>
      <Button as="input" type="reset" value="Reset" />
    </div>
  );
};

export default Home;