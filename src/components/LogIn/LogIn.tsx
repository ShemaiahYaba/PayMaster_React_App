import React, { useState } from "react";
import { FormGroup, Label } from "reactstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons
import { useNavigate } from "react-router-dom";
import Header from "../Header.tsx";
import { auth, db } from "../../utils/firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

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

  const handleLogin = async (event) => {
    event.preventDefault(); // Prevent default form submission

    if (validateInputs()) {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        // Signed in
        const user = userCredential.user;

        // Check if the user has a PIN set up
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists() && userDoc.data().pin) {
          // User has a PIN, navigate to EnterPin page
          setError("Login successful! Please enter your PIN.");
          navigate("/enterpin");
        } else {
          // User does not have a PIN, navigate to PIN setup page
          setError("Login successful! Please set up your PIN.");
          navigate("/pin");
        }
      } catch (error) {
        if (error.code === "auth/user-not-found") {
          setError("User not found. Please sign up.");
        } else if (error.code === "auth/wrong-password") {
          setError("Incorrect password. Please try again.");
        } else {
          setError(error.message);
        }
        setError(error.message);
      }
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
            onSubmit={handleLogin}
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
                className="setup-button w-full bg-black border-none rounded-2xl font-bold text-white mb-1 text-lg px-4 py-3"
              >
                Login
              </button>
            </div>
          </form>

          <p
            className="flex flex-row justify-center font-semibold leading-6 text-black hover:text-gray-500 pt-7 items-center cursor-pointer"
            onClick={handleForgotPassword}
          >
            Forgot Password?
          </p>

          <p className="text-center text-gray-500">
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
