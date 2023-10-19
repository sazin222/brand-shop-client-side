/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

// import BrandDetails from "./BrandDetails";

const Feature = ({ item }) => {
  const { brand, image,} = item;

  return (
    <>
      <Link to={`/product/${brand}`}>
        <div className="card mt-5 h-5/6  bg-base-100 shadow-xl">
          <figure>
            <img src={image} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{brand}</h2>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Feature;
