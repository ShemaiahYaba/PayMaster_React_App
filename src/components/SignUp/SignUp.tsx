import React, { useState } from "react";
import { FormGroup, Label } from "reactstrap";
import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons
import { useNavigate } from "react-router-dom";
import Header from "../../Header";

function SignUp() {
  const navigate = useNavigate();

  // State for input fields, validation error, and password visibility
  const [name, setName] = useState("");
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

  const handleVerification = (event) => {
    event.preventDefault(); // Prevent default form submission

    if (validateInputs()) {
      navigate("/Verify"); // Navigate if validation passes
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
            <div>
              <div className="mt-2 relative">
                <FormGroup floating>
                  <div>
                    <input
                      type="name"
                      name="name"
                      id="name"
                      placeholder=""
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)} // Update Name state
                      style={{ border: "none", borderRadius: "15px" }}
                      className="peer block w-full p-4 text-sm border focus:outline-none focus:ring-2 focus:ring-[black] placeholder-slate-400"
                    />
                    <Label
                      htmlFor="name"
                      className="absolute left-3 -top-1.5 px-1 -mt-1 text-xs font-medium text-gray-500 bg-white rounded-full"
                    >
                      Name
                    </Label>
                  </div>
                </FormGroup>
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
                      style={{ border: "none", borderRadius: "15px" }}
                      className="peer block w-full p-4 text-sm border focus:outline-none focus:ring-2 focus:ring-[black]"
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
                      style={{ border: "none", borderRadius: "15px" }}
                      className="peer block w-full p-4 text-sm border focus:outline-none focus:ring-2 focus:ring-[black]"
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
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="terms"
                className="h-6 w-6 text-black border-black rounded focus:ring-black"
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
                className="w-full"
                style={{
                  border: "none",
                  borderRadius: "18px",
                  backgroundColor: "black",
                  padding: "15px 130px", // Adjusted padding for a balanced look
                  fontSize: "18px", // Adjusted font size for better fit
                  color: "white",
                  marginBottom: "2px",
                  fontWeight: "bold",
                }}
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
