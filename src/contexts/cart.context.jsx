import { createContext, useState } from 'react';

const addCartItem = (cartItems, productToAdd) => {
  // 檢查即將要加入的 product 是不是有在 cartItems 裡面
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  // 承上，如果有，就針對每個 cartItem 來檢查是不是跟即將要加入的 product 一樣，如果一樣就回傳該 cartItem 並且增加其 quantity，如果不一樣就僅回傳該 cartItem
  if (existingCartItem) {
    console.log({ cartItems });
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // 回傳原本的 cartItems 及新加入的 product，並且設定其 quantity 為 1
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
