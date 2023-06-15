import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";

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

//////////////////////////////////////////////////////////
//Typescript-varianter av store.js som inte helt fungerar:

// import {
//   configureStore,
//   createAsyncThunk,
//   createSlice,
//   getDefaultMiddleware,
// } from "@reduxjs/toolkit";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { combineReducers } from "redux";

// interface FlowerRecipeState {
//   flowers: any | null;
//   recipes: any | null;
//   error: string | null;
// }

// const initialState: FlowerRecipeState = {
//   flowers: null,
//   recipes: null,
//   error: null,
// };

// export const fetchFlowers = createAsyncThunk(
//   "flowerRecipe/fetchFlowers",
//   async () => {
//     const response = await fetch("src/assets/flowers_and_recipes.json");
//     const result = await response.json();
//     return result;
//   }
// );

// const flowerRecipeSlice = createSlice({
//   name: "flowerRecipe",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(fetchFlowers.fulfilled, (state, action) => {
//       state.flowers = action.payload.flower;
//       state.recipes = action.payload.recipe;
//       state.error = null;
//     });
//     builder.addCase(fetchFlowers.rejected, (state, action) => {
//       state.flowers = null;
//       state.recipes = null;
//       state.error =
//         action.error.message ?? "Failed to fetch flowers and recipes";
//     });
//   },
// });

// console.log("reducer", flowerRecipeSlice.reducer);

// const rootReducer = combineReducers({
//   flowerRecipe: flowerRecipeSlice.reducer,
// });

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: [thunk],
//   enhancers: (defaultEnhancers) =>
//     process.env.NODE_ENV === "development"
//       ? [...defaultEnhancers, composeWithDevTools({})]
//       : defaultEnhancers,
// });

/////////////////////////////////////////////////////////////

// export default store;

// import {
//   configureStore,
//   createAsyncThunk,
//   createSlice,
// } from "@reduxjs/toolkit";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";

// interface FlowerRecipeState {
//   flowers: any | null;
//   recipes: any | null;
//   error: string | null;
// }

// const initialState: FlowerRecipeState = {
//   flowers: null,
//   recipes: null,
//   error: null,
// };

// export const fetchFlowers = createAsyncThunk(
//   "flowerRecipe/fetchFlowers",
//   async () => {
//     const response = await fetch("src/assets/flowers_and_recipes.json");
//     const result = await response.json();
//     return result;
//   }
// );

// const flowerRecipeSlice = createSlice({
//   name: "flowerRecipe",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(fetchFlowers.fulfilled, (state, action) => {
//       state.flowers = action.payload.flower;
//       state.recipes = action.payload.recipe;
//       state.error = null;
//     });
//     builder.addCase(fetchFlowers.rejected, (state, action) => {
//       state.flowers = null;
//       state.recipes = null;
//       state.error =
//         action.error.message ?? "Failed to fetch flowers and recipes";
//     });
//   },
// });

// const { reducer } = flowerRecipeSlice;

// const store = configureStore({
//   reducer,
//   middleware: [thunk],
//   enhancers: (defaultEnhancers) =>
//     process.env.NODE_ENV === "development"
//       ? composeWithDevTools(...defaultEnhancers)
//       : defaultEnhancers,
// });

// const store = configureStore({
//   reducer,
//   middleware: [thunk],
//   enhancers: (defaultEnhancers) =>
//     process.env.NODE_ENV === "development"
//       ? [...defaultEnhancers, composeWithDevTools({})]
//       : defaultEnhancers,
// });

// export default store;

//////////////////////////////////////////////////////////////

// import { configureStore, AnyAction, Dispatch } from "@reduxjs/toolkit";
// import thunk, { ThunkAction } from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";

// interface FlowerRecipeState {
//   flowers: any | null;
//   recipes: any | null;
//   error: string | null;
// }

// interface FetchFlowersSuccessAction extends AnyAction {
//   type: "FETCH_FLOWERS_SUCCESS";
//   payload: any;
// }

// interface FetchFlowersErrorAction extends AnyAction {
//   type: "FETCH_FLOWERS_ERROR";
//   payload: string;
// }

// interface FetchRecipesSuccessAction extends AnyAction {
//   type: "FETCH_RECIPES_SUCCESS";
//   payload: any;
// }

// interface FetchRecipesErrorAction extends AnyAction {
//   type: "FETCH_RECIPES_ERROR";
//   payload: string;
// }

// type ActionTypes =
//   | FetchFlowersSuccessAction
//   | FetchFlowersErrorAction
//   | FetchRecipesSuccessAction
//   | FetchRecipesErrorAction;

// export const fetchFlowers = (): ThunkAction<
//   void,
//   FlowerRecipeState,
//   unknown,
//   ActionTypes
// > => {
//   return (dispatch: Dispatch<ActionTypes>) => {
//     fetch("src/assets/flowers_and_recipes.json")
//       .then((response) => response.json())
//       .then((result) => {
//         dispatch({ type: "FETCH_FLOWERS_SUCCESS", payload: result.flower });
//         dispatch({ type: "FETCH_RECIPES_SUCCESS", payload: result.recipe });
//       })
//       .catch((error) => {
//         dispatch({ type: "FETCH_FLOWERS_ERROR", payload: error.message });
//         dispatch({ type: "FETCH_RECIPES_ERROR", payload: error.message });
//       });
//   };
// };

// const initialState: FlowerRecipeState = {
//   flowers: null,
//   recipes: null,
//   error: null,
// };

// const reducer = (
//   state: FlowerRecipeState = initialState,
//   action: ActionTypes
// ): FlowerRecipeState => {
//   switch (action.type) {
//     case "FETCH_FLOWERS_SUCCESS":
//       return { ...state, flowers: action.payload, error: null };
//     case "FETCH_FLOWERS_ERROR":
//       return { ...state, flowers: null, error: action.payload };
//     case "FETCH_RECIPES_SUCCESS":
//       return { ...state, recipes: action.payload, error: null };
//     case "FETCH_RECIPES_ERROR":
//       return { ...state, recipes: null, error: action.payload };
//     default:
//       return state;
//   }
// };

// const store = configureStore({
//   reducer,
//   middleware: [thunk],
//   enhancers: (defaultEnhancers) =>
//     process.env.NODE_ENV === "development"
//       ? [...defaultEnhancers, composeWithDevTools({})]
//       : defaultEnhancers,
// });

// const store = configureStore({
//   reducer,
//   middleware: [thunk],
//   enhancers:
//     process.env.NODE_ENV === "development" ? [composeWithDevTools()] : [],
// });

// export default store;

//////////////////////////////////////////////////

// import { createStore } from "redux";

// export default createStore(() => {
//   1;
// }, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
