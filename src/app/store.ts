import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cart.slice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
