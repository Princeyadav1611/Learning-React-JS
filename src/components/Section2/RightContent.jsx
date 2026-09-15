import Cards from "./Card.jsx";
const Notes = () => {
  return (
    <div className=" no-scrollbar grid grid-cols-1 min-[1168px]:grid-cols-2 min-[1490px]:grid-cols-3 min-[1810px]:grid-cols-4 flex-1 gap-5 bg-white/80 rounded-3xl p-2 overflow-y-auto flex-wrap">
      <Cards />
    </div>
  );
};
export default Notes;
