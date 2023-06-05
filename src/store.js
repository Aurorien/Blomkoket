import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

export const fetchFlowers = () => {
  return (dispatch) => {
    fetch("src/assets/flowers_and_recipes.json")
      .then((response) => response.json())
      .then((result) => {
        dispatch({ type: "FETCH_FLOWERS_SUCCESS", payload: result.flower });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_FLOWERS_ERROR", payload: error.message });
      });
  };
};

const initialState = {
  flowers: null,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_FLOWERS_SUCCESS":
      return { ...state, flowers: action.payload, error: null };
    case "FETCH_FLOWERS_ERROR":
      return { ...state, flowers: null, error: action.payload };
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
