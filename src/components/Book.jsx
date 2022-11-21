import React from "react";
import { Link } from "react-router-dom";

const Book = ({ image, title, author, category, price }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt={title} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-white">
          {title}{" "}
          <div className="badge badge-secondary text-xs">{category}</div>
        </h2>
        <p>{author}</p>
        <p className="text-lg font-medium">{price}</p>
        <div className="card-actions">
          <Link to="/book-details" className="btn btn-primary">
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Book;
