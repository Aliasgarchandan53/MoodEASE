import dbService from "./database";
import { Query } from "appwrite";
import axios from "axios";
import conf from "../conf/conf";
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

const getEntrySet = async (userid) => {
  // console.log(`userid : ${userid}`)
  // Compose your queries array
  const queries = [
    Query.equal("userid", userid), // Filter by user
    Query.select(["entry", "date", "title"]), // Select fields you need
    Query.limit(5), // Limit to 3 results
    Query.orderDesc("$createdAt"), // Sort by creation date descending
  ];
  try {
    // Pass queries array as the second argument
    const resp = await dbService.getEntries(userid, queries);
    if (resp?.total > 0) return resp?.documents;
    return defaultEntries.slice(0, 4);
  } catch (error) {
    console.log(`Error fetching entries: ${error.message}`);
    return [];
  }
};

export const getMoodAnalysis = async (userid) => {
  try {
    // Assume getEntrySet returns an array of entry objects
    const entries = await getEntrySet(userid);

    const apiUrl = "https://api.perplexity.ai/chat/completions";

    const data = {
      model: "sonar",
      messages: [
        {
          role: "system",
          content: `You're an expert emotional analyst specializing in journal interpretation. Analyze entries using this framework:
  1. **Emotion Identification**: 
     - Use Plutchik's Wheel of Emotions (8 primary emotions + combinations)
     - Score intensity (1-10 scale) for each detected emotion
     - Note contradictions between stated vs inferred emotions
  
  2. **Pattern Recognition**:
     - Identify recurring themes/triggers (people, events, times)
     - Map emotional arcs across entries
     - Detect cognitive distortions (catastrophizing, black-and-white thinking)
  
  3. **Contextual Analysis**:
     - Relate emotional states to entry timing (morning/evening)
     - Compare to previous analysis (if available in history)
     - Flag potential stress buildup or resilience indicators
  
  4. **Actionable Output**:
     - Generate 3 personalized coping strategies
     - Suggest 2 reflective journal prompts
     - Create 1 growth challenge for next week
  
  Format response using markdown with these sections:
  ## Emotional Summary
  ## Pattern Analysis
  ## Intervention Strategies
  ## Reflective Exercises`,
        },
        {
          role: "user",
          content: `Analyze these journal entries chronologically:
      
  ${entries
    .map(
      (e, idx) =>
        `**Entry ${idx + 1}** (${e.date})
  ${e.entry}
  ${e.metadata?.mood ? `_Reported Mood: ${e.metadata.mood}_` : ""}
  ---
  `
    )
    .join("\n")}
  
  Provide:
  1. Emotional heatmap for the period
  2. Top 3 emotional triggers
  3. Resilience score (1-100) with justification
  4. Personalized mental health checklist`,
        },
      ],
    };

    const headers = {
      Authorization: `Bearer ${conf.perplexityApiKey}`,
      "Content-Type": "application/json",
    };
    const response = await axios.post(apiUrl, data, { headers });
    console.log(response.data.choices[0].message.content);
    return response.data;
  } catch (error) {
    console.log(`Error fetching data from perplexity : ${error}`)
  }
};

/*

import axios from "axios";

// Assume getEntrySet returns an array of entry objects
const entries = await getEntrySet(userid);

// Format entries into a string for the prompt
const entryText = entries.map(
  (e, idx) =>
    `Entry ${idx + 1} (${e.date} - ${e.title}): ${e.entry}`
).join('\n\n');

const apiUrl = "https://api.perplexity.ai/chat/completions";
const token = "<your_token_here>";

const data = {
  model: "sonar",
  messages: [
    {
      role: "system",
      content: "Be precise and concise. Analyze the user's mood based on their recent journal entries."
    },
    {
      role: "user",
      content: `Here are my last journal entries:\n\n${entryText}\n\nHow would you analyze my mood?`
    }
  ]
};

const headers = {
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json"
};

try {
  const response = await axios.post(apiUrl, data, { headers });
  console.log(response.data);
} catch (error) {
  console.error(error);
}

*/
