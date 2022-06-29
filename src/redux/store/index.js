import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';
import userReducer from '../reducers/userReducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['userReducer']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer, 
    middleware: () => [thunk]
})

const persistor = persistStore(store);

export {
    store,
    persistor
};