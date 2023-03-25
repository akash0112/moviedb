import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMoviesById, getWishhList } from "../store/actions.js/actions";

const DetailsPage = () => {
  const dispatch = useDispatch();
  const { backdrop_path, poster_path, title, vote_average, release_date } =
    useSelector((state) => state?.movie?.single_movie_details);
  const wishlistid = useSelector(
    (state) => state?.movie?.single_movie_details.id
  );
  const { movies } = useSelector((state) => state?.movie);
  const { id } = useParams();
  useEffect(() => {
    if (id !== undefined) {
      dispatch(getMoviesById(id));
    }
  }, [id,dispatch]);
  const handleWishList = (id) => {
    const wishlist = movies.filter((item) => item.id === id);
    dispatch(getWishhList(wishlist));
  };
  return (
    <>
      <div
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w780/${backdrop_path})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          padding: "1rem 2rem",
          opacity: "0.8",
          minHeight: "90vh",
          height: "auto",
        }}
      >
        <button className="button" onClick={() => handleWishList(wishlistid)}>
          Add Wishlist
        </button>
        <div className="detailswrapper">
          <div className="detailscardwrapper">
            <img
              alt="img"
              className="detailscard"
              src={` https://image.tmdb.org/t/p/w780/${poster_path}`}
            />
            <div>
              <p className="title">{title}</p>
              <p className="subtitle">
                Avg. vote :- <span>{vote_average}</span>
              </p>
              <p className="subtitle">
                Release Date :- <span>{release_date}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsPage;
