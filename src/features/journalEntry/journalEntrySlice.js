import { createSlice, nanoid } from "@reduxjs/toolkit";
import dbService from "../../appwrite/database";

async function initializeState() {
  try {
    const response = await dbService.getEntries();
    
    // Check if response contains documents and map them to the required structure
    const savedEntries = response?.documents?.map(doc => ({
      id: doc.$id, // Use Appwrite's document ID as the entry ID
      date: doc.date || "No date provided", // Default date
      title: doc.title || "Untitled", // Default title
      entry: doc.entry || "No entry available", // Default entry
    })) || []; // Use an empty array if no documents are found

    return { entries: savedEntries };
  } catch (error) {
    console.error("Error fetching entries from Appwrite:", error);
    
    // Return the initial state in case of an error
    return {
      entries: [
        {
          id: 1,
          date: "2024-04-02",
          title: "My first entry",
          entry: "I'm feeling a little overwhelmed with work lately. Need to find some ways to destress...",
        },
      ],
    };
  }
}

// Initialize state asynchronously
const initialState = await initializeState();

export const journalEntrySlice = createSlice({
  name: "journalEntry",
  initialState,
  reducers: {
    addEntry: (state, action) => {
      const { date, title, entry } = action.payload;
      const newEntry = {
        id: nanoid(),
        date,
        title,
        entry,
      };
      state.entries.push(newEntry);
      dbService.createEntry({date,title,entry});
    },
    deleteEntry: (state, action) => {
      state.entries = state.entries.filter(entry => entry.id !== action.payload);
      dbService.deleteEntry(action.payload);
    },
  },
});

export const { addEntry, deleteEntry } = journalEntrySlice.actions;

export default journalEntrySlice.reducer;
