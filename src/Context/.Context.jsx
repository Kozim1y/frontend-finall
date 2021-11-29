import { createContext, useState } from "react";
const Context = createContext();
function Provider( { children } ){
    const [movie, setMovie] = useState([])
    return(
        <>
            <Context.Provider value={{movie, setMovie}}>{children}</Context.Provider>
        </>
    )
}
export {
    Provider,
    Context
}