import axios from "axios";
import { BASE_URL_DEV, BASE_URL_PROD } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../store/slices/feedSlice";
import Card from "./Card";

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
    if (feed.length > 0) return;
    fetchFeed();
  }, []);

  return (
    feed && (
      <div className="flex justify-center items-center my-28 gap-6 flex-wrap">
        {feed.map((feed) => {
          return (
            <Card key={feed._id} cardData = {feed} />
          );
        })}
      </div>
    )
  );
};

export default Feed;
