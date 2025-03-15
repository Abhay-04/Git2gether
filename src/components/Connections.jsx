import { useEffect } from "react";
import { BASE_URL_DEV, BASE_URL_PROD } from "../utils/constants";
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
      <div className="flex gap-4">
      {connections.map((con) => {
        return (
         <Card key={con._id} cardData={con}/>
        );
      })}
      </div>
    </div>
  );
};

export default Connections;
