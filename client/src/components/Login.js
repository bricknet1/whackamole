import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import buttonSound from '../sounds/button.wav';

function Login({ setUser, setValues }) {
  const history = useHistory();
  const [error, setError] = useState("");

  const buttonSoundPlay = new Audio(buttonSound);
  
  function handleSignup() {
    buttonSoundPlay.play()
    history.push("/signup");
  }

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      buttonSoundPlay.play()
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }).then((res) => {
        if (res.ok) {
          res.json().then((user) => {
            setUser(user);
            history.push("/");
            setValues(user);
          });
        } else {
          res.json().then((error) => setError(error.message));
        }
      });
    },
  });


  return (
    <div className="signup-login">
      <h2>Login</h2>
      {error && <h3 style={{ color: "#4FC9C2" }}> {error}</h3>}
      <form onSubmit={formik.handleSubmit}>
        <label>Username</label>
        <br></br>
        <input
          type="text"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
        />
        <br></br>
        <br></br>
        <label>Password</label>
        <br></br>
        <input
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <br></br>
        <br></br>
        <input type="submit" value="Log In!" />
      </form>
      <br />
      <br />
      <br />
      <p>New to Whack-A-Mo-Le?</p>
      <button className="loginsignupbtn" onClick={handleSignup}>
        Signup Instead
      </button>
    </div>
  );
}

export default Login;
