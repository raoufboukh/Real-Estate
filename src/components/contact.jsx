import { AiFillMessage } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMessage } from "react-icons/fa6";
const contacts =[
    {
        id:1,
        title:'Call',
        logo: <BsFillTelephoneFill/>,
        btn:'Call Now'
    },
    {
        id:2,
        title:'Chat',
        logo: <AiFillMessage/>,
        btn:'Chat Now'
    },
    {
        id:3,
        title:'Video Call',
        logo: <AiFillMessage/>,
        btn:'Video Call Now'
    },
    {
        id:4,
        title:'Message',
        logo: <FaMessage/>,
        btn:'Message Now'
    },
]
export default function Contact(){
    return(
        <section id="contact">
            <div className="container py-2 my-16 flex gap-3 justify-center xl:gap-0 xl:justify-between flex-wrap">
                <div className="basis-full md:basis-[75%] lg:basis-[60%] lg:text-left text-center xl:basis-[46%] py-4">
                    <h3 className="text-orange-400 font-bold text-2xl py-1">Our Contact Us</h3>
                    <h4 className="text-blue-900 font-bold text-4xl pt-1 pb-2">Easy to contact us</h4>
                    <p className="text-gray-400">We always ready to help by providijng the best services for you. We beleive a good blace to live can make your life better</p>
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 my-10">
                        {
                            contacts.map(contact => {
                                return(
                                    <div key={contact.id} className="border border-gray-200 p-3 transition-all duration-500 hover:scale-110 hover:shadow-xl hover:shadow-blue-100">
                                        <div className="flex gap-4">
                                            <div className="px-4 pt-3 bg-blue-50 text-xl text-blue-600 rounded-md">
                                                {contact.logo}
                                            </div>
                                            <div>
                                                <h4 className="font-bold">{contact.title}</h4>
                                                <p className="text-gray-400 text-sm">021 123 145 14</p>
                                            </div>
                                        </div>
                                        <button className="bg-blue-50 text-blue-600 mt-3 w-full block cursor-pointer hover:bg-blue-700 hover:text-white py-2 px-3 rounded-md transition-all duration-500 hover:scale-90 font-bold">{contact.btn}</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="basis-full md:basis-[75%] lg:basis-[60%] lg:text-left text-center xl:basis-[43%]">
                    <div className="w-[88%] mx-auto rounded-t-full overflow-hidden">
                        <img src="./images/value.png"  alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}