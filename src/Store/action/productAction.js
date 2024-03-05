import {store} from ".././store"


export const productAdd = (data, index) => {
    store.dispatch({
        type: `Product_Add_${index}`,
        payload: data
    })
}