import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center my-7 space-y-3">
        <h2 className="text-4xl font-bold">Oops!!</h2>
        <p>404- PAGE NOT FOUND</p>
        <p>The page yor are looking for might have been removed had its name changed or temporary unavailable</p>
      <Link to={"/"}> 
      <button className="bnt btn-primary my-3 bg-orange-400 text-white p-2 rounded-lg">GO TO HOME PAGE</button>
      </Link>
    </div>
    );
};

export default ErrorPage;