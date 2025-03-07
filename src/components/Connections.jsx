import { useEffect } from "react";
import { BASE_URL_DEV } from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../store/slices/connectionsSlice";
import Card from "./Card";

const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connections);
  const fetchConnections = async () => {
    try {
      const res = await axios.get(
        `${BASE_URL_PROD}/user/connections`,

        { withCredentials: true }
      );

      dispatch(addConnections(res.data.data));
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-y-12">
      <h2 className="text-primary text-2xl font-bold">Connections</h2>
      {connections.map((con) => {
        return (
          <div key={con._id} className="flex justify-center  gap-x-6  ">
            <div>
              <img className="size-40 rounded-lg" src={con.photoURL} />
            </div>
            <div className="flex flex-col gap-1">
              <div>{`${con.firstName} ${con.lastName}`}</div>
              <div></div>
              <div>{con.about}</div>
              <div>{con.gender}</div>
              <div>{con.skills}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Connections;
