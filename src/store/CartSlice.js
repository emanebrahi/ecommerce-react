import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    items: JSON.parse(localStorage.getItem("cart")) || [],  
    wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],
    favorites: JSON.parse(localStorage.getItem("favorites")) || [],
    orders: JSON.parse(localStorage.getItem("orders")) || [],
    canceledOrders: JSON.parse(localStorage.getItem("orders")) || []
  };
  
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
        const product = action.payload;
        const existingProduct = state.items.find((item) => item.id === product.id);
        if (existingProduct) {
          existingProduct.quantity += 1;
        } else {
          state.items.push({ ...product, quantity: 1 }); 
        }
        localStorage.setItem("cart", JSON.stringify(state.items));
      },
      
      removeFromCart: (state, action) => {
        const id = action.payload;
        state.items = state.items.filter((item) => item.id !== id);
        localStorage.setItem("cart", JSON.stringify(state.items));
      },

      increaseQuantity: (state, action) => {
        const productId = action.payload;
        const product = state.items.find((item) => item.id === productId);
        if (product) {
          product.quantity += 1;
          localStorage.setItem("cart", JSON.stringify(state.items));
        }
      },
      decreaseQuantity: (state, action) => {
        const productId = action.payload;
        const product = state.items.find((item) => item.id === productId);
        if (product && product.quantity > 1) {
          product.quantity -= 1;
          localStorage.setItem("cart", JSON.stringify(state.items));
        }
      },
      
      moveAllToCart: (state) => {
        const newCart = state.wishlist.filter(
          (wishlistItem) => !state.items.some((cartItem) => cartItem.id === wishlistItem.id)
        );
        state.items = [...state.items, ...newCart]; 
        state.wishlist = [];
        localStorage.setItem("cart", JSON.stringify(state.items));
        localStorage.removeItem("wishlist");
      },
      
      addToWishlist: (state, action) => {
        const item = action.payload;
        const isInWishlist = state.wishlist.find((wishlistItem) => wishlistItem.id === item.id);
        if (!isInWishlist) {
          state.wishlist.push(item);  
          localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
        }
      },
      
      removeFromWishlist: (state, action) => {
        const id = action.payload;
        state.wishlist = state.wishlist.filter((item) => item.id !== id);
        localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
      },
      addToFavorites: (state, action) => {
        const item = action.payload;
        const isInFavorites = state.favorites.some((favoriteItem) => favoriteItem.id === item.id);
        if (!isInFavorites) {
          state.favorites.push(item);
          localStorage.setItem("favorites", JSON.stringify(state.favorites));
        }
      },
      
      removeFromFavorites: (state, action) => {
        const id = action.payload;
        state.favorites = state.favorites.filter((item) => item.id !== id);
        localStorage.setItem("favorites", JSON.stringify(state.favorites));
      },

      placeOrder: (state) => {
        if (state.items.length > 0) {
          state.orders.push({
            id: new Date().getTime(),
            items: [...state.items],
            total: state.items.reduce(
              (total, item) => total + item.price * item.quantity,
              0
            ),
            date: new Date().toLocaleString(),
          });
          localStorage.setItem("orders", JSON.stringify(state.orders));
          state.items = []; 
          localStorage.setItem("cart", JSON.stringify(state.items));
        }
      },
      cancelOrder: (state, action) => {
        const canceledOrder = state.orders.find((order) => order.id === action.payload);
        if (canceledOrder) {
          state.canceledOrders.push(canceledOrder);
          state.orders = state.orders.filter((order) => order.id !== action.payload);
        }
      },
      
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  moveAllToCart,
  addToWishlist,
  removeFromWishlist,
  addToFavorites,
  removeFromFavorites,
  placeOrder,
  cancelOrder
} = cartSlice.actions;

export default cartSlice.reducer;
