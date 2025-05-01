import React, { useState } from "react";

function Item({ incident }) {
  const [expanded, setExpanded] = useState(false);

  // Dynamic badge color based on severity
  const getSeverityColor = (severity) => {
    switch (severity) {
      case "Low":
        return "bg-yellow-200 text-yellow-800";
      case "Medium":
        return "bg-orange-200 text-orange-800";
      case "High":
        return "bg-red-200 text-red-800";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  return (
    <div className="border p-4 rounded mb-6 shadow hover:shadow-md transition">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-bold text-lg">{incident.title}</h3>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-sm text-gray-600">
              {new Date(incident.reported_at).toLocaleString()}
            </span>
            <span className={`text-xs font-semibold px-2 py-1 rounded ${getSeverityColor(incident.severity)}`}>
              {incident.severity}
            </span>
          </div>
        </div>

        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="bg-slate-500/75 text-white px-4 py-2 rounded hover:bg-black transition"
        >
          {expanded ? "Hide Details" : "View Details"}
        </button>

      </div>

      {expanded && (
        <p className="mt-2 text-gray-800">{incident.description}</p>
      )}
    </div>
  );
}

export default Item;
