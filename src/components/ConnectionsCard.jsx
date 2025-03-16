import React from "react";

const ConnectionsCard = ({ data }) => {
  const { firstName, lastName, photoURL, gender, about, skills, createdAt } =
    data;

  return (
    <div className="grid grid-cols-12 items-center pr-4 py-2 my-6 ">
      <div className="col-span-1">
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src={photoURL} />
          </div>
        </div>
      </div>
      <div className="col-span-10 place-self-start px-6 ">
        <h1 className="font-semibold">
          {firstName} {lastName}
        </h1>
       
        <h1>{about}</h1>
        <h4 className="text-xs opacity-80">
          connected on {" "}
          {new Date(createdAt).toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </h4>
      </div>

      <div className="col-span-1">
        <button className="btn text-primary text-base rounded-full bg-white px-6">
          Message
        </button>
      </div>
    </div>
  );
};

export default ConnectionsCard;
