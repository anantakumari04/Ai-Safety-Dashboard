import React, { useState } from "react";
import { mockIncidents } from "./data";
import List from "./components/List";
import Form from "./components/Form";

function App() {
  const [incidents, setIncidents] = useState(mockIncidents);
  const [filter, setFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("Newest");

  const handleAddIncident = (newIncident) => {
    setIncidents([
      ...incidents,
      { ...newIncident, id: Date.now(), reported_at: new Date().toISOString() },
    ]);
  };

  return (
    <div className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center">
     
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 z-0 pointer-events-none"
        style={{ backgroundImage: "url('/robot.png')" }}
      ></div>

     
      <div className="relative z-10 p-6 max-w-6xl w-full">
        <h1 className="text-3xl font-bold mb-6 text-black">AI Safety Incident Dashboard</h1>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <div className="flex gap-4 mb-6">
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="border p-2 rounded flex-1 "
              >
                <option value="All">All Severities</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>

              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="border p-2 rounded flex-1"
              >
                <option value="Newest">Newest First</option>
                <option value="Oldest">Oldest First</option>
              </select>
            </div>

            <List incidents={incidents} filter={filter} sortOrder={sortOrder} />
          </div>

          <div className="w-full md:w-1/3">
            <Form onAdd={handleAddIncident} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;