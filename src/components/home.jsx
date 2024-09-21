import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import CountUp from 'react-countup';
function Home(){
    return(
        <section className="bg-gray-950 relative pt-10 pb-8">
            <div className="container flex gap-3  justify-center xl:gap-0 xl:justify-between flex-wrap">
                <div data-aos="fade-right" className="basis-full md:basis-[75%] lg:basis-[60%] xl:basis-[43%] relative py-5 lg:text-left text-center">
                    <h1 className="text-white font-bold text-[2.6rem] md:text-[3rem] lg:text-[3.8rem] leading-[4rem]"><span className=" relative z-[1] before:absolute before:size-14 before:rounded-full before:bg-gradient-to-r before:from-orange-400 before:to-orange-300 before:-z-10 before:-right-4">Discover</span><br/>  Most Suitable <br/> Property</h1>
                    <p className="text-gray-400 my-10">Find a variety of properties that suit you very easilty Forget all difficulties in finding a residence for you</p>
                    <form className="bg-white py-2 mx-auto md:mx-0 px-3 w-fit border-2 rounded-md border-gray-400" onSubmit={e => e.preventDefault()}>
                        <FaMapMarkerAlt className="text-blue-600 text-xl inline -translate-y-1"/>
                        <input type="text" className="outline-none py-2 px-3 mx-2" />
                        <input type="submit" value="Search" className="bg-blue-600 cursor-pointer text-white mx-auto block mt-1 md:mt-0 md:inline md:mx-0 w-[90%] md:w-fit py-2 px-3 rounded-md transition-all duration-300 hover:scale-105"/>
                    </form>
                    <div className="flex text-white mt-11">
                        <div className="basis-1/3">
                            <h4 className="text-xl md:text-3xl"><CountUp start={8800} end={9000} duration={4}/> <FaPlus className="inline text-orange-400 -translate-y-1"/> </h4>
                            <p className="text-gray-400 text-xs md:text-sm">Premium Product</p>
                        </div>
                        <div className="basis-1/3">
                            <h4 className="text-xl md:text-3xl"><CountUp start={1800} end={2000} duration={4}/> <FaPlus className="inline text-orange-400 -translate-y-1"/> </h4>
                            <p className="text-gray-400 text-xs md:text-sm">Happy Customer</p>
                        </div>
                        <div className="basis-1/3">
                            <h4 className="text-xl md:text-3xl"><CountUp end={28} duration={4}/> <FaPlus className="inline text-orange-400 -translate-y-1"/> </h4>
                            <p className="text-gray-400 text-xs md:text-sm">Awards Winning</p>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-left" className="basis-full md:basis-[75%] lg:basis-[60%] lg:text-left text-center xl:basis-[43%]">
                    <div className="w-full border-4 border-gray-700 rounded-t-full overflow-hidden">
                        <img src="./images/hero-image.png"  alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;