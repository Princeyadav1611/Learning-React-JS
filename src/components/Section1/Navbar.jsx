const Navbar = () => {
    return(
        <div className="flex justify-between items-center p-6 max-[450px]:p-1 max-[450px]:justify-between">
            <h3 className="bg-black text-white py-2 px-4 rounded-full max-[450px]:p-1 max-[850px]:w-fit">Target Audience</h3>
            <span className=" uppercase bg-gray-400 min-[450px]:px-4 px-1 min-[450px]:py-2 rounded-full min-[450px]:tracking-widest text-sm">digital banking platform</span>
        </div>
    )
}
export default Navbar;