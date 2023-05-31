import { cartActions } from "./cartSlice";

export const getCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("https://handi-13c90-default-rtdb.firebaseio.com/item.json");

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();

      dispatch(
        cartActions.updateCart({
          items: cartData.items || [],
          totalPrice: cartData.totalPrice,
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch("https://handi-13c90-default-rtdb.firebaseio.com/cart.json", {
        method: "PUT",
        body: JSON.stringify({
          items: cart.items,
          totalPrice: cart.totalPrice,
          totalQuantity: cart.totalQuantity,
        }),
      });

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };

    try {
      await sendRequest();
    } catch (error) {
     
    }
  };
};
