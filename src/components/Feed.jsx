import axios from "axios";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../store/slices/feedSlice";
import Card from "./Card";
import { BASE_URL } from "../utils/constants";
import { AnimatePresence } from "framer-motion";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  console.log(feed);

  const dispatch = useDispatch();
  const fetchFeed = async () => {
    try {
      const res = await axios.get(
        `${BASE_URL}/feed`,

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
    <div className="flex justify-center items-center h-[90vh]">
      <AnimatePresence>
        {feed.length > 0 &&
          feed.map((card, index) => (
            <Card
              key={card._id}
              cardData={card}
              zIndex={feed.length - index} // Highest zIndex for the smallest index
            />
          ))}
      </AnimatePresence>
    </div>
  );
};

export default Feed;
