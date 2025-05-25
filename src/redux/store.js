import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './contactsSlice.js';
import filtersReducer from './filtersSlice.js';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['filters']
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer
});

const persistor = persistStore(store);

export { store, persistor };