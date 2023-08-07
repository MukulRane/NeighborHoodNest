import React, { useState, useEffect, useContext } from "react";
import { useHttpClient } from "../../hooks/http-hooks";
// import { useHistory } from "react-router-dom";
import "./Login-Signup.css";
import ErrorModal from "../../components/UIElements/ErrorModal/ErrorModal";
import LoadingSpinner from "../../components/UIElements/LoadingSpinner/LoadingSpinner";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../AppContext";

const LoginSignup = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedCategories, setLoadedCategories] = useState();
  const [loadedSubCategories, setLoadedSubCategories] = useState();
  const { setIsLoggedIn } = useContext(AppContext);

  const [authMode, setAuthMode] = useState("signin");
  const [categoryOptions, setCategoryOptions] = useState([
    {
      id: 1,
      categoryID: "",
      subCategoryID: "",
      aboutMe: "",
      skillsAndExperiences: "",
      workPhotos: [],
    },
  ]);
  const [categoryCount, setCategoryCount] = useState(1);

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
    console.log(authMode);
  };

  const [photos, setPhotos] = useState([]);

  const handlePhotoChange = (e) => {
    const files = Array.from(e.target.files);
    setPhotos(files);
  };

  const handleCategoryChange = async (e, index) => {
    const updatedOptions = [...categoryOptions];
    updatedOptions[index].categoryID = e.target.value;
    setCategoryOptions(updatedOptions);

    const selectedCategoryId = e.target.value;

    let responseData;
    try {
      responseData = await sendRequest(
        `http://localhost:5000/api/category/${selectedCategoryId}`
      );

      setLoadedSubCategories(responseData.categories[0].subCategories);
      console.log("Sub values = " + loadedSubCategories);
    } catch (err) {}
  };

  const handleSubCategoryChange = (e, index) => {
    const updatedOptions = [...categoryOptions];
    updatedOptions[index].subCategoryID = e.target.value;
    setCategoryOptions(updatedOptions);
  };

  const handleRemoveCategory = (index) => {
    setCategoryOptions((prevOptions) => {
      const updatedOptions = prevOptions.filter((_, i) => i !== index);
      return updatedOptions;
    });
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

  const handleAboutMeInputChange = (e, index) => {
    const updatedOptions = [...categoryOptions];
    updatedOptions[index].aboutMe = e.target.value;
    setCategoryOptions(updatedOptions);
  };

  const handleSkillsInputChange = (e, index) => {
    const updatedOptions = [...categoryOptions];
    updatedOptions[index].skillsAndExperiences = e.target.value;
    setCategoryOptions(updatedOptions);
  };

  const handleWorkPhotosInputChange = (e, index) => {
    const updatedOptions = [...categoryOptions];
    updatedOptions[index].workPhotos = e.target.value;
    setCategoryOptions(updatedOptions);
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState(null);
  const [pincode, setPincode] = useState("");
  const [address, setAddress] = useState("");
  const [profilePic, setProfilePic] = useState("");

  const [firstNameSp, setFirstNameSp] = useState("");
  const [lastNameSp, setLastNameSp] = useState("");
  const [emailSp, setEmailSp] = useState("");
  const [passwordSp, setPasswordSp] = useState("");
  const [repeatPasswordSp, setRepeatPasswordSp] = useState("");
  const [mobileNumberSp, setMobileNumberSp] = useState(null);
  const [pincodeSp, setPincodeSp] = useState("");
  const [addressSp, setAddressSp] = useState("");
  const [profilePicSp, setProfilePicSp] = useState("");

  const [signInUsername, setSignInUsername] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  const navigate = useNavigate();

  const signInHandler = async (event) => {
    console.log('inside signInHandler')
    event.preventDefault();
    let responseData;

    try {
      responseData = await sendRequest(
        "http://localhost:5000/api/signIn",
        "POST",
        JSON.stringify({
          email: signInUsername,
          password: signInPassword,
        }),
        { "Content-Type": "application/json" }
      );
      console.log(responseData.signIn.isUser);
      localStorage.setItem("userId", responseData.signIn.userId);
      localStorage.setItem(
        "isUser",
        JSON.stringify(responseData.signIn.isUser)
      );
      localStorage.setItem("isLoggedIn", "y");
      console.log('User logged IN')
      setIsLoggedIn(true);
      navigate("/");
    } catch (err) {
      console.log(err)
    }
  };

  useEffect(() => {
    const fetchCatgories = async () => {
      let responseData;
      try {
        responseData = await sendRequest(
          "http://localhost:5000/api/category/getAllCategories"
        );

        setLoadedCategories(responseData.categories);
        console.log(loadedCategories);
      } catch (err) {}
    };
    fetchCatgories();
  }, []);

  const userSignUpHandler = async (event) => {
    console.log("inside console");
    event.preventDefault();
    try {
      await sendRequest(
        "http://localhost:5000/api/userSignup",
        "POST",
        JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
          phoneNumber: mobileNumber,
          pinCode: parseInt(pincode),
          address: address,
          profileUrl: profilePic,
        }),
        { "Content-Type": "application/json" }
      );
      navigate("/");
    } catch (err) {}
  };

  const serviceProviderSignUpHandler = async (event) => {
    console.log("inside console");
    event.preventDefault();
    try {
      console.log("categoryOptions " + categoryOptions);
      await sendRequest(
        "http://localhost:5000/api/serviceProvider",
        "POST",
        JSON.stringify({
          firstName: firstNameSp,
          lastName: lastNameSp,
          email: emailSp,
          password: passwordSp,
          phoneNumber: mobileNumberSp,
          pinCode: parseInt(pincodeSp),
          address: addressSp,
          profileUrl: profilePicSp,
          services: categoryOptions,
        }),
        { "Content-Type": "application/json" }
      );
      navigate("/");
    } catch (err) {}
  };

  if (authMode === "signin") {
    return (
      <React.Fragment>
        <ErrorModal error={error} onClear={clearError} />
        {isLoading && (
          <div className="center">
            <LoadingSpinner />
          </div>
        )}
        <div className="Login-Signup-Auth-form-container">
          <form className="Login-Signup-Auth-form" onSubmit={signInHandler}>
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
                  value={signInUsername}
                  onChange={(event) => setSignInUsername(event.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  value={signInPassword}
                  onChange={(event) => setSignInPassword(event.target.value)}
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
      </React.Fragment>
    );
  } else if (authMode === "signup_employee") {
    return (
      <React.Fragment>
        <ErrorModal error={error} onClear={clearError} />
        {isLoading && (
          <div className="center">
            <LoadingSpinner />
          </div>
        )}
        <div className="Login-Signup-Auth-form-container">
          <form
            className="Login-Signup-Auth-form"
            onSubmit={serviceProviderSignUpHandler}
          >
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
                    value={firstNameSp}
                    onChange={(e) => setFirstNameSp(e.target.value)}
                  />
                </div>

                <div className="Login-Signup-Auth-form-content-space"></div>

                <div className="Login-Signup-Auth-form-content-last-name form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g Doe"
                    value={lastNameSp}
                    onChange={(e) => setLastNameSp(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  value={emailSp}
                  onChange={(e) => setEmailSp(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={passwordSp}
                  onChange={(e) => setPasswordSp(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Repeat Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Repeat Password"
                  value={repeatPasswordSp}
                  onChange={(e) => setRepeatPasswordSp(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Mobile Number</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Mobile Number"
                  value={mobileNumberSp}
                  onChange={(e) => setMobileNumberSp(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Pincode</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Pincode"
                  value={pincodeSp}
                  onChange={(e) => setPincodeSp(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Address</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Address"
                  value={addressSp}
                  onChange={(e) => setAddressSp(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Profile Picture</label>
                {/* <input
                type="file"
                id="profilePic"
                accept="image/*"
                className="form-control"
                placeholder="Address"
              /> */}
                <input
                  type="text"
                  className="form-control"
                  placeholder="Profile url"
                  value={profilePicSp}
                  onChange={(e) => setProfilePicSp(e.target.value)}
                />
              </div>
              {categoryOptions.map((option, index) => (
                <div key={option.id}>
                  <div className="form-group">
                    <label>Category</label>
                    <select
                      className="form-control"
                      value={loadedSubCategories ? option.categoryID : ""}
                      onChange={(e) => handleCategoryChange(e, index)}
                    >
                      <option value="" disabled selected>
                        Select a category
                      </option>
                      {loadedCategories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.categoryName}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Subcategory</label>
                    <select
                      className="form-control"
                      value={loadedSubCategories ? option.subCategoryID : ""}
                      onChange={(e) => handleSubCategoryChange(e, index)}
                    >
                      <option value="" disabled selected>
                        Select a sub-category
                      </option>
                      {loadedSubCategories &&
                        loadedSubCategories.map((subCategory) => (
                          <option
                            key={subCategory.subCategoryID}
                            value={subCategory.subCategoryID}
                          >
                            {subCategory.subCategoryName}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div className="multiline-text-field">
                    <label>About Me</label>
                    <textarea
                      className="text-area"
                      rows="3"
                      value={option.aboutMe}
                      onChange={(e) => handleAboutMeInputChange(e, index)}
                    />
                  </div>
                  <div className="multiline-text-field">
                    <label>Skills & Experience</label>
                    <textarea
                      className="text-area"
                      rows="3"
                      value={option.skillsAndExperiences}
                      onChange={(e) => handleSkillsInputChange(e, index)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Work Photos</label>
                    {/* <input
                    type="file"
                    className="photo-input"
                    multiple
                    onChange={handlePhotoChange}
                  /> */}
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Profile url"
                      value={option.workPhotos}
                      onChange={(e) => handleWorkPhotosInputChange(e, index)}
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
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      <div className="Login-Signup-Auth-form-container">
        <form className="Login-Signup-Auth-form" onSubmit={userSignUpHandler}>
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
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="Login-Signup-Auth-form-content-space"></div>
              <div className="Login-Signup-Auth-form-content-last-name form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g Doe"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Repeat Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Repeat Password"
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Mobile Number</label>
              <input
                type="number"
                className="form-control"
                placeholder="Mobile Number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Pincode</label>
              <input
                type="number"
                className="form-control"
                placeholder="Pincode"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                className="form-control"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Profile Picture</label>
              {/* <input
              type="file"
              id="profilePic"
              accept="image/*"
              className="form-control"
              placeholder="Address"
            /> */}
              <input
                type="text"
                className="form-control"
                placeholder="Profile url"
                value={profilePic}
                onChange={(e) => setProfilePic(e.target.value)}
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
    </React.Fragment>
  );
};

export default LoginSignup;
