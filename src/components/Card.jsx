import { motion } from "framer-motion";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeFeedById } from "../store/slices/feedSlice";

const Card = ({ cardData }) => {
  const dispatch = useDispatch();

  const sendConnection = async (status, id) => {
    try {
      await axios.post(
        `${BASE_URL}/request/send/${status}/${id}`,
        {},
        { withCredentials: true }
      );
      dispatch(removeFeedById(id)); // Remove card from store on action
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <motion.div
      className="card glass w-[25vw] min-h-[70vh] px-4 py-2 absolute cursor-pointer"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ opacity: 0, x: 200 }} // Move right on exit
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={(event, info) => {
        if (info.offset.x > 150) {
          sendConnection("interested", cardData._id); // Swiped Right
        } else if (info.offset.x < -150) {
          sendConnection("ignored", cardData._id); // Swiped Left
        }
      }}
    >
      <figure>
        <img
        className="object-cover bg-center rounded-lg  h-[40vh]"
          src={cardData.photoURL}
          alt="Shoes"
        />
      </figure>
      <div className="card-body p-2 flex flex-col items-center">
        <h2 className="card-title text-3xl">{`${cardData.firstName} ${cardData.lastName}`}</h2>
        {/* <h2 className="text-sm opacity-65">{`Fullstack Developer`}</h2> */}
        <div className="flex gap-2 text-sm opacity-60">
          <span>{cardData.age}</span>
          <span>{cardData.gender}</span>
        </div>
        <p className="text-center">{cardData.about}</p>
        <div className="flex items-center justify-center flex-wrap gap-2">
          {cardData.skills.slice(0, 4).map((s, index) => (
            <span
              key={index}
              className="badge badge-primary py-3 px-6 rounded-full"
            >
              {s.toUpperCase()}
            </span>
          ))}
        </div>
        
      </div>
    </motion.div>
  );
};

export default Card;
