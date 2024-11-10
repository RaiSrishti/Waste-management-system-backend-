Waste Management and Prioritized Complaint Handling System
Overview
This project is a Waste Management and Prioritized Complaint Handling System designed to efficiently handle and process citizen complaints regarding waste collection services in Mangalore. The system allows for prioritization of complaints based on urgency (e.g., health risks, repeated missed pickups, proximity to sensitive areas like schools and hospitals) and generates logs for audits. The system uses Queues to manage incoming complaints, Stacks to store resolved complaints, and implements file handling to generate daily logs.
Features
•	Complaint Registration: Citizens can file complaints with information about the issue, including the type, location, and description.
•	Priority-based Complaint Handling: Complaints are prioritized based on type (e.g., health-risk, repeated missed pickups).
•	Complaint Resolution: Authorities can resolve complaints and store historical records for future reference.
•	Daily Log Generation: Resolved complaints and missed pickups are logged into a .csv file for auditing purposes.
•	Queue Management: Complaints are managed using a queue system, ensuring they are processed in priority order.
•	Reverting Resolutions: The system uses a stack to store historical complaints, allowing authorities to revert incorrect resolutions.
Installation
Follow these steps to set up and run the project locally.
Prerequisites
•	Node.js: Install Node.js (includes npm).
•	Express.js: The application uses Express for routing and middleware.
Setup
1.	Clone the Repository:
Clone the repository to your local machine:
bash
Copy code
git clone https://github.com/your-username/Waste-management-system-backend-.git
2.	Navigate to the Project Directory:
bash
Copy code
cd waste-management-system
3.	Install Dependencies:
Run the following command to install all required Node.js packages:
bash
Copy code
npm install
4.	Start the Server:
Start the server using the following command:
bash
Copy code
node server.js
The server will start running on http://localhost:3000.
API Endpoints
1. POST /complaint
Registers a new complaint.
•	Request Body:
json
Copy code
{
  "id": "string",
  "type": "string",   // e.g., "health-risk", "repeated-missed"
  "location": "string",
  "description": "string"
}
•	Response:
json
Copy code
{
  "message": "Complaint registered successfully",
  "complaint": {
    "id": "string",
    "type": "string",
    "location": "string",
    "description": "string",
    "status": "pending",
    "date": "string",
    "priority": "number"
  }
}
2. GET /complaints
Fetches all unresolved complaints (those with status: 'pending').
•	Response:
json
Copy code
[
  {
    "id": "string",
    "type": "string",
    "location": "string",
    "description": "string",
    "status": "pending",
    "date": "string",
    "priority": "number"
  }
]
3. PUT /complaint/
/resolve
Marks a complaint as resolved.
•	Response:
json
Copy code
{
  "message": "Complaint resolved",
  "complaint": {
    "id": "string",
    "type": "string",
    "location": "string",
    "description": "string",
    "status": "resolved",
    "date": "string",
    "priority": "number"
  }
}
4. GET /logs
Fetches the daily log of resolved complaints and missed pickups.
•	Response: Returns the contents of the daily-log.csv file.
________________________________________
File Handling
The system generates and stores logs in a CSV file (daily-log.csv) with the following format:
bash
Copy code
id,status,date
123,resolved,2024-11-10T12:00:00Z
124,pending,2024-11-10T12:05:00Z
The status field indicates whether the complaint has been resolved or is still pending.
________________________________________
Contribution
If you'd like to contribute to this project, you can follow these steps:
1.	Fork the repository.
2.	Create a new branch (git checkout -b feature-name).
3.	Make your changes.
4.	Commit your changes (git commit -m 'Add feature').
5.	Push your changes (git push origin feature-name).
6.	Create a pull request.
________________________________________
License
This project is licensed under the MIT License - see the LICENSE file for details.
________________________________________
Acknowledgments
•	The project uses Express.js to handle HTTP requests.
•	The system uses Queues and Stacks to manage and resolve complaints efficiently.
•	Special thanks to contributors for improving the project.
