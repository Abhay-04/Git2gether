import { useEffect } from "react";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { addRequest } from "../store/slices/requestSlice";
import { BASE_URL } from "../utils/constants";
import Card from "./Card";
import ConnectionsCard from "./ConnectionsCard";
import RequestCard from "./RequestCard";

const Requests = () => {
  const dispatch = useDispatch();
  const request = useSelector((store) => store.requests);
  const fetchRequests = async () => {
    try {
      const res = await axios.get(
        `${BASE_URL}/user/requests/received`,

        { withCredentials: true }
      );

      dispatch(addRequest(res.data.data));
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  return (
    request && (
      <div className="flex justify-center items-center my-10 gap-y-6">
        <div className="card bg-base-100 md:w-[60vw] w-full shadow-xl px-6 py-4">
          <h1 className="text-lg font-semibold">{request.length} Requests</h1>

          <div className="mt-6">
            {request.length > 0 ? (
              request.map((req) => (
                <RequestCard
                  key={req._id}
                  reqSendDate={req.createdAt}
                  id={req._id}
                  data={req.fromUserId}
                />
              ))
            ) : (
              <p className="text-center text-secondary text-xs xl:text-base my-16 xl:my-6 ">
                <span className="font-bold xl:text-2xl text-lg text-primary ">
                  No one has sent you a request yet.{" "}
                </span>
                <br></br>Time to make new connections!
              </p>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default Requests;
