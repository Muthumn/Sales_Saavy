import React from "react";
import signupImage from "../assets/signup_ph.jpg";

export default function Register() {
  return (
    <div className="register-main">
      <div className="register-box">
        <img src={signupImage} alt="Signup Placeholder Image" />
      </div>
      <div className="register-main-form">
        <h1>Create an account</h1>

        <form action="/registerUser" method="post">
          <input type="text" name="firstname" placeholder="First name" />
          <input type="text" name="lastname" placeholder="Last name" />
          <input type="text" name="username" placeholder="Username" />
          <select name="react" id="role">
            <option value="">Select your role</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />

          <button type="submit">Create account</button>
        </form>
        <p>
          Already have an account ? <a href="">Log in</a>
        </p>
      </div>
    </div>
  );
}
