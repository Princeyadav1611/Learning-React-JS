import LeftContent from "./LeftContent";
import RightContent from "./RightContent";
const PageContent1 = ({cards}) => {
  return(
    <div className="py-10 gap-10 flex items-center justify-between h-[90vh] px-18">
      <LeftContent />
      <RightContent cards={cards}/>
    </div>
  )
};
export default PageContent1;
