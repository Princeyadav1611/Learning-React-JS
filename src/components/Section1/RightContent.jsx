import RightCard from "./RightCard.jsx";
const RightContent = ({ cards }) => {
  return (
    <div className="h-full w-3/4 p-6 flex overflow-x-auto no-scrollbar flex-nowrap gap-10">
      {cards.map((item, idx) => {
        return (
          <RightCard
            key={idx}
            number={item.number}
            tag={item.tag}
            desc={item.desc}
            img={item.img}
          />
        );
      })}
    </div>
  );
};
export default RightContent;
