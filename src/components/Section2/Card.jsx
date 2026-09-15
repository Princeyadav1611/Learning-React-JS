const Cards = (props) => {
   return(
     <div className=" shrink-0 h-80 p-6 min-w-75 flex flex-col justify-between rounded-2xl overflow-hidden bg-black border border-stone-200/80 shadow-md">
      <div>
        <h1 className=" font-bold text-2xl mb-3 underline mt-4 line-clamp-1 text-slate-100 ">{props.title}</h1>
        <h3 className=" font-semibold tracking-tight line-clamp-6 text-slate-400">
          {props.desc}
        </h3>
      </div>
      <button className="w-full rounded flex justify-center items-center gap-1 p-1 cursor-pointer active:scale-95 font-bold text-rose-400 hover:text-rose-300 hover:bg-rose-950/40">
        Delete{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 fill-current "
        >
          <path d="M7 6V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7ZM13.4142 13.9997L15.182 12.232L13.7678 10.8178L12 12.5855L10.2322 10.8178L8.81802 12.232L10.5858 13.9997L8.81802 15.7675L10.2322 17.1817L12 15.4139L13.7678 17.1817L15.182 15.7675L13.4142 13.9997ZM9 4V6H15V4H9Z"></path>
        </svg>
      </button>
    </div>
   );
}
export default Cards;