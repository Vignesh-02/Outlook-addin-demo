import {store} from ".././store"


export const responseAdd = (data) => {
    store.dispatch({
        type: `Response_Add`,
        payload: data
    })
}