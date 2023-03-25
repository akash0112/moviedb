const initialState = {
  single_movie_details: {},
  movie: [],
  wishlistmovies: [],
};
const movieReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_MOVIES":
      return { ...state, movies: [...payload] };
    case "GET_MOVIE_BY_ID":
      return { ...state, single_movie_details: { ...payload } };
    case "WISHLIST":
      return {
        ...state,
        wishlistmovies: [...state.wishlistmovies, ...payload],
      };
    case "REMOVE_WISHLIST":
      const newwishlist = state.movie.filter((item) => item.title === payload);
      console.log(newwishlist);
      return {
        ...state,
        wishlistmovies: state.wishlistmovies.filter(
          (item) => item.id !== payload
        ),
      };
    default:
      return state;
  }
};

export default movieReducer;
