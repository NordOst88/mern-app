import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("data", async (token) => {
  try {
    const response = await fetch("/api/task", {
      method: "GET",
      body: null,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const content = await response.json();
    return content;
  } catch (e) {}
});

const data = createSlice({
  name: "data",
  initialState: [],
  reducers: {
    resetData: () => [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (_, action) => action.payload);
  },
});

export const { resetData } = data.actions;

export const selectData = (state) => state.data;

export default data.reducer;
