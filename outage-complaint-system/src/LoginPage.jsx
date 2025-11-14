import React, { useState } from "react";
import { User, ShieldCheck } from "lucide-react";

export default function LoginPage({ onLogin }) {
  const [role, setRole] = useState("employee");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    onLogin(role);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-sm">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-2xl">BPI</span>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-center text-gray-900 mb-2">Welcome Back</h1>
        <p className="text-sm text-center text-gray-600 mb-6">BPI Service Portal Login</p>

        <div className="mb-6">
          <p className="text-sm font-medium text-gray-700 mb-2">Select Your Role</p>
          <div className="flex space-x-2">
            <button
              type="button"
              onClick={() => setRole("employee")}
              className={`flex-1 flex items-center justify-center border rounded-lg py-2.5 text-sm font-medium transition-colors ${
                role === "employee"
                  ? "border-red-600 text-red-600 bg-red-50"
                  : "border-gray-300 text-gray-600 hover:border-gray-400"
              }`}
            >
              <User className="w-4 h-4 mr-2" />
              Employee
            </button>
            <button
              type="button"
              onClick={() => setRole("admin")}
              className={`flex-1 flex items-center justify-center border rounded-lg py-2.5 text-sm font-medium transition-colors ${
                role === "admin"
                  ? "border-red-600 text-red-600 bg-red-50"
                  : "border-gray-300 text-gray-600 hover:border-gray-400"
              }`}
            >
              <ShieldCheck className="w-4 h-4 mr-2" />
              Admin
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@bpi.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg py-2.5 transition-colors mt-6"
        >
          {role === "employee" ? "Login as Employee" : "Login as Admin"}
        </button>
      </div>
    </div>
  );
}