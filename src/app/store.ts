import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { MusicUploadFormReducer } from '../features';


export const store = configureStore({
  reducer: {
    music: MusicUploadFormReducer
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
