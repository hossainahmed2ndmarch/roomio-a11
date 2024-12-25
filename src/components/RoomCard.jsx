import React from "react";

const RoomCard = ({ room }) => {
  const { image, price, description, bed, guests, size, title } = room;
  return (
    <div className="card card-compact bg-base-100 w-96 rounded-none shadow-xl">
      <div className="card rounded-none image-full w-96 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Room"
          />
        </figure>
        <div className="card-body rounded-none">
          <div className="card-actions justify-start">
            <button className="btn bg-light border-none rounded-none">
              {price}
            </button>
          </div>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
