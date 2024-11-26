import React, { useState } from "react";
import './LoginSignUp.css';

import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import person_icon from '../Assets/person.png';

// Import Dashboard Components
import FacultyDashboard from '../FacultyDashboard';
import StudentDashboard from '../StudentDashboard';

const LoginSignUp = () => {
  const [role, setRole] = useState(""); // State to manage selected role
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage login status

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (role === "Faculty" || role === "Student") {
      setIsLoggedIn(true); // Set login status to true
    } else {
      alert("Please select a valid role.");
    }
  };

  // Render different dashboards based on role
  if (isLoggedIn) {
    if (role === "Faculty") {
      return <FacultyDashboard />;
    } else if (role === "Student") {
      return <StudentDashboard />;
    }
  }

  return (
    <div className="container">
      <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="inputs">
          <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder="Email ID" required />
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder="Password" required />
          </div>
          <div className="input">
            <img src={person_icon} alt="" />
            <select value={role} onChange={handleRoleChange} required>
              <option value="">Select Role</option>
              <option value="Faculty">Faculty</option>
              <option value="Student">Student</option>
            </select>
          </div>
        </div>
        <div className="forgot-password">
          Forgot Password? <span>Click here</span>
        </div>
        <div className="submit-container">
          {/* Use a button for form submission */}
          <button type="submit" className="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginSignUp;
