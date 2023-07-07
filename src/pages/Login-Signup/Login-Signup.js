import React, { useState } from "react";
import "./Login-Signup.css";

const LoginSignup = () => {
  const [authMode, setAuthMode] = useState("signin");
  const [categoryOptions, setCategoryOptions] = useState([
    { id: 1, category: "", subcategory: "" },
  ]);
  const [categoryCount, setCategoryCount] = useState(1);

  const categories = [
    { name: "Category 1", subcategories: ["Subcategory 1", "Subcategory 2"] },
    { name: "Category 2", subcategories: ["Subcategory 3", "Subcategory 4"] },
  ];

  const [aboutMeTextValue, setAboutMeTextValue] = useState("");

  const handleAboutMeInputChange = (e) => {
    setAboutMeTextValue(e.target.value);
  };

  const [skillsTextValue, setSkillsTextValue] = useState("");

  const handleSkillsInputChange = (e) => {
    setSkillsTextValue(e.target.value);
  };

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  const [photos, setPhotos] = useState([]);

  const handlePhotoChange = (e) => {
    const files = Array.from(e.target.files);
    setPhotos(files);
  };

  const handleCategoryChange = (e, index) => {
    const updatedOptions = [...categoryOptions];
    updatedOptions[index].category = e.target.value;
    setCategoryOptions(updatedOptions);
  };

  const handleSubcategoryChange = (e, index) => {
    const updatedOptions = [...categoryOptions];
    updatedOptions[index].subcategory = e.target.value;
    setCategoryOptions(updatedOptions);
  };

  const handleRemoveCategory = (index) => {
    setCategoryOptions(
      categoryOptions.filter((option) => option.id !== index + 1)
    );
  };

  const handleAddCategory = () => {
    setCategoryCount(categoryCount + 1);
    setCategoryOptions([
      ...categoryOptions,
      { id: categoryCount + 1, category: "", subcategory: "" },
    ]);
  };

  const changeSignUpMode = () => {
    setAuthMode(authMode === "signup" ? "signup_employee" : "signup");
    console.log(authMode);
  };

  if (authMode === "signin") {
    return (
      <div className="Login-Signup-Auth-form-container">
        <form className="Login-Signup-Auth-form">
          <div className="Login-Signup-Auth-form-content">
            <h3 className="Login-Signup-Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
    );
  } else if (authMode === "signup_employee") {
    return (
      <div className="Login-Signup-Auth-form-container">
        <form className="Login-Signup-Auth-form">
          <div className="Login-Signup-Auth-form-content">
            <h3 className="Login-Signup-Auth-form-title">Sign Up</h3>
            <div className="text-center">
              Already registered?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign In
              </span>
            </div>
            <div className="Login-Signup-Auth-form-content-name">
              <div className="Login-Signup-Auth-form-content-first-name form-group">
                <label>First Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g Jane"
                />
              </div>

              <div className="Login-Signup-Auth-form-content-space"></div>

              <div className="Login-Signup-Auth-form-content-last-name form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g Doe"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <div className="form-group">
              <label>Repeat Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Repeat Password"
              />
            </div>
            <div className="form-group">
              <label>Mobile Number</label>
              <input
                type="number"
                className="form-control"
                placeholder="Mobile Number"
              />
            </div>
            <div className="form-group">
              <label>Pincode</label>
              <input
                type="number"
                className="form-control"
                placeholder="Pincode"
              />
            </div>
            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                className="form-control"
                placeholder="Address"
              />
            </div>
            <div className="form-group">
              <label>Profile Picture</label>
              <input
                type="file"
                id="profilePic"
                accept="image/*"
                className="form-control"
                placeholder="Address"
              />
            </div>
            {categoryOptions.map((option, index) => (
              <div key={option.id}>
                <div className="form-group">
                  <label>Category</label>
                  <select
                    className="form-control"
                    value={option.category}
                    onChange={(e) => handleCategoryChange(e, index)}
                  >
                    <option value="">Select a category</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Subcategory</label>
                  <select
                    className="form-control"
                    value={option.subcategory}
                    onChange={(e) => handleSubcategoryChange(e, index)}
                  >
                    <option value="">Select a subcategory</option>
                  </select>
                </div>
                <div className="multiline-text-field">
                  <label>About Me</label>
                  <textarea
                    className="text-area"
                    rows="3"
                    value={aboutMeTextValue}
                    onChange={handleAboutMeInputChange}
                  />
                </div>
                <div className="multiline-text-field">
                  <label>Skills & Experience</label>
                  <textarea
                    className="text-area"
                    rows="3"
                    value={skillsTextValue}
                    onChange={handleSkillsInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Work Photos</label>
                  <input
                    type="file"
                    className="photo-input"
                    multiple
                    onChange={handlePhotoChange}
                  />
                </div>

                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveCategory(index)}
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}

            <button type="button" onClick={handleAddCategory}>
              Add Category
            </button>
            <div style={{ height: "10px" }}></div>
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <div className="text-center">
              Sign up as a{" "}
              <span className="link-primary" onClick={changeSignUpMode}>
                customer?
              </span>
            </div>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="Login-Signup-Auth-form-container">
      <form className="Login-Signup-Auth-form">
        <div className="Login-Signup-Auth-form-content">
          <h3 className="Login-Signup-Auth-form-title">Sign Up</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="Login-Signup-Auth-form-content-name">
            <div className="Login-Signup-Auth-form-content-first-name form-group">
              <label>First Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="e.g Jane"
              />
            </div>

            <div className="Login-Signup-Auth-form-content-space"></div>

            <div className="Login-Signup-Auth-form-content-last-name form-group">
              <label>Last Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="e.g Doe"
              />
            </div>
          </div>

          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <div className="form-group">
            <label>Repeat Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Repeat Password"
            />
          </div>
          <div className="form-group">
            <label>Mobile Number</label>
            <input
              type="number"
              className="form-control"
              placeholder="Mobile Number"
            />
          </div>
          <div className="form-group">
            <label>Pincode</label>
            <input
              type="number"
              className="form-control"
              placeholder="Pincode"
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input type="text" className="form-control" placeholder="Address" />
          </div>
          <div className="form-group">
            <label>Profile Picture</label>
            <input
              type="file"
              id="profilePic"
              accept="image/*"
              className="form-control"
              placeholder="Address"
            />
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <div className="text-center">
            Want to join us?{" "}
            <span className="link-primary" onClick={changeSignUpMode}>
              Sign up as an Employee
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginSignup;
