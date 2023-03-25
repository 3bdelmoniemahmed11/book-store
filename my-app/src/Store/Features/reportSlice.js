import { createSlice } from "@reduxjs/toolkit";

const reportSclice = createSlice({
  name: "report",
  initialState: { logs: [] },
  reducers: {
    generateReport: (state, action) => {
      console.log(action);
      state.logs.push(action.payload);
    },
  },
});

export default reportSclice.reducer;
export const { generateReport } = reportSclice.actions;
