const initialState = {
    user:{
        name:'admin',
        password:'admin',
        loggedin:false
    }
}
const authReducer=(state=initialState,action)=>{
    const {type} = action;
    switch (type) {
        case "LOGIN":
            return {...state,user:{...state.user,loggedin:true}};
    
        default:
           return state;
    }
}

export default authReducer;