

const initialState = {
    accessToken: "",  
  };



  const accessTokenData = (state = initialState, action) => {
    switch (action.type) {
      case "Add_Token":
        return {
          ...state,
          accessToken: action.payload,
        };
     
      default:
        return state;
    }
  };
  export default accessTokenData;