const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: action.payload };

    case "SET_COCKTAILS":
      return { ...state, cocktailsList: action.payload };

    case "SET_SEARCH":
      return { ...state, searchText: action.payload };

    default:
      return { state };
  }
};

export default reducer;
