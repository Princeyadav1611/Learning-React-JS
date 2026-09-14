const Form = () => {
  return (
    <div className="flex flex-col justify-around">
      <h1 className=" items-center gap-2 flex p-6 pt-2 m-2 font-extrabold text-6xl">
        Notes
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          id="Notebook--Streamline-Sharp-Remix"
          className="h-10 translate-y-2 translate-x-6"
        >
          <desc>Notebook Streamline Icon: https://streamlinehq.com</desc>
          <g id="notebook--pencil-content-write-notebook-book-edit-composition-creation">
            <path
              id="Union"
              fill="#000000"
              fill-rule="evenodd"
              d="M1.5479 0.24H0.2833v22.7614h9.3575v-2.5291H2.8124V2.769h13.6568v8.3533l2.5291 -2.5291V0.24H1.5479Zm4.0464 5.311h8.093v4.0465h-8.093V5.551Zm13.1511 6.1564 0.7153 0.7153 3.5406 3.5407 0.7153 0.7153 -0.7153 0.7153 -6.0697 6.0697 -0.2963 0.2963H11.664v-4.9713l0.2963 -0.2963 6.0697 -6.0697 0.7154 -0.7153Z"
              clip-rule="evenodd"
              stroke-width="1"
            ></path>
          </g>
        </svg>
      </h1>
      <form className="flex translate-x-4 flex-col bg-white/80 border border-stone-200 shadow-sm rounded-2xl p-4">
        <input
          type="text"
          placeholder="EnterTitle of Your Note"
          className="p-6 bg-stone-50 text-stone-900 placeholder-stone-400 border-stone-300 focus:border-stone-800 text-3xl font-bold m-1 rounded  border-2 "
        ></input>
        <textarea
          placeholder="EnterTitle of Your Note"
          className=" h-100 bg-stone-50 text-stone-800 placeholder-stone-400 border-stone-300 focus:border-stone-300 p-6 text-xl font-medium m-1 rounded border-2 "
        ></textarea>
        <button className="p-3 m-2 rounded bg-stone-900 hover:bg-black text-stone-100 cursor-pointer text-3xl font-extrabold ">
          Add Note
        </button>
      </form>
    </div>
  );
};
export default Form;
