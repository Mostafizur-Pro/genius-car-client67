import React from "react";
import "./Banner.css";

const BannerItem = ({ slide }) => {
  //   console.log(slide);
  const { image, prev, id, next } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-img ">
        <img alt="" src={image} className="w-full rounded-2xl radius-2  " />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
        <h1 className="text-6xl font-bold text-white">
          Affordable <br />
          Price for Car <br />
          Servicing
        </h1>
      </div>

      <div className="absolute  flex justify-end transform -translate-y-1/2 left-24 top-1/2">
        <p className="text-xl text-white">
          Ready to go beyond this free plan? <br />
          eady to go beyond this free plan?
        </p>
      </div>
      <div className="absolute  flex justify-end transform -translate-y-1/2 left-24 top-3/4">
        <button className="btn mr-5 btn-warning">Warning</button>
        <button className="btn btn-outline btn-warning">Warning</button>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${prev}`} className="btn mr-5 btn-circle">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
