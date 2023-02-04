import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export interface TransactionState {
  connectedAccount?: string | null;
}

const initialState: TransactionState = {
  connectedAccount: null,
};

export const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    setCurrentAccount: (state, action: PayloadAction<string>) => {
      state.connectedAccount = action.payload;
    },
  },
});

export const { setCurrentAccount } = transactionSlice.actions;

export const selectTransaction = (state: RootState) => state.transactions;

export default transactionSlice.reducer;
