import LeftContent from "./LeftContent";
import RightContent from "./RightContent";
const PageContent1 = ({cards}) => {
  return(
    <div className="py-10 gap-10 min-[450px]:flex items-center justify-between min-[450px]:h-[90vh] min-[450px]:px-18 max-[450px]:px-6">
      <LeftContent />
      <RightContent cards={cards}/>
    </div>
  )
};
export default PageContent1;