import React from "react";
import Item from "./Item";

function List({ incidents, filter, sortOrder }) {
  const filtered = incidents.filter((i) =>
    filter === "All" ? true : i.severity === filter
  );

  const sorted = [...filtered].sort((a, b) => {
    const aDate = new Date(a.reported_at);
    const bDate = new Date(b.reported_at);
    return sortOrder === "Newest" ? bDate - aDate : aDate - bDate;
  });

  return (
    <div className="mt-6">
      {sorted.map((incident) => (
        <Item key={incident.id} incident={incident} />
      ))}
    </div>
  );
}

export default List;
