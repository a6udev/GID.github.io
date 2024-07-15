import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: null,
  error: null,
  loading: null,
};

const profileSlice = createSlice({
  name: "profile",
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

export const { setLoading, setData } = profileSlice.actions;
export default profileSlice.reducer;

export const getProfile = (url) => {
  const getUserToken = JSON.parse(localStorage.getItem("user_token"));
  return async (dispatch) => {
    dispatch(setLoading(true));
    axios
      .get(url, { headers: { Authorization: `Token ${getUserToken}` } })
      .then((res) => dispatch(setData(res.data)))
      .catch((err) => console.log(err))
      .finally(() => {
        dispatch(setLoading(false));
      });
  };
};

export const patchProfile = (url) => {
  const getUserToken = JSON.parse(localStorage.getItem("user_token"));
  return async (dispatch) => {
    dispatch(setLoading(true));
    axios
      .patch(url, { headers: { Authorization: `Token ${getUserToken}` } })
      .then((res) => dispatch(setData(res.data)))
      .catch((err) => console.log(err))
      .finally(() => {
        dispatch(setLoading(false));
      });
  };
};
