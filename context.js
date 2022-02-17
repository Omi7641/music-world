import { createContext, useState } from "react";
import Instrument from "./pages/instrument";

export const UserContext = createContext();
const Context = () => {

     const [instrument,setInstrument]=useState({});

    return ( 
        <UserContext.Provider value={[instrument,setInstrument]}>

          <Instrument />
            
        </UserContext.Provider>
     );
}
 
export default Context;