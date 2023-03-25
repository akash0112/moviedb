import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import image from "../assets/images/movie.jpg";
import { removeWishhList } from '../store/actions.js/actions';

const WishList = () => {
  const dispatch = useDispatch()
  const wishlist = useSelector((state)=>state?.movie?.wishlistmovies)

  const handleDelete=(id)=>{
    dispatch(removeWishhList(id))
  }
  return (
    <>
      <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        padding: "1rem 2rem",
        opacity: "0.8",
        minHeight:"92vh",
        height:"auto"
      }}
    >
      {wishlist?.length > 0 ? wishlist?.map((item, index) => (
        <div key={index}>
              {wishlist?.length && item.title ? <button className='button' onClick={()=>handleDelete(item.id)}>Delete From Wishlist</button>:''}
          <div >
            <div className="wishlistcardwrapper">
            {item?.poster_path && (<img
            alt="img"
              className="card"
              src={` https://image.tmdb.org/t/p/w780/${item?.poster_path}`}
            />)}

              {item.title &&<p className="title">{item?.title}</p>}
              {item?.vote_average && <p className="subtitle">
                Avg. vote :- <span>{item?.vote_average}</span>
              </p>}
              {item?.release_date && <p className="subtitle">
                Release Date :- <span>{item?.release_date}</span>
              </p>}
            </div>
          </div>
        </div>
      )):<div className='nodata'>There Is No Data To Show</div>}
    </div>
    </>
  )
}

export default WishList