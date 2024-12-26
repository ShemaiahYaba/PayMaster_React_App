import React, { useState } from "react";
import { FormGroup, Label } from "reactstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons
import { useNavigate } from "react-router-dom";
import Header from "../Header";

function LogIn() {
  const navigate = useNavigate();

  // State for input fields, validation error, and password visibility
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false); // State to manage password visibility

  const handleGoBack = () => {
    navigate("/Onboarding");
  };

  const handleForgotPassword = () => {
    navigate("/ForgotPassword");
  };

  const validateInputs = () => {
    if (!email || !password) {
      setError("Both fields are required.");
      return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email.");
      return false;
    }

    // Validate password length
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return false;
    }

    setError(""); // Clear the error if validation passes
    return true;
  };

  const handleSetupAccount = (event) => {
    event.preventDefault(); // Prevent default form submission

    if (validateInputs()) {
      navigate("/pin"); // Navigate if validation passes
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState); // Toggle password visibility
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-4 lg:px-8">
        <div>
          <Header title="Login" onBackClick={handleGoBack} />
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            action="#"
            method="POST"
            className="space-y-6"
            onSubmit={handleSetupAccount}
          >
            <div>
              <div className="mt-2 relative">
                <FormGroup floating>
                  <div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder=""
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)} // Update email state
                      className="peer block w-full p-4 text-sm border rounded-2xl focus:outline-none focus:ring-2 focus:ring-[black]"
                    />
                    <Label
                      htmlFor="email"
                      className="absolute left-3 -top-1.5 px-1 -mt-1 text-xs font-medium text-gray-500 bg-white rounded-full"
                    >
                      Email
                    </Label>
                  </div>
                </FormGroup>
              </div>
            </div>
            <div>
              <div className="mt-2 relative">
                <FormGroup floating>
                  <div className="relative">
                    <input
                      placeholder=""
                      id="password"
                      name="password"
                      type={passwordVisible ? "text" : "password"} // Toggle input type based on state
                      required
                      autoComplete="current-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)} // Update password state
                      className="peer block w-full p-4 text-sm border rounded-2xl focus:outline-none focus:ring-2 focus:ring-[black]"
                    />
                    <Label
                      htmlFor="password"
                      className="absolute left-3 -top-1.5 px-1 -mt-1 text-xs font-medium text-gray-500 bg-white rounded-full"
                    >
                      Password
                    </Label>
                    {/* Eye icon to toggle password visibility */}
                    <div
                      onClick={togglePasswordVisibility}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    >
                      {passwordVisible ? (
                        <FaEyeSlash size={20} />
                      ) : (
                        <FaEye size={20} />
                      )}
                    </div>
                  </div>
                </FormGroup>
              </div>
            </div>
            {error && <p className="text-red-500">{error}</p>}{" "}
            {/* Display error message */}
            <div>
              <button
                type="submit"
                className="setup-button w-full"
                style={{
                  backgroundColor: "black",
                  padding: "15px 130px", // Adjusted padding for a balanced look
                  fontSize: "18px", // Adjusted font size for better fit
                  border: "none",
                  borderRadius: "18px",
                  marginBottom: "2px",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                Login
              </button>
            </div>
          </form>

          <p
            className="font-semibold leading-6 text-black hover:text-gray-500"
            style={{
              color: "indigo",
              textAlign: "center",
              paddingTop: "30px",
              paddingBottom: "10px",
              cursor: "pointer",
            }}
            onClick={handleForgotPassword}
          >
            Forgot Password?
          </p>

          <p className="text-center text-sm text-gray-500">
            Don't have an account yet?{" "}
            <a
              href="/signup"
              className="font-semibold leading-6 text-black hover:text-gray-500"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default LogIn;
