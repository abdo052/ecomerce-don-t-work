import { CREATE_CATEGORY, GET_ALL_CATEGORY, GET_ERROR } from "../type";
import useGetData from "../../hooks/useGetData";
import { useInsertDataWithImage } from "../../hooks/useInsertData";

/*
 use dispatch and use higher order function to use dispatch instead {return}
 dispatch is bind be redux-thunk and async await
*/
// get all Category 
export const getAllCategory = (limit) => async (dispatch) => {
  try {
    // we call useGetData and accecs this url with file useGetData.js
    // limit numbers of data we want show on Page example {CategoryContainer}
    const response = await useGetData(`/api/v1/categories?limit=${limit}`);
    dispatch({
      // this code will send to categoryReducer.js
      type: GET_ALL_CATEGORY,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
}

// get all Category with paginations(Page)
export const getAllCategoryPage = (page) => async (dispatch) => {
  try {
    // we call useGetData and accecs this url with file useGetData.js
    // limit numbers of data we want show on Page example {CategoryContainer}
    //  we send Page to change are loaded data on browser
    const response = await useGetData(`/api/v1/categories?limit=3&page=${page}`);
    dispatch({
      // this code will send to categoryReducer.js
      type: GET_ALL_CATEGORY,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
}



// create a new category 
export const createCategory = (formData) => async (dispatch) => {
  try {
   // insert new data
    const response = await useInsertDataWithImage(`/api/v1/categories`,formData);
    dispatch({
      // this code will send to categoryReducer.js
      type: CREATE_CATEGORY,
      payload: response,
      loading: true
    })
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
} 


