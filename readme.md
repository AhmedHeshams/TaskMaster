# TaskMaster

TaskMaster is a task management application designed to streamline task assignment and tracking within a company. It provides a robust system for admins to create tasks, assign them to employees, and monitor their progress. Employees can view their tasks, mark them as done, or indicate if they failed to complete them.

## Features

- **Signup/Login System:** Secure authentication using Firebase Authentication.
- **Admin Functionality:**
  - Create tasks for specific employees with deadlines.
  - Promote users to admin status.
- **Task Details:**
  - Each task has a title, created date, deadline, description, and assigned employee.
- **Employee Functionality:**
  - View a list of all tasks in the company.
  - See which employee is assigned to each task.
  - Mark tasks as done or failed.

## Technologies Used

- **Frontend:** HTML, CSS, Materialize
- **Firebase Services:**
  - Firebase Authentication for user management.
  - Firebase Cloud Firestore for storing task data.
  - Firebase Cloud Functions with node for backend admin logic.

## Project Structure

The project structure is as follows:

```
TASKMASTER
├── functions
│   └── node_modules
|       └── ..
|       └── ..
|       └── ..
|       └── ..
│   ├── .gitignore
│   ├── index.js
│   ├── package-lock.json
│   ├── package.json
├── img
│   ├── logo.svg
|   └── test.png
├── scripts
│   ├── auth.js
│   ├── index.js
├── .firebaserc
├── .gitignore
├── firebase.json
├── index.html
```

## Screenshot

![Project Screenshot]((img/test.png)

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- Node.js installed on your machine
- Firebase account

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/AhmedHeshams/TaskMaster.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Set up Firebase Authentication and Firestore in your Firebase console and update the configuration in your project.

### Usage

1. Start the development server
   ```sh
   npm start
   ```
2. Open `index.html` in your browser to view the app.


