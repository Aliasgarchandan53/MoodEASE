import { configureStore } from "@reduxjs/toolkit";
import journalEntryReducer from "../features/journalEntry/journalEntrySlice";

export const store = configureStore({ reducer: journalEntryReducer });
