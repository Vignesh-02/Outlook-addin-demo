const initialState = {
    materialData: [
      // Array of products
    ],
  };
  
  const materialData = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_MATERIAL_DATA':
      return {
        ...state,
        materialData: action.payload,
      };

      case 'UPDATE_MATERIAL_AT_INDEX':
        const { index, updatedMaterial } = action.payload;
  
        // Ensure the index is within the bounds of the array
        if (index >= 0 && index < state.materialData.length) {
          return {
            ...state,
            materialData: state.materialData.map((item, idx) =>
              idx === index ? updatedMaterial : item
            ),
          };
        }
  
        return state;
  
      // Handle other actions
      default:
        return state;
    }
  };
  export default materialData;