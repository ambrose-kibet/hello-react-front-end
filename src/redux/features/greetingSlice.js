import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const initialState = {
  greeting: null,
  isLoading: false,
};
export const getGreeting = createAsyncThunk(
  'greetings/getgreetings',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios('http://127.0.0.1:3000/api/v1/greetings');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        'something went wrong please try again later'
      );
    }
  }
);
const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getGreeting.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getGreeting.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.greeting = payload.message;
    });
    builder.addCase(getGreeting.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.greeting = payload.message;
    });
  },
});

export default greetingSlice.reducer;
