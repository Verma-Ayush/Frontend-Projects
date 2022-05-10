import React, { useCallback } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = {
  cocktailsList: [],
  searchText: "a",
  loading: true,
  // cocktailId: null,
  // cocktailInfo: {},
};

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const AppProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const setLoading = (boolval) => {
    dispatch({ type: "SET_LOADING", payload: boolval });
  };

  const setCocktailsList = (list) => {
    dispatch({ type: "SET_COCKTAILS", payload: list });
  };

  const setSearchText = (text) => {
    dispatch({ type: "SET_SEARCH", payload: text });
  };

  // const setCocktailId = (id) => {
  //   dispatch({ type: "SET_ID", payload: id });
  // };

  // const setCocktailInfo = (data) => {
  //   dispatch({ type: "SET_INFO", payload: data });
  // };

  const fetchCocktails = useCallback(async () => {
    setLoading(true);
    try {
      const resp = await fetch(`${url}${state.searchText}`);
      const data = await resp.json();
      const { drinks } = data;
      if (drinks) {
        const newCocktailsList = drinks.map((item) => {
          //destructiing
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            item;
          //returning objecyt with simplified properties name
          return {
            id: idDrink,
            name: strDrink,
            img: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });
        //console.log(newCocktailsList);
        setCocktailsList(newCocktailsList);
      } else {
        setCocktailsList([]);
      }
    } catch (err) {
      console.log(`Error while fetching => ${err}`);
    }
    setLoading(false);
  }, [state.searchText]);

  React.useEffect(() => {
    fetchCocktails();
  }, [state.searchText, fetchCocktails]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        setSearchText,
        setLoading,
        // setCocktailId,
        // setCocktailInfo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return React.useContext(AppContext);
};
