

const initialState = {
    customerBody: "<h1>Test</h1>",

    
      
  };



  const customerResponseData = (state = initialState, action) => {
    switch (action.type) {
      case "Response_Add":
        return {
          ...state,
          customerBody: action.payload,
        };
     
      default:
        return state;
    }
  };
  export default customerResponseData;