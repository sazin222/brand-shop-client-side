/* eslint-disable react/prop-types */
import { AiFillDelete, } from 'react-icons/ai';
// import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MycartDetails = ({ item ,products,setProducts }) => {
  const { image, brandname, name, price, description, rating, _id } = item;


  const handelDelete = id =>{
    console.log(id);
    Swal.fire({
     title: 'Are you sure?',
     text: "You won't be able to revert this!",
     icon: 'warning',
     showCancelButton: true,
     confirmButtonColor: '#3085d6',
     cancelButtonColor: '#d33',
     confirmButtonText: 'Yes, delete it!'
   }).then((result) => {
     if (result.isConfirmed) {
    
      fetch(`https://automotive-brand-server-side.vercel.app/product/${id}`,{
         method: 'DELETE'
      })
      .then(res=> res.json())
      .then(data=>{
         console.log(data);
         if(data.deletedCount>0){
                Swal.fire(
         'Deleted!',
         'Your Product has been deleted.',
         'success'
       )      

         const remaining = products.filter(pro=> pro._id !== id) 
            setProducts(remaining)
         }
      })


     }
   })


  }
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure className="">
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">
          {brandname}
          <div className="badge badge-secondary">BRAND</div>
        </h2>
        <p className="font-semibold">{name}</p>
        <p className="font-semibold">Price: ${price}</p>
        <p>{description}</p>
        <div className="rating">
          <input
            type="radio"
            name={rating}
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name={rating}
            className="mask mask-star-2 bg-orange-400"
            checked
          />
          <input
            type="radio"
            name={rating}
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name={rating}
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name={rating}
            className="mask mask-star-2 bg-orange-400"
          />
        </div>
         <div className="flex justify-between"> 
          <button onClick= {()=>handelDelete(_id)}className='flex items-center justify-center btn'> 
            Delete  <AiFillDelete></AiFillDelete>
          </button>
         </div>
      </div>
    </div>
  );
};

export default MycartDetails;
