import React from "react";

const ConnectionsCard = ({ data }) => {
  const { firstName, lastName, photoURL, gender, about, skills, createdAt } =
    data;

  return (
    <div className="grid grid-cols-12 items-center pr-4 py-2 my-6 gap-y-4 ">
      <div className="col-span-3 md:col-span-1  ">
        <div className="avatar">
          <div className="md:w-24 w-16 rounded-full">
            <img src={photoURL} />
          </div>
        </div>
      </div>
      <div className="md:col-span-10 col-span-9 md:place-self-start md:px-6 ">
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

      <div className="md:col-span-1 col-span-12">
        <button className="btn text-primary text-base rounded-full bg-white px-6">
          Message
        </button>
      </div>
    </div>
  );
};

export default ConnectionsCard;
