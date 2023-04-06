// const list = state = [];
const reducer = (state, action) => {           
  switch (action.type){
    case "ADD":
      const isProduct = state.find((p) => p.id === action.payload.id);
      return isProduct
        ? state.map((product) =>
            product.id === action.payload.id
              ? { ...product, qty: product.qty + 1 }
              : product
          )
        : [...state,{...action.payload,qty:1}];
    case "DECRASE":
      const isProducts = state.find((p)=>p.id === action.payload.id);
      return isProducts.qty === 1 ? state.filter((product)=> product.id !== action.payload.id):
         state.map((product)=> action.payload.id === product.id ? {...product,qty:action.payload.qty-1}:product) 
          
    case "DELETE":
      return state.filter((product)=> product.id !== action.payload.id)     
        default:
         return state;       
  }
}
export default reducer;