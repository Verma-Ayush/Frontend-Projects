import React from "react";
import { useParams } from "react-router";
import Loading from "./Loading";
import reducer1 from "./reducer1";

export default function CocktailPage() {
  const { id } = useParams(null);

  const initialstate = {
    cocktailId: null,
    cocktailInfo: {},
    loading: true,
  };
  const [state, dispatch] = React.useReducer(reducer1, initialstate);

  React.useEffect(() => {
    //we don't want to run useeffect onMount.
    if (id === null) return;
    dispatch({ type: "SET_ID", payload: id });
  }, [id]);

  const setCocktailInfo = (data) => {
    dispatch({ type: "SET_INFO", payload: data });
  };

  const setLoading = (boolval) => {
    dispatch({ type: "SET_LOADING", payload: boolval });
  };

  const url_ = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
  React.useEffect(() => {
    //we don't want to run useeffect onMount.
    if (state.cocktailId === null) return;
    setLoading(true);
    //we can avoid the usecallback by declaring function in useEffect itself.
    const getCocktail = async () => {
      try {
        const resp = await fetch(`${url_}${state.cocktailId}`);
        const data = await resp.json();
        setCocktailInfo(...data.drinks);
        setLoading(false);
      } catch (err) {
        console.log(`Error while fetching : ${err}`);
      }
    };
    getCocktail();
  }, [state.cocktailId]);

  if (state.loading === true) {
    return <Loading />;
  }

  return (
    <div className="CocktailPage">
      <img src={state.cocktailInfo.strDrinkThumb} alt="Loading..." />
      <div className="cocktail-info">
        <div>
          <span>Name </span>
          <span>{state.cocktailInfo.strDrink}</span>
        </div>
        <div>
          <span>Category </span>
          <span>{state.cocktailInfo.strAlcoholic}</span>
        </div>
        <div>
          <span>Glass </span>
          <span>{state.cocktailInfo.strGlass}</span>
        </div>
        <div>
          <span>Ingredients </span>
          <span>
            {state.cocktailInfo.strIngredient1},
            {state.cocktailInfo.strIngredient2},
            {state.cocktailInfo.strIngredient3}
          </span>
        </div>
        <div>
          <span>Instructions </span>
          <span>{state.cocktailInfo.strInstructions}</span>
        </div>
      </div>
    </div>
  );
}

/*
So many imp points I learned :

1>Note the function written above ,getCocktails() is async function , thus it will run in background.
Flow of program -> when initially page renders , the loading is set to true , thus only loading would be shown. 
Now since the useeffect runs after the DOM is set , it will run (onmount) , but since initially_ cocktailId is null we avoided the useEffect , coz
else the url would have been wrong and error would be thrown.
Now if we click on details button of cocktailCard , the id would change , thus the first useEffect will run after the DOM is set and thus as dispatch runs, the rerendering will occur
and thus dispatch function on run changes the cocktailId of state , on rerendering it will be noticed by second useEffect after the DOM is set as cocktailId get changed.
Now as second useeffect runs , loading will set to true (in case of first run , loading was already true) , and then getCocktails will run , as getCocktail is async
function it will run in background and our js program will move forward , but since loading is true , only loading will be shown, when fetching is done , the cocktaillist is updated and after than loading is set to false.
And we are able to see the DOM as desired.

Note how we wrote :
 React.useEffect(() => {
    if (id === null) return;
    dispatch({ type: "SET_ID", payload: id });
  }, [id]);

  instead of just _  dispatch({ type: "SET_ID", payload: id });
  Coz any function which rerenders the app ,MUST NOT BE WRITTEN DIRECTLY.
  If we would have written this, then onmount , dispatch will run ,and rerenders the app , thus runs agains and rerenders and so on...infinite loop.


Note : When we use useEffect : 
1>If we are using a non-state function like getCocktail in above, useEffect would have given us the warning of missing dependency if getCocktail would have
declared outside and called inside.To avoid that we can declare the function in useEffect itself or use useCallback with declaration outside.

2>If we are using a state function , it should be declared in the same page , like setLoading and setCocktailInfo are state function are declared above thus we can call
them directly in the useEffect.

Note: Even if we write all the functionalities in context.js , we are accesing the id from CocktailPage's useParam() , thus we need to setCocktailId from this page , and to run 
setCocktailId we need useeffect else , there would be infinite loop with dependency of [id] , and since we are using a state function inside the useEffect it should be declared in same
page else it will give warnings.

*/
