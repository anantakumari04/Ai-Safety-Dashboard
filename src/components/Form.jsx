import React, { useState } from "react";

function Form({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [severity, setSeverity] = useState("Low");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return alert("All fields required!");
    onAdd({ title, description, severity });
    setTitle("");
    setDescription("");
    setSeverity("Low");
  };

  return (
    <form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Report New Incident</h2>
      
      <input
        type="text"
        placeholder="Title"
        className="w-full p-2 border rounded mb-3"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      
      <textarea
        placeholder="Description"
        className="w-full p-2 border rounded mb-3"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <div className="mb-3">
        <label className="block font-semibold mb-1">Severity</label>
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-1">
            <input
              type="radio"
              name="severity"
              value="Low"
              checked={severity === "Low"}
              onChange={(e) => setSeverity(e.target.value)}
            />
            Low
          </label>

          <label className="flex items-center gap-1">
            <input
              type="radio"
              name="severity"
              value="Medium"
              checked={severity === "Medium"}
              onChange={(e) => setSeverity(e.target.value)}
            />
            Medium
          </label>

          <label className="flex items-center gap-1">
            <input
              type="radio"
              name="severity"
              value="High"
              checked={severity === "High"}
              onChange={(e) => setSeverity(e.target.value)}
            />
            High
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="bg-slate-500/75 text-white px-4 py-2 rounded hover:bg-black"
      >
        Submit Report
      </button>
    </form>
  );
}

export default Form;
