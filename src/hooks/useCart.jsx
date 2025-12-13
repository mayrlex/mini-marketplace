import { useEffect, useMemo, useState } from "react";

export const useCart = () => {
  const [cart, setCart] = useState(() => {
    const savedProducts = localStorage.getItem("cart-storage");

    return savedProducts ? JSON.parse(savedProducts) : [];
  });

  const totalPrice = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart]
  );

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);

      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);

      if (exists && exists.quantity > 1) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }

      return prev.filter((item) => item.id !== product.id);
    });
  };

  useEffect(() => {
    localStorage.setItem("cart-storage", JSON.stringify(cart));
    localStorage.setItem("total-price", JSON.stringify(totalPrice));
  }, [cart, totalPrice]);

  return {
    cart,
    totalPrice,
    addToCart,
    removeFromCart,
  };
};
