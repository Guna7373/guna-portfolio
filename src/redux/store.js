import { configureStore, createSlice } from '@reduxjs/toolkit';

// Portfolio slice for managing portfolio state
const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState: {
    projects: [],
    loading: false,
    error: null,
  },
  reducers: {
    setProjects: (state, action) => {
      state.projects = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

// Export actions
export const { setProjects, setLoading, setError } = portfolioSlice.actions;

// Create and configure store
export const store = configureStore({
  reducer: {
    portfolio: portfolioSlice.reducer,
  },
});

export default store;
