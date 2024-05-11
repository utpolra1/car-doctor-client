import { Link, NavLink } from "react-router-dom";


const ServiceCard = ({ service }) => {
    const { _id, title, img, price } = service;
    console.log(_id)
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="text-xl text-orange-500">Price: ${price}</p>
                <div className="card-actions flex justify-between">
                    <Link to={`/cardDetails/${_id}`}>
                        <button className="btn btn-primary">Book Now</button>
                    </Link>
                    <NavLink to={`/updatejob/${_id}`}><button className="btn">Update Now</button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;