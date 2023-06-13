import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import storage from 'redux-persist/lib/storage';
import { allUsers } from './services/users';
import { useDispatch } from 'react-redux'
import { all } from 'axios';
const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    // users: allUsers
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: {
        persistedReducer,
        [allUsers.reducerPath]: allUsers.reducer,
    },
    middleware: (getDefaultMiddleware: any) =>
        getDefaultMiddleware({
            thunk: true,
            serializableCheck: false,
        }).concat(allUsers.middleware),
});

setupListeners(store.dispatch);
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const persistor = persistStore(store);