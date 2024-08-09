import './Register.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import images from '../../assets/images.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    rollno: '',
    password: ''
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${window.location.origin}/api/v1/user/register`, {
        name: inputs.name,
        email: inputs.email,
        rollno: inputs.rollno,
        password: inputs.password
      });
      if (data.success) {
        alert("User Registered Successfully");
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="logo">
          <img src={images} alt="logo" />
        </div>
        <h2>Sign-up</h2>
        <div className="form-group">
          <label htmlFor="name">Full name</label>
          <input
            type="text"
            name="name"
            placeholder="Full name"
            value={inputs.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={inputs.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="rollno">Roll No</label>
          <input
            type="text"
            name="rollno"
            placeholder="Roll No"
            value={inputs.rollno}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={inputs.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">SUBMIT</button>
        <div className="login-link">
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
