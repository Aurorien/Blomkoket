import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

export const fetchFlowers = () => {
  return (dispatch) => {
    fetch("src/assets/flowers_and_recipes.json")
      .then((response) => response.json())
      .then((result) => {
        dispatch({ type: "FETCH_FLOWERS_SUCCESS", payload: result.flower });
        dispatch({ type: "FETCH_RECIPES_SUCCESS", payload: result.recipe });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_FLOWERS_ERROR", payload: error.message });
        dispatch({ type: "FETCH_RECIPES_ERROR", payload: error.message });
      });
  };
};

const initialState = {
  flowers: null,
  recipes: null,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_FLOWERS_SUCCESS":
      return { ...state, flowers: action.payload, error: null };
    case "FETCH_FLOWERS_ERROR":
      return { ...state, flowers: null, error: action.payload };
    case "FETCH_RECIPES_SUCCESS":
      return { ...state, recipes: action.payload, error: null };
    case "FETCH_RECIPES_ERROR":
      return { ...state, recipes: null, error: action.payload };
    default:
      return state;
  }
};

const store = configureStore(
  {
    reducer,
    middleware: [thunk],
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

// import { createStore } from "redux";

// export default createStore(() => {
//   1;
// }, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
