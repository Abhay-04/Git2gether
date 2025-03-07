import { useEffect } from "react";
import { BASE_URL_DEV, BASE_URL_PROD } from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { addRequest } from "../store/slices/requestSlice";

const Requests = () => {
  const dispatch = useDispatch();
  const request = useSelector((store) => store.requests);
  const fetchRequests = async () => {
    try {
      const res = await axios.get(
        `${BASE_URL_PROD}/user/requests/received`,

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
    <div>
      <h2>request</h2>
      {request.map((req) => {
        return <div key={req._id}>Hejka</div>;
      })}
    </div>
  );
};

export default Requests;
