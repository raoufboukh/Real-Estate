import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { useContext } from "react";
import { residContext } from "./Context";


function Residencies(){
    const residencies = useContext(residContext);
    var settings = {
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return(
        <section id="resid">
            <div className="container">
                <h2 className="text-orange-500 text-xl md:text-2xl font-bold">Best Choices</h2>
                <h3 className="text-blue-950 font-bold text-2xl md:text-4xl">Popular Residencies</h3>
                <Slider className="my-10" {...settings}>
                    {residencies.map(resid => {
                        return(
                            <div className="overflow-hidden hover:bg-indigo-100 hover:scale-[1.03] transition-all duration-300 p-4 cursor-pointer rounded-md my-5" key={resid.id}>
                                <div>
                                    <img className="" src={resid.image} alt="" />
                                </div>
                                <div className="py-2 px-3">
                                    <p className="text-2xl text-gray-400 my-1 font-bold"><span className="text-yellow-400">$</span>{resid.price}</p>
                                    <h3 className="font-bold text-blue-900 text-2xl my-1">{resid.name}</h3>
                                    <p className="text-xs text-gray-400">{resid.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </section>
    )
}

export default Residencies;