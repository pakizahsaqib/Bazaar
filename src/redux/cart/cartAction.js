import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_QUANTITY,
} from "./cartActionTypes";

const addItemActionCreator = (item) => {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
};

const removeItemActionCreator = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  };
};

const updateQuantityActionCreator = (id, quantity) => {
  return {
    type: UPDATE_QUANTITY,
    payload: { id, quantity },
  };
};

export {
  addItemActionCreator,
  removeItemActionCreator,
  updateQuantityActionCreator,
};
