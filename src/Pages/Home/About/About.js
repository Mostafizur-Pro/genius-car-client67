import React from "react";
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div>
      <div className="hero my-20">
        <div className="hero-content flex-col lg:flex-row">
          <div className="relative w-1/2">
            <img
              alt=""
              src={person}
              className="w-4/5 h-full max-w-sm rounded-lg shadow-2xl"
            />
            <img
              alt=""
              src={parts}
              className="absolute w-3/5 right-5 top-1/2 bottom-8 max-w-sm rounded-lg shadow-2xl"
            />
          </div>
          <div className="w-1/2">
            <p className="text-2xl font-bold text-orange-600"> About us</p>
            <h1 className="text-5xl font-bold">
              We are qualified <br />
              & of experience <br />
              in this field
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi. <br />
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
