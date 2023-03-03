import {ADD_USER} from '../types'

// export const getUsers = () => async dispatch => {
    
//     try{
//         const res = await axios.get(`http://jsonplaceholder.typicode.com/users`)
//         dispatch( {
//             type: GET_USERS,
//             payload: res.data
//         })
//     }
//     catch(error){
//         dispatch( {
//             type: USERS_ERROR,
//             payload: error,
//         })
//     }

// }

export const addUser = (data) =>  {  
    return {
        type: ADD_USER,
        user: data
    }
    // catch(error){
    //     dispatch( {
    //         type: USERS_ERROR,
    //         payload: error.message,
    //     })
    // }


}