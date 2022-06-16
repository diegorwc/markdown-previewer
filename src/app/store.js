import { configureStore } from '@reduxjs/toolkit';
import previewReducer from '../features/markdown-preview/previewSlice';

export const store = configureStore({
  reducer: {
    preview: previewReducer,
  },
});
