// For now, this is filler code for future implementation, depending on what I decide to do with the page.
import { createContext, useContext, useState } from "react";

const CharacterDataContext = createContext();

export function CharacterDataProvider({ children }) {
    const [characterData, setCharacterData] = useState([]);
    
    return (
        <CharacterDataContext.Provider value={{ characterData, setCharacterData }}>
        {children}
        </CharacterDataContext.Provider>
    );
}
    export function useCharacterData(){
        return useContext(CharacterDataContext);
    }
