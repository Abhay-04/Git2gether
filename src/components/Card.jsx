import { motion } from "framer-motion";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeFeedById } from "../store/slices/feedSlice";

const Card = ({ cardData , zIndex }) => {
  console.log(zIndex)
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
      className=" card glass xl:w-[20vw] w-[80%] md:w-[60vw] min-h-[70vh] max-h-[70vh] px-4 py-2 absolute cursor-pointer "
      initial={{ scale: 0.9, opacity: 0 , zIndex: zIndex }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ opacity: 0 }} // Move right on exit
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
          src={cardData?.photoURL}
          alt="Shoes"
        />
      </figure>
      <div className="card-body p-2 flex flex-col items-center">
        <h2 className="card-title md:text-3xl text-secondary">{`${cardData.firstName} ${cardData.lastName}`}</h2>
        {/* <h2 className="text-sm opacity-65">{`Fullstack Developer`}</h2> */}
        <div className="flex gap-2 text-sm opacity-60">
          <span className="text-secondary text-lg">{cardData.age}</span>
          <span className="text-secondary text-lg">{cardData.gender}</span>
        </div>
        <p className="text-center">{cardData.about}</p>
        <div className="flex items-center justify-center flex-wrap gap-2 ">
          {cardData.skills.slice(0, 5).map((s, index) => (
            <span
              key={index}
              className="badge badge-neutral py-3 md:px-6 rounded-full"
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
