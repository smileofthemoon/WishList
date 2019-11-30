const initialState = {
  items: []
};

const wishListState = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_NEW_ITEM_TO_WISH_LIST":
      const newItems = state.items;
      newItems.push(action.payload);
      return {
        ...state,
        items: newItems
      };
    case "DELETE_ITEM_FROM_WISH_LIST":
      const updatedItems = state.items;
      updatedItems.splice(action.payload, 1);
      return {
        ...state,
        items: updatedItems
      };
    default:
      return state;
  }
};
export default wishListState;
