/* eslint-disable react/prop-types */

const Feature = ({item}) => {
    const {brand, image}= item
    return (
        <div className="card mt-5 h-5/6  bg-base-100 shadow-xl">
  <figure><img src={image} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {brand}
    </h2>
  </div>
</div>
    );
};

export default Feature;