import React, { useEffect, useState, useTransition } from "react";
import { FaMusic, FaHeadphonesAlt, FaVideo, FaBookOpen } from "react-icons/fa";
import {
  SongCard,
  ResourceCard,
  JournalEntryCard,
  Button,
} from "../layouts/index";
import Entryform from "../models/Entryform";
import Resourceform from "../models/Resourceform";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteResource,
  initializeResources,
} from "../features/resources/resourceSlice";
import {
  deleteEntry,
  initializeEntries,
} from "../features/journalEntry/journalEntrySlice";

import { getMoodAnalysis } from "../appwrite/moodAnalyser";

import ReactMarkdown from 'react-markdown';
import rehypeSanitize from 'rehype-sanitize';

const Dashboard = () => {
  const authStatus = useSelector((state) => state.auth.status);
  const user = useSelector((state) => state.auth.userData);
  const [showEntryForm, setShowEntryForm] = useState(false);
  const [showResourceForm, setShowResourceForm] = useState(false);
  const [entries, setEntries] = useState([]);
  const [resources, setResources] = useState([]);
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  // const [lastEntries, setLastEntries] = useState([]);
  const [moodData, setMoodData] = useState(null);

  const fetchAnalysis = async () => {
    const resp = await getMoodAnalysis(user?.$id);
    setMoodData(resp?.choices[0].message.content);
    // setLastEntries(entries || []);
  };

  const openEntryForm = () => {
    setShowEntryForm(true);
  };
  const openResourceForm = () => {
    setShowResourceForm(true);
  };
  const closeEntryForm = () => {
    setShowEntryForm(false);
  };
  const closeResourceForm = () => {
    setShowResourceForm(false);
  };
  const jEntries = useSelector((state) => state.entries.entries);
  const uResources = useSelector((state) => state.resources.resources);

  useEffect(() => {
    if (user) {
      dispatch(initializeEntries(user.$id));
      dispatch(initializeResources(user.$id));
      setEntries(jEntries);
      setResources(uResources);
      setError("");
    } else {
      setError(`User is null : ${user}`);
    }
  }, [jEntries, uResources, dispatch]);

  const recommendedSongs = [
    { id: 1, name: "Ocean Waves", icon: <FaMusic /> },
    { id: 2, name: "Rain Sounds", icon: <FaHeadphonesAlt /> },
    { id: 3, name: "Forest Ambience", icon: <FaMusic /> },
    { id: 4, name: "Gentle Piano", icon: <FaHeadphonesAlt /> },
    { id: 5, name: "White Noise", icon: <FaMusic /> },
  ];
  if (error)
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#FFF0F0]">
        <p className="text-red-600 bg-white border border-red-200 px-6 py-3 rounded shadow text-lg">
          {error}
        </p>
      </div>
    );
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 bg-[#F0F8FF] text-[#21603d]">
      <div className="flex flex-col items-center lg:flex-row justify-between">
        <div>
          {user ? (
            <h1 className="text-4xl font-semibold text-center lg:text-start">
              Hello {user?.name || "name error"} !!
            </h1>
          ) : (
            ""
          )}
          <p className="mt-2 text-center lg:text-start">
            Here's your personal dashboard...
          </p>
        </div>
      </div>

      <div className="my-8">
        <h2 className="text-2xl font-semibold mb-4">Last 3 Journal Entries</h2>
        <div className=" flex flex-col gap-4" id="entrybox">
          {entries.length === 0 ? (
            <p className="p-4 bg-white text-[#2E8B57] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg text-center">
              No entries found. Click the button below to add a new entry.
            </p>
          ) : (
            ""
          )}
          {entries?.map((entry) => (
            <JournalEntryCard
              key={entry.id}
              date={entry.date}
              title={entry.title}
              entry={entry.entry}
              entDelete={() => dispatch(deleteEntry(entry.id))}
            />
          ))}
          <div className="flex flex-row">
            <p className="mt-2 text-center lg:text-start">
              Click to add entries --{">"}
            </p>
            <button
              className="bg-brightColor text-white px-4 py-2 mx-4 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out "
              onClick={openEntryForm}
            >
              Add Entries
            </button>
          </div>
          {showEntryForm && (
            <Entryform closeForm={closeEntryForm} userId={user?.$id} />
          )}
        </div>
      </div>

      <div className="flex flex-col gap-4" id="entrybox">
        <div className="flex flex-row">
          <button
            className="bg-brightColor text-white px-4 py-2 mx-4 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
            onClick={fetchAnalysis}
          >
            Get Mood Analysis
          </button>
        </div>

        {moodData ? (
          <div className="p-6 bg-white rounded-lg shadow-[0_3px_8px_rgba(0,0,0,0.24)] text-[#21603d]">
            <ReactMarkdown
              rehypePlugins={[rehypeSanitize]}
              components={{
                h2: ({ node, ...props }) => (
                  <h2
                    className="text-2xl font-semibold mb-4 border-b-2 border-[#2E8B57] pb-2"
                    {...props}
                  />
                ),
                h3: ({ node, ...props }) => (
                  <h3
                    className="text-xl font-medium mt-6 mb-3 text-[#2E8B57]"
                    {...props}
                  />
                ),
                ul: ({ node, ...props }) => (
                  <ul className="list-disc pl-6 space-y-2 mb-4" {...props} />
                ),
                li: ({ node, ...props }) => (
                  <li className="mb-2 last:mb-0" {...props} />
                ),
                strong: ({ node, ...props }) => (
                  <strong className="text-[#2E8B57]" {...props} />
                ),
                // Remove table rendering completely
                table: () => null,
                thead: () => null,
                tbody: () => null,
                tr: () => null,
                th: () => null,
                td: () => null,
              }}
            >
              {moodData.split("## Emotional Summary")[0] +
                moodData.split("## Pattern Analysis").slice(1).join("")}
            </ReactMarkdown>
          </div>
        ) : (
          <p className="p-4 bg-white text-[#2E8B57] shadow-[0_3px_8px_rgba(0,0,0,0.24)] rounded-lg text-center">
            No mood analysis data found. Click the button above to generate
            insights.
          </p>
        )}
      </div>

      <div className="my-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FaHeadphonesAlt className="mr-2" /> Recommended Songs for Relaxation
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {recommendedSongs.map((song) => (
            <SongCard
              key={song.id}
              icon={song.icon}
              name={song.name}
              onPlay={() => console.log(`Playing ${song.name}`)}
            />
          ))}
        </div>
      </div>

      <div className="my-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FaVideo className="mr-2" /> <FaBookOpen className="mr-2" /> Useful
          Resources
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {resources?.map((res) => (
            <ResourceCard
              key={res.id}
              type={res.type}
              title={res.title}
              thumbnail={res.thumbnail}
              link={res.link}
              resDelete={() => dispatch(deleteResource(res.id))}
            />
          ))}
        </div>
        <div className="flex flex-col my-4">
          {resources.length === 0 ? (
            <p className="p-4 bg-white text-[#2E8B57] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg text-center">
              No resources found. Click the button below to add a new resource.
            </p>
          ) : (
            ""
          )}
          <div className="flex flex-row my-4">
            <p className="mt-2 text-center lg:text-start">
              Click to add resources --{">"}
            </p>
            <button
              className="bg-brightColor text-white px-4 py-2 mx-4 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out "
              onClick={openResourceForm}
            >
              Add Resources
            </button>
          </div>
          {showResourceForm && (
            <Resourceform closeForm={closeResourceForm} userId={user.$id} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
