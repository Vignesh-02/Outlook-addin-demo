

const initialState = {
    customerResponseBody: "<h1>Test</h1>",  
  };



  const customerResponseData = (state = initialState, action) => {
    switch (action.type) {
      case "Response_Add":
        return {
          ...state,
          customerResponseBody: action.payload,
        };
     
      default:
        return state;
    }
  };
  export default customerResponseData;