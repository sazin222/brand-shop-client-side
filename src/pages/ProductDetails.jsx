import { useLoaderData } from "react-router-dom";
import Navber from "../Routes/Shared/Navber";
import { useContext } from "react";
import { AuthContext } from "../Authprovider/AuthProvider";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const {user}= useContext(AuthContext)
  const email= user.email
  console.log(email);
  const detailProduct = useLoaderData();
  console.log(detailProduct);


   
  const handlePostDetailProduct = async () => {
    try {
      const dataToPost = { email, ...detailProduct };

      const response = await fetch('https://automotive-brand-server-side.vercel.app/brand', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToPost),
      });

      if (response.ok) {
        Swal.fire({
          title: 'Success',
          text: 'Produced added successfully',
          icon: 'Success',
          confirmButtonText: 'Cool'
        })
      } else {
        // Handle errors
      }
    } catch (error) {
      // Handle network or other errors
    }
  };

  return (
    <div>
      <Navber></Navber>

      <div className=" min-h-screen  bg-black">
        <div className="card w-4/5 mx-auto text-white flex justify-center items-center   shadow-xl">
          <figure className="lg:h-1/2 lg:mt-32 mt-4 lg:w-1/2">
            <img src={detailProduct.image} alt="Shoes" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">
              {detailProduct.brandname}
              <div className="badge badge-secondary">BRAND</div>
            </h2>
            <p className="font-semibold">Name: {detailProduct.name}</p>
            <p className="font-semibold">Price: ${detailProduct.price}</p>
            <p>{detailProduct.description}</p>
            <div className="rating">
              <input
                type="radio"
                name={detailProduct.rating}
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name={detailProduct.rating}
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name={detailProduct.rating}
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name={detailProduct.rating}
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name={detailProduct.rating}
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
           <button onClick={handlePostDetailProduct} className="btn">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
