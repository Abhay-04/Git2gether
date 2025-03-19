import axios from "axios";
import React from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeRequestById } from "../store/slices/requestSlice";

const RequestCard = ({ data, reqSendDate, id }) => {
  const { firstName, lastName, photoURL, gender, about, skills, createdAt } =
    data;
  const dispatch = useDispatch();
  const requestReview = async (status, id) => {
    try {
      const res = await axios.post(
        `${BASE_URL}/request/review/${status}/${id}`,
        {},
        { withCredentials: true }
      );

      dispatch(removeRequestById(id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid grid-cols-12 items-center pr-4 py-2 my-6 gap-y-4 ">
      <div className="col-span-3 md:col-span-1  ">
        <div className="avatar">
          <div className="md:w-24 w-16 rounded-full">
            <img src={photoURL} />
          </div>
        </div>
      </div>
      <div className="md:col-span-9 col-span-9 md:place-self-start md:px-6 ">
        <h1 className="font-semibold">
          {firstName} {lastName}
        </h1>

        <h1>{about}</h1>
        <h4 className="text-xs opacity-80">
          request received on{" "}
          {new Date(reqSendDate).toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </h4>
      </div>

      <div className="col-span-2 flex gap-2 ">
        <button
          onClick={() => requestReview("accepted", id)}
          className="btn text-primary text-base rounded-full bg-white px-6"
        >
          Accept
        </button>
        <button
          onClick={() => requestReview("rejected", id)}
          className="btn btn-outline btn-error rounded-full px-6"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default RequestCard;
