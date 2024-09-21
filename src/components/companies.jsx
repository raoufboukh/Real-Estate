
function Companies(){
    return (
        <section className="py-5">
            <div className="container grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div data-aos="fade-down" className=" h-24">
                    <img className="w-[60%] md:w-[75%] mx-auto h-full" src="./images/prologis.png" alt="" />
                </div>
                <div data-aos="fade-down" data-aos-delay='100' className=" h-24">
                    <img className="w-[60%] md:w-[75%] mx-auto h-[90%]" src="./images/tower.png" alt="" />
                </div>
                <div data-aos="fade-down" data-aos-delay='200' className=" h-24">
                    <img className="w-[60%] md:w-[75%] mx-auto h-full" src="./images/equinix.png" alt="" />
                </div>
                <div data-aos="fade-down" data-aos-delay='300' className=" h-24">
                    <img className="w-[60%] md:w-[75%] mx-auto h-[90%]" src="./images/realty.png" alt="" />
                </div>
            </div>
        </section>
    )
}

export default Companies;