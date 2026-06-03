# Employee Management System

A modern Employee management system built with React, featuring separate interfaces for administrators and employees. The system allows for real-time task tracking, assignment, and status updates.

## 🌐 Live Demo

Visit the live application: [https://ems-core.netlify.app/](https://ems-core.netlify.app/)

### Demo Credentials
- **Admin Access**:
  - Email: admin@example.com
  - Password: admin123

## ✨ Features

### Admin Features
- Create and assign tasks to employees
- View all employee tasks and their status
- Monitor task statistics for each employee
- Manage employee list and their workload

### Employee Features
- View assigned tasks in different states:
  - New Tasks (Pending)
  - Active Tasks (Ongoing)
  - Completed Tasks
  - Failed Tasks
- Task Actions:
  - Accept new tasks
  - Mark tasks as complete
  - Mark tasks as failed
  - Retry failed tasks
  - Redo completed tasks (if allowed)

## 🔧 Task Flow
1. **New Tasks (Pending)**
   - ▶️ Start → Moves to ActiveTasks
   - ❌ Cancel → Moves to FailedTasks

2. **Active Tasks (Ongoing)**
   - ✅ Complete → Moves to CompletedTasks
   - ❌ Fail → Moves to FailedTasks

3. **Completed Tasks**
   - 🔄 Redo → Moves back to ActiveTasks

4. **Failed Tasks**
   - 🔄 Retry → Moves to NewTasks
   - Note: Only admins can remove tasks

## 🛠️ Technical Stack

- **Frontend**: React with Vite
- **Styling**: TailwindCSS
- **Routing**: React Router v7
- **State Management**: React Context API
- **Storage**: Local Storage
- **Build Tool**: Vite
- **Deployment**: Netlify

## 🚀 Getting Started

1. Clone the repository
```bash
git clone <repository-url>
```

2. Install dependencies
```bash
cd my-react-app
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

## 📁 Project Structure

```
my-react-app/
├── src/
│   ├── components/
│   │   ├── AdminComponents/     # Admin-specific components
│   │   ├── EmployeeComponents/  # Employee-specific components
│   │   └── Layouts/            # Shared layout components
│   ├── context/                # React Context providers
│   ├── pages/                  # Main page components
│   │   ├── Auth/              # Authentication pages
│   │   └── Dashboard/         # Dashboard pages
│   ├── styles/                # Custom CSS styles
│   └── utils/                 # Utility functions
```

## 🔒 Authentication

- **Admin Login**: Use provided demo credentials
- **Employee Registration**: New employees can register through the registration page
- **Employee Login**: Use registered email and password

## 💾 Data Persistence

The application uses localStorage for data persistence, making it easy to demonstrate functionality without a backend server.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
