import { createSlice, nanoid } from "@reduxjs/toolkit";
import dbService from "../../appwrite/database";

// Initial state with placeholder
const initialState = {
  entries: [], // Empty array by default
};

export const journalEntrySlice = createSlice({
  name: "journalEntry",
  initialState,
  reducers: {
    setEntries: (state, action) => {
      state.entries = action.payload;
    },
    addEntry: (state, action) => {
      const { date, title, entry } = action.payload;
      const newEntry = {
        id: nanoid(),
        date,
        title,
        entry,
      };
      state.entries.push(newEntry);
      dbService.createEntry({ date, title, entry });
    },
    deleteEntry: (state, action) => {
      state.entries = state.entries.filter(entry => entry.id !== action.payload);
      dbService.deleteEntry(action.payload);
    },
  },
});

export const { setEntries, addEntry, deleteEntry } = journalEntrySlice.actions;

// Thunk to initialize state asynchronously
export const initializeEntries = () => async dispatch => {
  try {
    const response = await dbService.getEntries();
    const savedEntries = response?.documents?.map(doc => ({
      id: doc.$id, // Use Appwrite's document ID as the entry ID
      date: doc.date || "No date provided", // Default date
      title: doc.title || "Untitled", // Default title
      entry: doc.entry || "No entry available", // Default entry
    })) || [];
    dispatch(setEntries(savedEntries));
  } catch (error) {
    console.error("Error fetching entries from Appwrite:", error);
    // Optionally set a default state if the API call fails
    dispatch(setEntries([
      {
        id: 1,
        date: "2024-04-02",
        title: "My first entry",
        entry: "I'm feeling a little overwhelmed with work lately. Need to find some ways to destress...",
      },
    ]));
  }
};

export default journalEntrySlice.reducer;
