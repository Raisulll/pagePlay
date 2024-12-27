"use client";

import { Lock } from "lucide-react";
import { useState } from "react";

export default function PasswordResetForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password reset logic here
    console.log("Password reset requested for:", email);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e5ecd4]">
      <div className="w-full max-w-md p-8 border-2 border-black rounded-lg bg-[#e5ecd4] shadow-lg">
        <div className="flex flex-col items-center space-y-6">
          <div className="p-2 rounded-full bg-black">
            <Lock className="w-6 h-6 text-white" />
          </div>

          <h1 className="text-2xl font-semibold text-center">
            Reset your Password
          </h1>

          <p className="text-center text-sm">
            Please provide the email address that you used when you signed up
            for your account.
          </p>

          <form onSubmit={handleSubmit} className="w-full space-y-6">
            <div className="space-y-2">
              <div className="flex items-center border-b border-black">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="w-full py-2 bg-transparent border-none focus:outline-none text-sm"
                  required
                />
              </div>
            </div>

            <p className="text-center text-sm">
              We will send you an email that will allow you to reset your
              password.
            </p>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-black text-white rounded-md hover:bg-black/90 transition-colors"
            >
              Reset password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
