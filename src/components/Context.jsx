import { createContext } from "react";

export const residContext = createContext();
function Context({children}){
    const residencies = [
        {
            id: 1,
            name: "Aliva Priva Jardin",
            image: "./images/r1.png",
            description: "Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta",
            price: "47,043",
        },
        {
            id: 2,
            name: "Assati Garden City",
            image: "./images/r2.png",
            description: "Pahlawan Street XVII NO.215, Cinangka, Sawangan, Depok, Jawa Barat",
            price: "66,353",
        },
        {
            id: 3,
            name: "Citralan Puri Serang",
            image: "./images/r3.png",
            description: "Ruko Puri Indah Residence Block A7, Lingkar Street, Ciracas, Serang, Banten",
            price: "35,853",
        },
        {
            id: 4,
            name: "Aliva Priva Jardin",
            image: "./images/r1.png",
            description: "Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta",
            price: "47,043",
        },
        {
            id: 5,
            name: "Assati Garden City",
            image: "./images/r2.png",
            description: "Pahlawan Street XVII NO.215, Cinangka, Sawangan, Depok, Jawa Barat",
            price: "66,353",
        },
        {
            id: 6,
            name: "Citralan Puri Serang",
            image: "./images/r3.png",
            description: "Ruko Puri Indah Residence Block A7, Lingkar Street, Ciracas, Serang, Banten",
            price: "35,853",
        }
    ]
    return(
        <residContext.Provider value={residencies}>
            {children}
        </residContext.Provider>
    )
}

export default Context;