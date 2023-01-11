import { createContext, useState } from "react";

const SideBarContext = createContext({} //valor inicial
);

export function SideBarContextProvider({children}){
    const [sidebar, setSidebar] = useState(false);
    return <SideBarContext.Provider value={{sidebar, setSidebar}}>
        {children}
    </SideBarContext.Provider>
}
export default SideBarContext;