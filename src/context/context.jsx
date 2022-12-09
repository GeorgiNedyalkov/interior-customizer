import { useContext, useReducer, createContext } from "react";
import { terraceSlides } from "../data/featuresList";
import { standardDesign, bigDesign, kattyDesign } from "../data/data";
import { useEffect } from "react";

const TerraceContext = createContext(terraceSlides);

export default TerraceContext;

export const DesignContext = createContext([]);

// create a reducer function

const reducer = (state, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "SET_DESIGN":
      return {
        ...state,
      };
  }
};

const defaultState = {
  contextDesign: standardDesign,
  isSelected: false,
  selectedDesign: null,
};

export function DesignContextSource() {
  const [{ contextDesign, isSelected, selectedDesign }, dispatch] = useReducer(
    reducer,
    defaultState
  );

  useEffect(() => {
    dispatch({
      type: "SET_DESIGN",
      payload: contextDesign,
    });
  }, []);

  return { contextDesign, isSelected, selectedDesign };
}

export function DesignProvider({ children }) {
  return (
    <DesignContext.Provider value={DesignContextSource()}>
      {children}
    </DesignContext.Provider>
  );
}

export const useDesign = () => useContext(DesignContext);
