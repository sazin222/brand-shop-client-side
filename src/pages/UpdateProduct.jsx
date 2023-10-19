import Swal from "sweetalert2";
import Navber from "../Routes/Shared/Navber";
import { useLoaderData } from "react-router-dom";

const UpdateProduct = () => {
    const products = useLoaderData()

    console.log(products);
    const {image, brandname, name, type, price, description, rating, _id} = products
    console.log(_id);
  const handelUpdateProduts = (event) => {
    event.preventDefault();
    const form = event.target;
    const image = form.image.value;
    const name = form.name.value;
    const brandname = form.brandname.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;

    const UpdateProduct = {
      image,
      name,
      brandname,
      type,
      price,
      description,
      rating,
    };

    console.log(UpdateProduct);

    
    fetch(`http://localhost:5000/product/${_id}`,{

    method: 'PUT',
    headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(UpdateProduct)

})
.then(res=>res.json())
.then(data=>{
    console.log(data);
    if(data.modifiedCount>0){
        Swal.fire({
            title: 'Success',
            text: 'Product updated successfully',
            icon: 'Success',
            confirmButtonText: 'Cool'
          })
    }
})



  };

  return (
    <div className="">
      <Navber></Navber>

      <div className="hero min-h-screen bg-black">
        <div className="hero-content flex-col items-center">
          <h1 className="text-white font-semibold text-3xl lg:mt-12">
            Update Your products
          </h1>
          <form onSubmit={handelUpdateProduts}>
            <div className=" md:flex gap-4">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <label className="input-group ">
                  <input
                    type="text"
                    name="image"
                    defaultValue={image}
                    placeholder="Image url"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <label className="input-group ">
                  <input
                    type="text"
                    name="name"
                    defaultValue={name}
                    placeholder="Name"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            <div className=" md:flex gap-4">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Brand Name</span>
                </label>
                <label className="input-group ">
                  <input
                    type="text"
                    name="brandname"
                    defaultValue={brandname}
                    placeholder="Brand Name"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Type </span>
                </label>
                <label className="input-group ">
                  <input
                    type="text"
                    name="type"
                    defaultValue={type}
                    placeholder="Type"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            <div className=" md:flex gap-4">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <label className="input-group ">
                  <input
                    type="text"
                    name="price"
                    defaultValue={price}
                    placeholder="Price"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Short description</span>
                </label>
                <label className="input-group ">
                  <input
                    type="text"
                    name="description"
                    defaultValue={description}
                    placeholder="Short description"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            <div className=" ">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <label className="input-group ">
                  <input
                    type="text"
                    name="rating"
                    defaultValue={rating}
                    placeholder="Rating"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            <input
              className="btn w-full my-3 bg-orange-500 text-white"
              type="submit"
              value="Update Product"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
