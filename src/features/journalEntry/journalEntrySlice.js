import { createSlice, nanoid } from "@reduxjs/toolkit";
import dbService from "../../appwrite/database";

const defaultEntries = [
  {
    id: 1,
    date: "2024-04-01",
    title: "New Week, New Goals",
    entry:
      "The week started with a lot on my plate. Meetings, assignments, and pending tasks are starting to pile up. I tried planning things out, but it's still overwhelming. Maybe I need a better way to manage my time and take breaks in between. Hoping tomorrow feels a bit lighter.",
    userid: "1234",
  },
  {
    id: 2,
    date: "2024-04-02",
    title: "Small Victories",
    entry:
      "Managed to finish a project ahead of time today. Felt a sense of accomplishment that I haven’t felt in a while. I even treated myself to a coffee and took a short walk outside. It’s funny how little things can lift the mood. Trying to hold onto this positive energy.",
    userid: "1234",
  },
  {
    id: 3,
    date: "2024-04-03",
    title: "Midweek Slump",
    entry:
      "Today felt heavy. I woke up tired and found it hard to stay focused throughout the day. Kept getting distracted and procrastinating on tasks. I think the lack of sleep is catching up with me. I need to get back into a better sleep schedule and maybe cut down screen time at night.",
    userid: "1234",
  },
  {
    id: 4,
    date: "2024-04-04",
    title: "Unexpected Joy",
    entry:
      "A friend surprised me with a short video call, and it really made my day. We laughed about old memories and caught up on life. I hadn’t realized how much I missed just having a genuine conversation. Emotional connections really are healing. I want to reach out more and not isolate myself.",
    userid: "1234",
  },
  {
    id: 5,
    date: "2024-04-05",
    title: "Overthinking Spiral",
    entry:
      "Overthinking got the best of me today. One small comment during a meeting kept echoing in my head, and I kept wondering if I messed up. I know it’s irrational, but the feeling lingered all day. Writing this down helps a little. I hope I can learn to be kinder to myself.",
    userid: "1234",
  },
  {
    id: 6,
    date: "2024-04-06",
    title: "Creative Flow",
    entry:
      "Spent the evening drawing and journaling, and I felt really in tune with myself. There was a calm I hadn’t felt in a while. I didn’t even notice the hours pass. I need to create more space for these kinds of activities—they ground me. Today was a good day, emotionally and mentally.",
    userid: "1234",
  },
  {
    id: 7,
    date: "2024-04-07",
    title: "Sunday Reset",
    entry:
      "Today was all about rest and reflection. Cleaned my room, prepped for the week, and just allowed myself to slow down. There’s something therapeutic about putting things in order, both physically and mentally. I feel a bit more ready to take on the next week. Let’s see what it brings.",
    userid: "1234",
  },
];

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
      const { date, title, entry, userid } = action.payload;
      const newEntry = {
        id: nanoid(),
        date,
        title,
        entry,
        userid,
      };
      state.entries.push(newEntry);
      dbService.createEntry({ date, title, entry, userid });
    },
    deleteEntry: (state, action) => {
      state.entries = state.entries.filter(
        (entry) => entry.id !== action.payload
      );
      dbService.deleteEntry(action.payload);
    },
  },
});

export const { setEntries, addEntry, deleteEntry } = journalEntrySlice.actions;

// Thunk to initialize state asynchronously
export const initializeEntries = (userId) => async (dispatch) => {
  try {
    const response = await dbService.getEntries(userId);
    if (response.documents.length == 0) {
      dispatch(setEntries(defaultEntries));
    } else {
      const savedEntries =
        response?.documents?.map((doc) => ({
          id: doc.$id, // Use Appwrite's document ID as the entry ID
          date: doc.date || "No date provided", // Default date
          title: doc.title || "Untitled", // Default title
          entry: doc.entry || "No entry available", // Default entry
          userid: userId || "1234",
        })) || [];
      dispatch(setEntries(savedEntries));
    }
  } catch (error) {
    console.error("Error fetching entries from Appwrite:", error);
    // Optionally set a default state if the API call fails
    dispatch(setEntries(defaultEntries));
  }
};

export default journalEntrySlice.reducer;
