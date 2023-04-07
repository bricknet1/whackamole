import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
// import * as yup from "yup";
// import LoginForm from './LoginForm';
// import SignupForm from './Signup';

// import {useSelector, useDispatch} from 'react-redux';
// import {healthSet} from '../actions';
// import setLoginStates from "./setLoginStates";
import {useSelector, useDispatch} from 'react-redux';
import {healthSet} from '../actions';

function Login({ setUser }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  // const [signup, setSignup] = useState(false);

  // const handleClick = () => setSignup(!signup)

  // const formSchema = yup.object().shape({
  //     email: yup.string().email(),
  //     password: yup
  //         .string()
  //         .required('Password is required'),
  // });
  
  function handleSignup() {
    history.push("/signup");
  }
  
  const setLoginStates = (user) => {
    const item1 = user.items.filter(item => item.id === user.item1)[0]
    const item2 = user.items.filter(item => item.id === user.item2)[0]
    return(
      dispatch(healthSet(10+(item1?item1.health:0)+(item2?item2.health:0)))
    )
  }

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    // validationSchema: formSchema,
    onSubmit: (values) => {
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
            setLoginStates(user);
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
      <p>New to Whackamolé?</p>
      <button className="loginsignupbtn" onClick={handleSignup}>
        Signup Instead
      </button>
    </div>
  );
}

export default Login;
