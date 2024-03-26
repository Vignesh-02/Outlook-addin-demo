import {store} from ".././store"


export const tokenAdd = (data) => {
    store.dispatch({
        type: `Add_Token`,
        payload: data
    })
}