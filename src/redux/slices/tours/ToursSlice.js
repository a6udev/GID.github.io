import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  loading: false,
};

const tourSlice = createSlice({
  name: "tours",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setLoading, setData } = tourSlice.actions;
export default tourSlice.reducer;

export const getTours = (url) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await axios.get(url);
      dispatch(setData(response.data));
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(setLoading(false));
    }
  };
};
