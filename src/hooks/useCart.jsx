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

  const addToCart = (event) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === event.detail.id);

      if (exists) {
        return prev.map((item) =>
          item.id === event.detail.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...event.detail, quantity: 1 }];
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

  useEffect(() => {
    window.addEventListener("add-to-cart", addToCart);

    return () => {
      window.removeEventListener("add-to-cart", addToCart);
    };
  }, []);

  return {
    cart,
    totalPrice,
    addToCart,
    removeFromCart,
  };
};
