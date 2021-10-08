import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer from './rockets';
import api from './middleware/api';

export default function store() {
    return configureStore({
        reducer,
        middleware: [...getDefaultMiddleware(), api],
    });
}