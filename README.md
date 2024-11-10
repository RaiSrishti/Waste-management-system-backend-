# Waste Management and Prioritized Complaint Handling System

## Overview
This project is a **Waste Management and Prioritized Complaint Handling System** designed to efficiently handle and process citizen complaints regarding waste collection services in Mangalore. The system allows for prioritization of complaints based on urgency (e.g., health risks, repeated missed pickups, proximity to sensitive areas like schools and hospitals) and generates logs for audits. The system uses **Queues** to manage incoming complaints, **Stacks** to store resolved complaints, and implements **file handling** to generate daily logs.

## Features
- **Complaint Registration**: Citizens can file complaints with information about the issue, including the type, location, and description.
- **Priority-based Complaint Handling**: Complaints are prioritized based on type (e.g., health-risk, repeated missed pickups).
- **Complaint Resolution**: Authorities can resolve complaints and store historical records for future reference.
- **Daily Log Generation**: Resolved complaints and missed pickups are logged into a `.csv` file for auditing purposes.
- **Queue Management**: Complaints are managed using a queue system, ensuring they are processed in priority order.
- **Reverting Resolutions**: The system uses a stack to store historical complaints, allowing authorities to revert incorrect resolutions.

## Installation

Follow these steps to set up and run the project locally.

### Prerequisites
- **Node.js**: Install Node.js (includes npm).
- **Express.js**: The application uses Express for routing and middleware.

### Setup
1. **Clone the Repository**:
   Clone the repository to your local machine:
   ```bash
   git clone https://github.com/your-username/Waste-management-system-backend-.git
2. **Navigate to the Project Directory**:
  Change into the project directory:
   ```bash
   cd waste-management-system
3. **Install Dependencies**:
   Install all the required Node.js packages specified in package.json:
   ```bash
   npm install
4. **Start the Server**:
   Start the server using the following command:
   ```bash
    node server.js
  The server will start running on http://localhost:3000.

##API Endpoints

###1. POST /complaint
This endpoint registers a new complaint.

**Request Body**
  Send the following JSON data when submitting a complaint:
  
  {
      "id": "string",        // Unique ID for the complaint
      "type": "string",      // e.g., "health-risk", "repeated-missed"
      "location": "string",  // Location where the complaint occurred
      "description": "string"  // Detailed description of the complaint
  }

**Response**
If the complaint is successfully registered, the response will be:

  
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
  
###2. GET /complaints
  This endpoint fetches all unresolved complaints (those with status: 'pending').

**Response**
  
    {
      "id": "string",
      "type": "string",
      "location": "string",
      "description": "string",
      "status": "pending",
      "date": "string",
      "priority": "number"
    }

###3. PUT /complaint/resolve
This endpoint marks a complaint as resolved.

**Reponse**

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

###4. GET /logs
This endpoint fetches the daily log of resolved complaints and missed pickups.

**Response**
Returns the contents of the daily-log.csv file.
'''csv
  id,status,date
  123,resolved,2024-11-10T12:00:00Z
  124,pending,2024-11-10T12:05:00Z

##File Handling
  The system generates and stores logs in a CSV file (daily-log.csv). Each entry records the complaint ID, status (resolved or pending), and timestamp of the action.

**Log Format**:
csv
  id,status,date
  123,resolved,2024-11-10T12:00:00Z
  124,pending,2024-11-10T12:05:00Z
The status field indicates whether the complaint has been resolved or is still pending.

##Contribution
  If you'd like to contribute to this project, follow these steps:

**1. Fork the Repository**
  Click the "Fork" button on the top right of the repository page.

**2. Clone Your Fork**
  Clone your fork to your local machine:
  bash
    git clone https://github.com/your-username/Waste-management-system-backend-.git

    
**3. Create a New Branch**
  Create a new branch for your feature:
  bash
    git checkout -b feature-name

**4. Make Your Changes**
  Make your changes to the code, whether it's fixing a bug, adding a feature, or improving documentation.

**5. Commit Your Changes**
  Commit your changes with a clear and concise message:
  bash
    git commit -m 'Add feature'

**6. Push Your Changes**
  Push your changes to your forked repository:
  bash
    git push origin feature-name
  
**7. Create a Pull Request**
  Open a pull request from your fork's feature branch to the main repository.

##License
  This project is licensed under the MIT License - see the LICENSE file for details.

##Acknowledgments
  The project uses Express.js to handle HTTP requests.
  The system utilizes Queues and Stacks to manage and resolve complaints efficiently.


