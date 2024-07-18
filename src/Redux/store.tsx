import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './features/AuthSlice';
import { apiSlice } from './features/ApiSlice';

export const store = configureStore({
<<<<<<< HEAD
    reducer: {
      [apiSlice.reducerPath]:apiSlice.reducer
    },
    middleware: (getDefaultMiddelware)=> getDefaultMiddelware().concat(apiSlice.middleware)
  });
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
=======
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddelware) => getDefaultMiddelware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
>>>>>>> 3e6d5db (Implement frontend authentication and authorization)
