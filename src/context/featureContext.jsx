import { useEffect, useContext, useReducer, createContext } from "react";
import { outdoorLivingFeatures } from "../data/featuresList";

const initialState = {
    featureSlides: outdoorLivingFeatures[0].slides,
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
                featureSlides: action.payload,
            };
    }
};

export function FeaturesContextSource() {
    const [{ featureSlides, isSelected }, dispatch] = useReducer(
        featureReducer,
        initialState
    );

    useEffect(() => {
        dispatch({
            type: "SET_FEATURE",
            payload: featureSlides,
        });
    }, [featureSlides]);

    const selectFeature = (feature, isSelected) => {
        dispatch({
            type: "SELECT_FEATURE",
            payload: feature,
            isSelected: isSelected,
        });
    };

    return { featureSlides, isSelected, selectFeature };
}

export function FeatureProvider({ children }) {
    return (
        <FeatureContext.Provider value={FeaturesContextSource()}>
            {children}
        </FeatureContext.Provider>
    );
}

export const useFeature = () => useContext(FeatureContext);
