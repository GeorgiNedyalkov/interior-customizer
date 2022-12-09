import { useContext, useReducer, createContext } from "react";
import { terraceSlides } from "../data/featuresList";
import { standardDesign } from "../data/data";
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
    case "SELECT_DESIGN":
      return {
        ...state,
        contextDesign: action.payload,
        isSelected: !action.isSelected,
      };
  }
};

const defaultState = {
  contextDesign: standardDesign,
  isSelected: true,
};

export function DesignContextSource() {
  const [{ contextDesign, isSelected }, dispatch] = useReducer(
    reducer,
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
      isSelected: !design.isSelected,
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
