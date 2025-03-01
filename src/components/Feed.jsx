import axios from "axios";
import { BASE_URL_DEV, BASE_URL_PROD } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../store/slices/feedSlice";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  console.log(feed);

  const dispatch = useDispatch();
  const fetchFeed = async () => {
    try {
      const res = await axios.get(
        `${BASE_URL_PROD}/feed`,

        { withCredentials: true }
      );

      dispatch(addFeed(res.data.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFeed();
  }, []);

  return (
    feed && (
      <div className="flex justify-center items-center my-28 gap-6 flex-wrap">
        {feed.map((feed) => {
          return (
            <div key={feed._id} className="card glass w-96 min-h-96">
              <figure>
                <img
                  src={feed.photoURL}
                  alt="car!"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{`${feed.firstName} ${feed.lastName}`}</h2>
                <p>{feed.about}</p>
                <div className="card-actions ">
                  <button className="btn btn-primary">Ignore</button>
                  <button className="btn btn-primary">Interested</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    )
  );
};

export default Feed;
