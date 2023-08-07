import { useEffect, useContext, useReducer, createContext } from "react";
import { standardDesign } from "../data/data";

const defaultState = {
    contextDesign: standardDesign,
    isSelected: false,
};

export const DesignContext = createContext([]);

const designReducer = (state, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case "SET_DESIGN":
            return {
                ...state,
            };
        case "SELECT_DESIGN":
            return {
                ...state,
                contextDesign: action.payload,
            };
    }
};

export function DesignContextSource() {
    const [{ contextDesign, isSelected }, dispatch] = useReducer(
        designReducer,
        defaultState
    );

    useEffect(() => {
        dispatch({
            type: "SET_DESIGN",
            payload: contextDesign,
        });
    }, []);

    const selectDesign = (design) => {
        dispatch({
            type: "SELECT_DESIGN",
            payload: design,
            isSelected: design.isSelected,
        });
    };

    return { contextDesign, isSelected, selectDesign };
}

export function DesignProvider({ children }) {
    return (
        <DesignContext.Provider value={DesignContextSource()}>
            {children}
        </DesignContext.Provider>
    );
}

export const useDesign = () => useContext(DesignContext);
