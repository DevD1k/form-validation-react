import { useState } from "react";

function App() {
  return (
    <div className="app-container">
      <div className="app-text">
        <p>Find 3d Objects, Mockups and Ilustration here</p>
        <img src="/main.png" alt="main"></img>
      </div>
      <Form />
    </div>
  );
}

function Form() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [submitForm, setSubmitForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { fullName, email, password, confirmPassword } = formData;
    if (!fullName || !email || !password || !confirmPassword) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    if (fullName.split(" ").length < 2) {
      setErrorMessage("Please provide the FullName");
      return;
    }
    if (!email.includes("@") || !email.includes(".")) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }
    setErrorMessage(null);
    setSubmitForm((submit) => !submit);
    setFormData({ fullName: "", email: "", password: "", confirmPassword: "" });
  };

  return (
    <div className="form-area">
      <header>
        <h1>Create Account</h1>
        <div className="links">
          <div className="link">
            <img src="/google.png" alt="google"></img>
            <span>Sign up with Google</span>
          </div>
          <div className="link">
            <img src="/fb.png" alt="facebook"></img>
            <span>Sign up with Facebook</span>
          </div>
        </div>
        <h2>-OR-</h2>
      </header>
      <form onSubmit={handleSubmit} noValidate>
        <input
          type="text"
          placeholder="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email Address"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <button type="submit">Create Account</button>
      </form>
      <div>
        <span className={`${errorMessage ? "error" : "success"}-block`}>
          {submitForm && !errorMessage ? "Created Successfully!" : errorMessage}
        </span>
      </div>
    </div>
  );
}

export default App;
