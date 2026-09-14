import { useState } from "react";

const RightCard = (props) => {
  const [isLiked, setIsLiked] = useState(false);

  const Like = () => {
    setIsLiked((prev) => !prev);
    console.log(setIsLiked);
  };
  return (
    <div className=" group cursor-pointer hover:opacity-80 fle shrink-0  h-full w-80 rounded-4xl overflow-hidden relative">
      <img className=" h-full object-cover " src={props.img} />
      <div className=" flex flex-col justify-between absolute p-10 py-20 h-full w-full top-0 left-0">
        <div className="flex justify-between items-center">
          <h6 className=" flex h-10 w-10 bg-white rounded-full text-black font-bold text-2xl justify-center items-center">
            {props.number}
          </h6>
          <button onClick={Like} className=" text-2xl cursor-pointer transition-transform duration-200 active:scale-90 hover:scale-110">{isLiked?(<span>❤️</span>):(<span className="opacity-70">🤍</span>)}</button>
        </div>
        <div>
          <p className=" mb-15 text-2xl text-white group-hover:cursor-text selection:bg-emerald-400 selection:text-black">
            {props.desc}
          </p>
          <div className="flex justify-between">
            <button className="bg-blue-200 px-5 py-1 rounded-2xl">
              {props.tag}
            </button>
            <button className="bg-blue-200 px-5 py-1 rounded-2xl group-hover:cursor-pointer">
              <svg
                height={20}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RightCard;
