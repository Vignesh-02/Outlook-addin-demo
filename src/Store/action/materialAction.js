import {store} from "../store"




export const updateMaterialAtIndex = (index, updatedMaterial) => {
    store.dispatch({
        type: 'UPDATE_MATERIAL_AT_INDEX',
        payload: { index, updatedMaterial }
    })
  };

  export const addMaterialData = (products) => {
    store.dispatch({
        type: 'SET_MATERIAL_DATA',
        payload: products,
    })
  };
  
  