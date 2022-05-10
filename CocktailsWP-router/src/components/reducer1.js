const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: action.payload };

    case "SET_ID":
      return { ...state, cocktailId: action.payload };

    case "SET_INFO":
      return { ...state, cocktailInfo: action.payload };

    default:
      return { state };
  }
};

export default reducer;
