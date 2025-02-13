import React, { useState } from "react";
import { FormGroup, Label } from "reactstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons
import { useNavigate } from "react-router-dom";
import Header from "../Header.tsx";
import { auth, db } from "../../firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import ToastMessage from "../ToastMessage.tsx";

function SignUp() {
  const navigate = useNavigate();

  // State for input fields, validation error, and password visibility
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);

  const handleGoBack = () => {
    navigate("/Onboarding");
  };

  const validateInputs = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email.");
      return false;
    }
    if (fname === "") {
      setError("First Name cannot be empty.");
      return false;
    }
    if (lname === "") {
      setError("Last name cannot be empty. ");
      return false;
    }
    // Validate password length
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return false;
    }
    if (!termsChecked) {
      setError("You must agree to the terms and conditions.");
      return;
    }

    setError(""); // Clear the error if validation passes
    return true;
  };

  const handleVerification = async (event) => {
    event.preventDefault(); // Prevent default form submission

    if (validateInputs()) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        // Signed in
        const user = userCredential.user;

        // Add user details to Firestore
        await setDoc(doc(db, "users", user.uid), {
          fname: fname,
          lname: lname,
          email: email,
          uid: user.uid,
        });

        ToastMessage({ message: "Sign up successful!", type: "success" });
        navigate("/Verify"); // Navigate if validation passes
      } catch (error) {
        if (error.code === "auth/email-already-in-use") {
          ToastMessage({
            message: "Email is already in use. Please log in.",
            type: "error",
          });
        } else {
          ToastMessage({ message: error.message, type: "error" });
        }
        setError(error.message);
      }
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState); // Toggle password visibility
  };

  const handleCheckboxChange = (event) => {
    setTermsChecked(event.target.checked);
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-4 lg:px-8">
        <div>
          <Header title="Sign Up" onBackClick={handleGoBack} />
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            action="#"
            method="POST"
            className="space-y-6"
            onSubmit={handleVerification}
          >
            <div className="mt-2 relative">
              <FormGroup floating>
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // Update email state
                    className="border-none rounded-2xl peer block w-full p-4 text-sm border focus:outline-none focus:ring-2 focus:ring-[black]"
                  />
                  <Label
                    htmlFor="email"
                    className="absolute left-3 -top-1.5 px-1 -mt-1 text-xs font-medium text-gray-500 bg-white rounded-full"
                  >
                    Email
                  </Label>
                </div>
              </FormGroup>
              <FormGroup floating>
                <div>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    placeholder=""
                    required
                    value={fname}
                    onChange={(e) => setFname(e.target.value)} // Update Name state
                    className="border-none rounded-2xl peer block w-full p-4 text-sm border focus:outline-none focus:ring-2 focus:ring-[black] placeholder-slate-400"
                  />
                  <Label
                    htmlFor="name"
                    className="absolute left-3 -top-1.5 px-1 -mt-1 text-xs font-medium text-gray-500 bg-white rounded-full"
                  >
                    First-name
                  </Label>
                </div>
              </FormGroup>
              <FormGroup floating>
                <div>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    placeholder=""
                    required
                    value={lname}
                    onChange={(e) => setLname(e.target.value)} // Update Name state
                    className="border-none rounded-2xl peer block w-full p-4 text-sm border focus:outline-none focus:ring-2 focus:ring-[black] placeholder-slate-400"
                  />
                  <Label
                    htmlFor="name"
                    className="absolute left-3 -top-1.5 px-1 -mt-1 text-xs font-medium text-gray-500 bg-white rounded-full"
                  >
                    Last-name
                  </Label>
                </div>
              </FormGroup>
            </div>
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
                    className="border-none rounded-2xl peer block w-full p-4 text-sm border focus:outline-none focus:ring-2 focus:ring-[black]"
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
            {error && <p className="text-red-500">{error}</p>}{" "}
            {/* Display error message */}
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="terms"
                className="h-6 w-6 text-black border border-black rounded-2xl focus:ring-black"
                checked={termsChecked}
                onChange={handleCheckboxChange}
                required
              />
              <label htmlFor="" className="ml-2 text-gray-600 text-sm">
                By signing up, you agree to the{" "}
                <span className=" cursor-pointer">
                  <a
                    href="/termsofservice"
                    className="text-black hover:text-gray-600"
                  >
                    Terms of Service
                  </a>
                </span>{" "}
                and{" "}
                <span className=" cursor-pointer">
                  <a
                    href="privacypolicy"
                    className="text-black hover:text-gray-600"
                  >
                    Privacy Policy
                  </a>
                </span>
              </label>
            </div>
            <div>
              <button
                type="submit"
                className="w-full border-none rounded-2xl bg-black text-lg text-white font-semibold mb-1 px-4 py-3"
                onClick={handleVerification}
              >
                Sign Up
              </button>
            </div>
          </form>

          <p className="text-center text-sm text-gray-500 p-3">
            Already have an account?{" "}
            <a
              href="/login"
              className="font-semibold leading-6 text-black hover:text-gray-500"
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default SignUp;
