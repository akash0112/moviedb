import { Get_Movies_API, Get_Movie_By_Id } from "../services/service";

export const getMovies = () => async (dispatch) => {
  const data = await Get_Movies_API();

  dispatch({
    type: "GET_MOVIES",
    payload: data,
  });
};

export const getMoviesById = (id) => async (dispatch) => {
  const data = await Get_Movie_By_Id(id);
  dispatch({
    type: "GET_MOVIE_BY_ID",
    payload: data,
  });
};

export const getWishhList = (wishlistmovie) => async (dispatch) => {
  dispatch({
    type: "WISHLIST",
    payload: wishlistmovie,
  });
};

export const removeWishhList = (id) => async (dispatch) => {
  dispatch({
    type: "REMOVE_WISHLIST",
    payload: id,
  });
};

export const login = (formData) => async (dispatch) => {
  dispatch({
    type: "LOGIN",
    payload: formData,
  });
};

export const logout = (loggedInValue) => async (dispatch) => {
  dispatch({
    type: "LOGOUT",
    payload: loggedInValue,
  });
};
