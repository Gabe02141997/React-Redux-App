import axios from "axios"


export const FETCH_DATA = "FETCH_DATA"
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS"
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE"



export const fetchData = () => dispatch => {
  dispatch({type: FETCH_DATA})

    axios.get('https://api.tronalddump.io/random/quote')
    .then(res => {
        console.log(res)
        dispatch({type:FETCH_DATA_SUCCESS, payload: res.data})
    })
    .catch(error => console.log('error', error))

}