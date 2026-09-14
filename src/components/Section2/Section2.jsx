import Form from "./LeftContent.jsx";
import Notes from "./RightContent.jsx";
const Section2 = () => {
  return (
  <div className="h-screen w-full bg-stone-100 p-2 gap-5 flex flex-col      min-[850px]:flex-row">
    <Form />
    <Notes />
  </div>)
};
export default Section2;
