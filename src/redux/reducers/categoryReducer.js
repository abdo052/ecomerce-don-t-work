import {CREATE_CATEGORY, GET_ALL_CATEGORY, GET_ERROR} from '../type';
 
const inital ={
    category: [],
    loading: true
}

// we can acces on this JS File by any Reducer by(Action) exapmle {categoryAction.js}

const categoryReducer =(state = inital, action) =>{
 
    switch (action.type){
        case GET_ALL_CATEGORY:
            return{
               /// call state (All Category) from server and all actions
                ...state,
                category: action.payload,
                loading: false
            }
            case CREATE_CATEGORY: 
            return {
              category: action.payload,
              loading: false
            }
          case GET_ERROR: return{
            loading: true,
            category: action.payload,
          }  
          default:
            return state;
    }

}

// send categoryReducer to rootReducer Component
export default categoryReducer;



