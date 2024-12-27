import React, { useState } from "react";
import { Lock } from "lucide-react";

const ForgotPass = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password reset logic here
    console.log("Password reset requested for:", email);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#D4E0B4] font-sans">
      <div className="w-full max-w-md p-8 bg-[#D4E0B4] rounded-lg shadow-[0_0_40px_rgba(0,0,0,0.1)]">
        <div className="flex flex-col items-center space-y-6">
          {/* Lock Icon */}
          <div className="p-2 rounded-full bg-black">
            <Lock className="w-6 h-6 text-white" />
          </div>

          {/* Heading */}
          <h1 className="text-2xl font-semibold text-center font-serif">
            Reset your Password
          </h1>

          {/* Instructions */}
          <p className="text-center text-sm">
            Please provide the email address that you used when you signed up
            for your account.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="w-full space-y-6">
            <div className="space-y-2">
              <div className="flex items-center border-b border-black">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="w-full py-2 bg-transparent border-none focus:outline-none text-sm font-mono"
                  required
                />
              </div>
            </div>

            {/* Additional Info */}
            <p className="text-center text-sm">
              We will send you an email that will allow you to reset your
              password.
            </p>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 px-4 bg-black text-white rounded-md hover:bg-black/90 transition-colors font-sans"
            >
              Reset password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPass;
