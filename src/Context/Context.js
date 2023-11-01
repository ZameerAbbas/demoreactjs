import React, { createContext, useEffect, useReducer } from "react";
import App from "../App";
import "../index.css";

// Context to store state and pass it globally
export const Createcart = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const itemToAdd = action.payload;
      const isItemInCart = state.cartItems.find(
        (cartItem) => cartItem.id === itemToAdd.id
      );

      if (isItemInCart) {
        return {
          ...state,
          cartItems: state.cartItems.map((cartItem) =>
            cartItem.id === itemToAdd.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...itemToAdd, quantity: 1 }],
        };
      }

    case "REMOVE_FROM_CART":
      const itemToRemove = action.payload;
      const itemIndexToRemove = state.cartItems.findIndex(
        (cartItem) => cartItem.id === itemToRemove.id
      );

      if (itemIndexToRemove === -1) {
        return state; // Item not found, no change
      }

      if (state.cartItems[itemIndexToRemove].quantity === 1) {
        // If item quantity is 1, remove it from the cart
        return {
          ...state,
          cartItems: state.cartItems.filter(
            (cartItem, index) => index !== itemIndexToRemove
          ),
        };
      } else {
        // Decrease the quantity of the item
        const updatedCartItems = state.cartItems.map((cartItem, index) =>
          index === itemIndexToRemove
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );

        return {
          ...state,
          cartItems: updatedCartItems,
        };
      }

    case "CLEAR_CART":
      return { ...state, cartItems: [] };

    default:
      return state;
  }
};

const Statestore = ({ children }) => {
  // Initial state for the cart
  const initialCartState = {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  };

  const [cartState, dispatch] = useReducer(cartReducer, initialCartState);

  // data calling from firebase
  const [records, setRecords] = React.useState([]);

  useEffect(() => {
    // Fetch data from 'https://fakestoreapi.com/products'
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        console.log(json); // Log data from the fake store API
        setRecords(json); // Set the fetched data in the 'records' state
      });
  }, []);

  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const removeFromCart = (item) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const getCartTotal = () => {
    return cartState.cartItems.reduce(
      (total, item) => total + item.data.price * item.quantity,
      0
    );
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartState.cartItems));
  }, [cartState.cartItems]);

  return (
    <Createcart.Provider
      value={{
        records,
        cartItems: cartState.cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
      }}
    >
      {children}
      <App />
    </Createcart.Provider>
  );
};

export default Statestore;
