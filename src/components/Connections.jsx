import { useEffect } from "react";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../store/slices/connectionsSlice";
import Card from "./Card";
import { BASE_URL } from "../utils/constants";
import ConnectionsCard from "./ConnectionsCard";

const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connections);
  console.log(connections);
  const fetchConnections = async () => {
    try {
      const res = await axios.get(
        `${BASE_URL}/user/connections`,

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
    connections && (
      <div className="flex justify-center items-center mt-6  gap-y-6">
        <div className="card bg-base-100 w-[60vw] shadow-xl px-6 py-4 ">
          <h1 className="text-lg font-semibold">
            {connections.length} Connections
          </h1>
          <div className="flex gap-4 justify-between ">
            <div className="flex justify-center items-center">
              <h1 className="w-full">Sort by :</h1>

              <select className="select select-ghost max-w-max ">
                <option>Recently Added</option>
                <option>First Name</option>
                <option>Last Name</option>
              </select>
            </div>
            <div>
              <input
                type="text"
                placeholder="Search by name"
                className="input input-bordered input-sm rounded-lg w-full max-w-xs"
              />
            </div>
          </div>
          <div className="">
            {connections.map((conn) => (
              <ConnectionsCard key={conn._id} data={conn} />
            ))}
           
          </div>
        </div>
      </div>
    )
  );
};

export default Connections;
