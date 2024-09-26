import { createSlice } from "@reduxjs/toolkit";

const EmpSlice = createSlice({
  name: "employee",
  initialState: [],

  reducers: {
    addEmp: (state, action) => {
      state.push(action.payload);
    },

    deleteEmp: (state, action) => {
      return state.filter((e) => e?.empId !== action?.payload);
    },

    updateEmp: (state, action) => {
      return state.map((e) => {
        if (e?.empId === action?.payload?.empId) {
          return {
            ...e,
            empName: action?.payload?.empName,
            empAddress: action?.payload?.empAddress,
            empEmail: action?.payload?.empEmail,
          };
        } else {
          return e;
        }
      });
    },
  },
});

export const { addEmp, deleteEmp,updateEmp } = EmpSlice.actions;

export default EmpSlice.reducer;
