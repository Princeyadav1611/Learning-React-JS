const LeftContent = () => {
  return (
    <div className="  flex justify-between flex-col px-8 py-6 h-full min-[1000px]:w-1/4">
      <div>
        <h3 className=" mb-6 text-4xl leading-13 font-extrabold">
          Prospective
          <br />
          <div className="mt-2 w-fit flex m-0 bg-rose-400 text-white px-5 text-center rounded-2xl">customer</div>
          segmentation
        </h3>
        <span >
            Empowering modern enterprises with predictive behavioral analytics. Uncover high-value cohorts, optimize acquisition channels, and tailor real-time financial products to drive sustainable lifetime value.
        </span>
      </div>
      <div>
        <svg height={100} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path></svg>
      </div>
    </div>
  );
};
export default LeftContent;
