import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookService from "./BookService";

const CardDetails = () => {
  const [services, setServices] = useState([]);

  const { _id } = useParams();
  const [datas, setData] = useState(null);

  useEffect(() => {
    if (services) {
      const singleData = services.find((item) => item._id === _id);
      setData(singleData);
    }
  }, [services, _id]);

  useEffect(() => {
    fetch(
      "https://car-doctor-server-3q8l2oj5w-utpolra1s-projects.vercel.app/services"
    )
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const handleDelte = (_id) => {
    fetch(
      `https://car-doctor-server-3q8l2oj5w-utpolra1s-projects.vercel.app/services/${_id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <div className="card glass">
        <figure>
          <img src={datas?.img} alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{datas?.title}</h2>
          <p>{datas?.description}</p>
        </div>
      </div>
      <button onClick={() => handleDelte(_id)} className="btn">
        Delete Now
      </button>
      <BookService></BookService>
    </div>
  );
};

export default CardDetails;
