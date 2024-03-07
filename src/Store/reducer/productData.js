

const initialState = {
    product_1: {
        product_: 1,
        material: "PVC",
        status: "In Stock",
        material_cost: 100,
        margin: 0.2,
        price: 150,
        lead_time: 5,
        freight_cost: 10,
      },

    product_2: {
        product_: 2,
        material: "Acetal",
        status: "Partial In Stock",
        material_cost: 80,
        margin: 0.25,
        price: 120,
        lead_time: 7,
        freight_cost: 15,
      },
    product_3: {
        product_: 3,
        material: "Nylon",
        status: "Out of Stock",
        material_cost: 120,
        margin: 0.15,
        price: 140,
        lead_time: 3,
        freight_cost: 12,
      }
      
  };



  const productData = (state = initialState, action) => {
    switch (action.type) {
      case "Product_Add_1":
        return {
          ...state,
          product_1: action.payload,
        };
      case "Product_Add_2":
        return {
          ...state,
          product_2: action.payload,
        };
      case "Product_Add_3":
        return {
          ...state,
          product_3: action.payload,
        };
      default:
        return state;
    }
  };
  export default productData;