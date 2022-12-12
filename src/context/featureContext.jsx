import { useEffect, useContext, useReducer, createContext } from "react";
import { outdoorLivingFeatures } from "../data/featuresList";

const initialState = {
  featuresContext: outdoorLivingFeatures[0].slides,
  isSelected: false,
};

export const FeatureContext = createContext([]);

const featureReducer = (state, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "SET_FEATURE":
      return {
        ...state,
      };
    case "SELECT_FEATURE":
      return {
        ...state,
        featuresContext: action.payload,
      };
  }
};

export function FeaturesContextSource() {
  const [{ featuresContext, isSelected }, dispatch] = useReducer(
    featureReducer,
    initialState
  );

  useEffect(() => {
    dispatch({
      type: "SET_FEATURE",
      payload: featuresContext,
    });
  }, []);

  const selectFeature = (feature) => {
    dispatch({
      type: "SELECT_FEATURE",
      payload: feature,
      isSelected: feature.isSelected,
    });
  };

  return { featuresContext, isSelected, selectFeature };
}

export function FeatureProvider({ children }) {
  return (
    <FeatureContext.Provider value={FeaturesContextSource()}>
      {children}
    </FeatureContext.Provider>
  );
}

export const useFeature = () => useContext(FeatureContext);
