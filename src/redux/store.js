import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filterSlice';
// import { contactsReducer } from './contactsSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { contactsApi } from './contactsAPI';

export const store = configureStore({
  reducer: {
    // contacts: contactsReducer,
    filter: filterReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});

setupListeners(store.dispatch);
