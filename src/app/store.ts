import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { MusicReducer } from '../features/music/MusicSlice';

export const store = configureStore({
  reducer: {
    music: MusicReducer
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
