import { motion } from "framer-motion";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeFeedById } from "../store/slices/feedSlice";

const Card = ({ cardData, zIndex }) => {
  console.log(zIndex);
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
      className=" card  border-2 border-black  absolute cursor-pointer bg-[#17181d] h-[82vh] xl:h-[85vh] 2xl:h-[65vh]  sm:w-[45vw] lg:w-[35vw] xl:min-w-[22vw] 2xl:w-[20vw] mx-2 mb-6 py-4 px-2 rounded-lg"
      initial={{ scale: 0.9, opacity: 0, zIndex: zIndex }}
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
          className="object-cover bg-center border-4 border-white  rounded-full  h-[180px] w-[180px]"
          src={cardData?.photoURL}
          alt={cardData?.firstName}
        />
      </figure>
      <div className="card-body bg-bg-[#111215] p-2 flex flex-col items-center">
        <h2 className="card-title md:text-3xl  text-white font-semibold">{`${cardData.firstName} ${cardData.lastName}`}</h2>
        {/* <h2 className="text-sm opacity-65">{`Fullstack Developer`}</h2> */}
        <div className="flex gap-2 text-sm opacity-60">
          <span className="text-white font-medium text-lg">
            {cardData.age} {"|"}
          </span>
          <span className="text-white font-medium text-lg">
            {cardData?.gender?.toUpperCase()}
          </span>
        </div>
        <p className="text-center font-semibold text-white leading-relaxed">{cardData.about}</p>
        <div className="flex items-start justify-center flex-wrap gap-2 mt-4 ">
          {cardData.skills.slice(0, 5).map((s, index) => (
            <span
              key={index}
              className="badge badge-primary bg-black text-white py-4 px-4 font-light rounded-full"
            >
              {s.toUpperCase()}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <button
            onClick={() => sendConnection("ignored", cardData._id)}
            className="btn btn-active rounded-full bg-black  px-3 lg:px-8 border-secondary text-[#FDFDFE] font-semibold"
          >
            <i className="ri-skip-right-line text-red-600"></i>

            Next Dev
          </button>

          <button
            onClick={() => sendConnection("interested", cardData._id)}
            className="btn btn-active rounded-full bg-black  px-3 lg:px-8 border-secondary text-[#FDFDFE] font-semibold text-center"
          >
            <i className="ri-heart-3-line text-green-600"></i>Connect
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
