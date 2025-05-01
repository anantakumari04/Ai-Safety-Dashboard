AI Safety Incident Dashboard

A simple and elegant React.js web app to report, filter, and sort AI-related safety incidents.

#Tech Stack

Frontend: React.js

Styling: TailwindCSS (utility-first styling)

#Language: JavaScript (ES6+)

#Installation & Running Locally
Follow these steps to set up and run the project on your machine:

Clone the repository


git clone https://github.com/your-username/ai-safety-dashboard.git

Navigate into the project folder

cd ai-safety-dashboard
Install dependencies


npm install
Start the development server

npm run dev


Open in Browser
Visit: http://localhost:3000

#Features

Submit new incident reports with title, description, and severity (Low/Medium/High).

Filter incidents based on severity.

Sort incidents by Newest or Oldest first.

Toggle "View Details" and "Hide Details" for each incident.

#Design Decisions

TailwindCSS was chosen for rapid and clean UI development with minimal CSS files.

Severity is visually differentiated with colors (Yellow for Low, Orange for Medium, Red for High).

Form input for severity was changed from a dropdown to radio buttons for quicker selection.

The app is designed to be mobile responsive and easily extendable (e.g., adding a backend API later).

#Challenges Faced

Keeping the UI minimal but still expressive for different incident severities.

Handling flexible form state and managing local incident state cleanly without external libraries like Redux.
