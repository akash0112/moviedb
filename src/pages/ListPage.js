import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../store/actions.js/actions";
import image from "../assets/images/movie.jpg";
import { useNavigate } from "react-router-dom";
const ListPage = () => {
  const navigate = useNavigate();
  const { movies } = useSelector((state) => state?.movie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  const handleClick = (id) => {
    navigate(`/details/${id}`);
  };
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          padding: "1rem 2rem",
          opacity: "0.8",
          minHeight: "92vh",
          height: "auto",
        }}
      >
        {movies?.length > 0 ? (
          movies?.map((item, index) => (
            <div key={index}>
              <div
                className="cardwrapper"
                onClick={() => handleClick(item?.id)}
              >
                <img
                  alt="img"
                  className="card"
                  src={` https://image.tmdb.org/t/p/w780/${item?.poster_path}`}
                />
                <div>
                  <p className="title">{item?.title}</p>
                  <p className="subtitle">
                    Avg. vote :- <span>{item?.vote_average}</span>
                  </p>
                  <p className="subtitle">
                    Release Date :- <span>{item?.release_date}</span>
                  </p>
                </div>
              </div>
              <hr className="rule" />
            </div>
          ))
        ) : (
          <div className="nodata">There Is No Data To Show</div>
        )}
      </div>
    </>
  );
};

export default ListPage;
