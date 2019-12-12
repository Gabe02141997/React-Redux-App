import { FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE} from '../actions/actions'

const initialState = {
    data: null,
    isFetching: false,
    error: '',


}


export const appReducer = (state = initialState, action) => {
        switch(action.type){
            case FETCH_DATA : 
            return {
                ...state,
                isFetching: true
            }
            case FETCH_DATA_SUCCESS :
            return {
                ...state,
                isFetching: false,
                data: action.payload
            }


            default :
            return state
        }
}