import Swal from "sweetalert2";
import Navber from "../Routes/Shared/Navber";

const AddProduct = () => {

    const handelAddProduts = event=>{
        event.preventDefault() 
        const form= event.target
        const image= form.image.value
        const name= form.name.value 
        const brandname= form.brandname.value
        const type = form.type.value
        const price= form.price.value 
        const description = form.description.value 
        const rating = form.rating.value  

        const newProduct ={image,name,brandname,type,price,description,rating} 
      
        console.log(newProduct); 

        fetch('http://localhost:5000/products',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProduct)

        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success',
                    text: 'Produced added successfully',
                    icon: 'Success',
                    confirmButtonText: 'Cool'
                  })

                  form.reset()
            }
        })
        
    }
   

    return (
        <div className="">
    <Navber></Navber>
   
<div className="hero min-h-screen bg-black">
        <div className="hero-content flex-col items-center">
        <h1 className="text-white font-semibold text-3xl lg:mt-12">Add Your products</h1>
          <form onSubmit={handelAddProduts}>
        <div className=" md:flex gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <label className="input-group ">
              <input
                type="text"
                name="image"
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
                placeholder="Rating"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
         <input  className="btn w-full my-3 bg-orange-500 text-white" type="submit" value="Add Product" />
      </form>
        </div>
      </div>



       </div>
    );
};

export default AddProduct;