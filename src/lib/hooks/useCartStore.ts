import { create } from "zustand";
import { round2 } from "../utils";
import { OrderItem } from "../models/OrderModel";

type Cart = {
  items: OrderItem[];
  itemsPrice: number;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
};

const initialState: Cart = {
  items: [],
  itemsPrice: 0,
  taxPrice: 0,
  shippingPrice: 0,
  totalPrice: 0,
};

export const cartStore = create<Cart>(() => initialState);

export default function useCartService() {
  const { items, itemsPrice, taxPrice, shippingPrice, totalPrice } =
    cartStore();
  return {
    items,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    increase: (item: OrderItem) => {
      // check if the item exists in the cart or not
      const existingItem = items.find((x) => x.slug === item.slug);

      // if the item exists in the cart then increase the quantity and if not then add the item in the cart
      const updatedCartItems = existingItem
        ? items.map((item) => {
            if (item.slug === item.slug) {
              return { ...existingItem, qty: existingItem.qty + 1 };
            }
            return item;
          })
        : [...items, { ...item, qty: 1 }];

      // calculate all the price
      const { itemsPrice, shippingPrice, taxPrice, totalPrice } =
        calculatePrice(updatedCartItems);

      // update the state values
      cartStore.setState({
        items: updatedCartItems,
        itemsPrice,
        shippingPrice,
        taxPrice,
        totalPrice,
      });
    },
    decrease: (item: OrderItem) => {
      // check if the item exists in the cart or not
      const existingItem = items.find((x) => x.slug === item.slug);

      // if the item exists in the cart then check the quantity and do such operations
      if (!existingItem) return;
      const updatedCartItems =
        existingItem.qty === 1
          ? items.filter((x: OrderItem) => x.slug !== item.slug)
          : items.map((x) =>
              item.slug ? { ...existingItem, qty: existingItem.qty - 1 } : x
            );

      // calculate all the price
      const { itemsPrice, shippingPrice, taxPrice, totalPrice } =
        calculatePrice(updatedCartItems);

      // update the state values
      cartStore.setState({
        items: updatedCartItems,
        itemsPrice,
        shippingPrice,
        taxPrice,
        totalPrice,
      });
    },
  };
}

const calculatePrice = (cartItems: OrderItem[]) => {
  const itemsPrice = round2(
    cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );

  const shippingPrice = round2(itemsPrice > 100 ? 0 : 100);
  const taxPrice = round2(Number(0.15 * itemsPrice));
  const totalPrice = round2(itemsPrice * shippingPrice * taxPrice);
  return { itemsPrice, shippingPrice, taxPrice, totalPrice };
};
