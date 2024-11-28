import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Otpverification() {
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [isOtpVerified, setIsOtpVerified] = useState(false);
  const navigate = useNavigate();
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleOtpChange = (e) => setOtp(e.target.value);
  
    const sendOtp = async () => {
      // Call your backend API to send OTP to the user's email
      const response = await fetch("/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
  
      if (response.ok) {
        setIsOtpSent(true);
        alert("OTP sent to your email!");
      } else {
        alert("Failed to send OTP.");
      }
    };
  
    const verifyOtp = async () => {
      // Call your backend API to verify OTP
      const response = await fetch("/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });
  
      const result = await response.json();
      if (result.success) {
        setIsOtpVerified(true);
        alert("OTP verified successfully!");
        navigate('/admin')

      } else {
        alert("Incorrect OTP.");
      }
    };
  return (
    <>
    <div>
      <h2>Register</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
        required
      />
      <button onClick={sendOtp}>Send OTP</button>

      {isOtpSent && (
        <>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={handleOtpChange}
            required
          />
          <button onClick={verifyOtp}>Verify OTP</button>
        </>
      )}

      {isOtpVerified && <p>OTP Verified! You can now complete registration.</p>}
    </div>
    </>
  )
}

export default Otpverification