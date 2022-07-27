import { createContext, useReducer } from "react";


const theme ={
  light:{
    foreground:"#000000",
    background:"#215BCF"
  },
  dark:{
    foreground:"#D32626",
    background:"#AD5050"
  }
}

export const themeContext = createContext(theme);

const initialState = { darkMode: false };

const themeReducer = (state, action) => {
  switch (action.type) {
    case "toggle":
        return { darkMode: !state.darkMode };
      default:
        return state;
  }
};

export const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  return (
    <themeContext.Provider value={{state, dispatch}}>{props.children}</themeContext.Provider>
  );
};
