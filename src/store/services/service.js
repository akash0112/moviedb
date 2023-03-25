import axios from "axios";
export const Get_Movies_API =async()=>{
    try{
     const res = await axios.get(`${process.env.REACT_APP_API_URL}now_playing?api_key=${process.env.REACT_APP_API_KEY}`);
     return res.data.results
    }
    catch(err){
        console.log(err);
    }
}

export const Get_Movie_By_Id =async(id)=>{
    try{
     const res = await axios.get(`${process.env.REACT_APP_API_URL+id}?api_key=${process.env.REACT_APP_API_KEY}`);
     return res.data
    }
    catch(err){
        console.log(err);
    }
}