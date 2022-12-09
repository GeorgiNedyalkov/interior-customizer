import { useContext, useReducer, createContext } from "react";
import { terraceSlides } from "../data/featuresList";
import { standardDesign } from "../data/data";

const TerraceContext = createContext(terraceSlides);

export default TerraceContext;

const startState = {
  design: standardDesign,
  isSelected: false,
};
// ef297b2084c679afc9e4195c0158360fde6f3684

const reducerFunction = (state, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "selectDesign":
      return {
        ...state,
        design: action.payload,
        isSelected: !action.isSelected,
      };
  }
};

export const useDesignSource = () => {
  const [{ design, isSelected }, dispatch] = useReducer(
    reducerFunction,
    startState
  );

  const setIsSelected = (design) => {
    dispatch({
      type: "selectDesgin",
      payload: design,
      isSelected: !isSelected,
    });
  };

  return { design, isSelected, setIsSelected };
};

const DesignContext = createContext({});

export function useDesign() {
  return useContext(DesignContext);
}

export function DesignProvider({ children }) {
  return (
    <DesignContext.Provider value={useDesignSource()}>
      {children}
    </DesignContext.Provider>
  );
}
