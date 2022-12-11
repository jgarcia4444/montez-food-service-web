import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, createMigrate } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';
import userReducer from '../reducers/userReducer';

const migrations = {
    0: state => {
        return {
            ...state,
            userReducer: {
                ...state.userReducer,
                userCreationError: "",
                loggingInError: "",
                loginErrors: [],
                signupErrors: [],
            }
        }
    },
    1: state => {
        return {
            ...state,
            userReducer: {
                ...state.userReducer,
                userInfo: {
                    ...state.userInfo,
                    usersAddress: {
                        number: "",
                        streetName: "",
                        city: "",
                        state: "",
                        zipCode: "", 
                    }
                }
            }
        }
    }
}

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['userReducer'],
    version: 1,
    debug: true,
    migrate: createMigrate(migrations, {debug: true}),
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