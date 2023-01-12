import { createContext, useState } from "react";

const SearchContext = createContext({} //valor inicial
);

export function SearchContextProvider({children}){
    const [search, setSearch] = useState("");
    return <SearchContext.Provider value={{search, setSearch}}>
        {children}
    </SearchContext.Provider>
}
export default SearchContext;